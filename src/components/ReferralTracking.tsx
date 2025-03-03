
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Users, Copy, Link } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

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
  // Generate a unique referral code
  const referralCode = React.useMemo(() => {
    const userPart = "caresanctum";
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${userPart}_${randomPart}`;
  }, []);

  const referralLink = `https://caresanctum.com/?referral_code=${referralCode}`;
  
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

  // Calculate summary metrics
  const totalReferred = referrals.length;
  const totalOnboarded = referrals.filter(user => user.isOnboarded).length;
  const totalEarnings = referrals.reduce((sum, user) => sum + user.earnings, 0);

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 border-primary/10 shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-primary flex items-center gap-2">
          <Users className="h-5 w-5" />
          My Referrals
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
    </Card>
  );
};
