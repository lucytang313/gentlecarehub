
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Users, Copy, Link, Trophy, Award, PartyPopper, ChartBar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, Cell } from 'recharts';

type ReferralUser = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isOnboarded: boolean;
  earningsPercentage: number;
  earnings: number;
  referredDate: string;
};

export const ReferralTracking = () => {
  const { toast } = useToast();
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
  // Generate a unique referral code
  const referralCode = React.useMemo(() => {
    const userPart = "caresanctum";
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${userPart}_${randomPart}`;
  }, []);

  const referralLink = `https://preview--gentlecarehub.lovable.app/signup?referal_code=${referralCode}`;
  
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      toast({
        title: "Referral link copied!",
        description: "Share it with your friends and family",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Mock data - in a real app, this would come from an API
  const [referrals] = React.useState<ReferralUser[]>([
    {
      id: "1",
      name: "Rahul Sharma",
      email: "rahul.s@example.com",
      isOnboarded: true,
      earningsPercentage: 5,
      earnings: 1200,
      referredDate: "2024-03-15"
    },
    {
      id: "2",
      name: "Priya Patel",
      email: "priya.p@example.com",
      isOnboarded: false,
      earningsPercentage: 0,
      earnings: 0,
      referredDate: "2024-03-25"
    },
    {
      id: "3",
      name: "Vikram Singh",
      email: "vikram@example.com",
      isOnboarded: true,
      earningsPercentage: 5,
      earnings: 950,
      referredDate: "2024-04-02"
    },
    {
      id: "4",
      name: "Ananya Desai",
      email: "ananya.d@example.com",
      isOnboarded: true,
      earningsPercentage: 5,
      earnings: 1500,
      referredDate: "2024-04-10"
    },
    {
      id: "5",
      name: "Karthik Reddy",
      email: "karthik@example.com",
      isOnboarded: false,
      earningsPercentage: 0,
      earnings: 0,
      referredDate: "2024-04-15"
    }
  ]);

  // Top earners data for leaderboard
  const topEarners = [
    { name: "Ananya D.", earnings: 1500, rank: 1 },
    { name: "Rahul S.", earnings: 1200, rank: 2 },
    { name: "Vikram S.", earnings: 950, rank: 3 }
  ];
  
  // User's current rank
  const currentUserRank = 2; // Mock data - would come from API in real app

  // Calculate summary metrics
  const totalReferred = referrals.length;
  const totalOnboarded = referrals.filter(user => user.isOnboarded).length;
  const totalEarnings = referrals.reduce((sum, user) => sum + user.earnings, 0);

  // Colors for the chart bars
  const chartColors = ['#D946EF', '#8B5CF6', '#0EA5E9'];

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 border-primary/10 shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-primary flex items-center gap-2">
          <Users className="h-5 w-5" />
          My Referrals
          <button 
            onClick={() => setShowLeaderboard(true)}
            className="ml-2 inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1.5 rounded-full hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="View Leaderboard"
            title="View Leaderboard"
          >
            <Trophy className="h-4 w-4" />
          </button>
        </CardTitle>
      </CardHeader>
      
      {/* Referral Link Section */}
      <div className="px-6 pb-4">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <Link className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-primary">Your Referral Link</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Input 
              value={referralLink}
              readOnly
              className="bg-white border-primary/20 text-sm font-medium focus-visible:ring-primary"
            />
            <Button 
              onClick={handleCopyLink} 
              size="sm" 
              className="flex items-center gap-1 bg-primary hover:bg-primary/90 transition-all animate-scale-in"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      <CardContent className="px-0">
        <div className="px-6 pb-2">
          <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground border-b pb-2">
            <div className="col-span-2">User Referred</div>
            <div className="text-center">User Onboarded</div>
            <div className="text-center">Earnings %</div>
            <div className="text-center">Earnings (₹)</div>
          </div>
        </div>
        
        <ScrollArea className="h-[300px]">
          <div className="px-6">
            {referrals.map((referral) => (
              <div 
                key={referral.id} 
                className="grid grid-cols-5 py-3 border-b border-dashed last:border-b-0 hover:bg-gray-50 transition-colors text-sm items-center"
              >
                <div className="col-span-2 flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={referral.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {referral.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{referral.name}</p>
                    <p className="text-xs text-muted-foreground">{referral.email}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  {referral.isOnboarded ? (
                    <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                      <Check className="h-3 w-3 mr-1" />
                      Yes
                    </Badge>
                  ) : (
                    <Badge variant="default" className="bg-red-600 hover:bg-red-700">
                      <X className="h-3 w-3 mr-1" />
                      No
                    </Badge>
                  )}
                </div>
                <div className="text-center font-medium">
                  {referral.earningsPercentage > 0 ? `${referral.earningsPercentage}%` : '-'}
                </div>
                <div className="text-center font-medium">
                  {referral.earnings > 0 ? `₹${referral.earnings.toLocaleString()}` : '-'}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-gray-50 rounded-b-lg border-t flex justify-between">
        <div className="flex gap-6">
          <div>
            <p className="text-xs text-muted-foreground">Total Referred</p>
            <p className="font-semibold text-primary">{totalReferred}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Onboarded</p>
            <p className="font-semibold text-primary">{totalOnboarded}</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Total Earnings</p>
          <p className="font-semibold text-primary">₹{totalEarnings.toLocaleString()}</p>
        </div>
      </CardFooter>

      {/* Celebration Leaderboard Modal */}
      <Dialog open={showLeaderboard} onOpenChange={setShowLeaderboard}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-[#F8F9FA] to-[#F0F4F8] border-2 border-[#9b87f5]/30 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWFzZjdnaTJrbWxmc3BkbnE1MXFzeXZwaTcwaHlwM2hkZWV0ZHJ3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tOZ42Mg6pbTUPHW/giphy.gif')] opacity-20 bg-cover bg-center -z-10" />
          
          <div className="text-center mb-2">
            <div className="inline-flex gap-2 items-center justify-center">
              <PartyPopper className="h-6 w-6 text-[#D946EF]" />
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
                Top Referrers
              </DialogTitle>
              <Award className="h-6 w-6 text-[#8B5CF6]" />
            </div>
            <p className="text-gray-600 mt-1">Congratulations to our top performers!</p>
          </div>

          <div className="mt-4 pb-2">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart 
                data={topEarners} 
                margin={{ top: 20, right: 30, left: 30, bottom: 10 }}
                layout="vertical"
              >
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ 
                    fill: '#6E59A5', 
                    fontSize: 14,
                    fontWeight: 500
                  }} 
                />
                <Bar 
                  dataKey="earnings" 
                  radius={[4, 4, 4, 4]}
                  barSize={40}
                  background={{ fill: '#f5f5f5' }}
                >
                  {topEarners.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                  ))}
                  <LabelList 
                    dataKey="earnings" 
                    position="right" 
                    formatter={(value: number) => `₹${value.toLocaleString()}`}
                    style={{ 
                      fill: '#333', 
                      fontSize: 14,
                      fontWeight: 600
                    }} 
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between items-center bg-gradient-to-r from-[#9b87f5]/20 to-[#D946EF]/20 p-3 rounded-lg mt-2">
            <div className="flex items-center gap-2">
              <ChartBar className="h-5 w-5 text-[#8B5CF6]" />
              <span className="text-gray-700 font-medium">Your Ranking</span>
            </div>
            <div className="bg-white px-4 py-1.5 rounded-full shadow-sm border border-[#9b87f5]/30">
              <span className="font-bold text-[#6E59A5]">#{currentUserRank}</span>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => setShowLeaderboard(false)}
              className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7E69AB] hover:to-[#C935DE] border-none shadow-md hover:shadow-lg"
            >
              Keep Referring!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
