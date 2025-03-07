import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Users, Trophy, Award, Medal, Sparkles, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ReferralTracking = () => {
  const { toast } = useToast();
  const [referralCode] = useState("PAWAN25");
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Referral Code Copied",
      description: "Your referral code has been copied to clipboard!",
    });
  };

  const userReferrals = {
    count: 25,
    earnings: 3500,
    leaderboard: [
      { name: "Rajiv Sharma", count: 42, earnings: 5880 },
      { name: "Anita Desai", count: 37, earnings: 5180 },
      { name: "Pawan Agarwal", count: 25, earnings: 3500 },
      { name: "Vijay Malhotra", count: 18, earnings: 2520 },
      { name: "Sunita Gupta", count: 16, earnings: 2240 },
    ],
    userRank: 3
  };

  return (
    <div id="referrals">
      <Card className="bg-gradient-to-br from-white to-purple-50 border-primary/10 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-primary flex items-center gap-2">
            <Users className="h-5 w-5" />
            My Referrals
            <button 
              onClick={() => setIsLeaderboardOpen(true)}
              className="ml-2 bg-yellow-100 text-yellow-700 p-1 rounded-full hover:bg-yellow-200 transition-colors"
            >
              <Trophy className="h-4 w-4" />
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500">Total Referrals</p>
                <p className="text-2xl font-bold text-primary">{userReferrals.count}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500">Total Earnings</p>
                <p className="text-2xl font-bold text-primary">₹{userReferrals.earnings}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div>
                <p className="text-sm text-gray-500">Your Referral Code</p>
                <p className="text-lg font-medium">{referralCode}</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={copyReferralCode}
                className="flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy
              </Button>
            </div>

            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500 mb-2">Share your referral link</p>
              <div className="flex gap-2">
                <Input 
                  value={`https://caresanctum.com/signup?referal_code=${referralCode}`} 
                  readOnly 
                  className="flex-grow"
                />
                <Button 
                  variant="outline" 
                  onClick={copyReferralCode}
                  className="flex items-center gap-2"
                >
                  <Link className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isLeaderboardOpen} onOpenChange={setIsLeaderboardOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <span className="mx-2">Referral Leaderboard</span>
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnRnZHdpb2p2MWF2aXJnMW9tOGF3ZWZ6bnAybWhvNmN0ZDE0cWVsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/artj92V8o75VPL7AeQ/giphy.gif" 
                alt="Celebration" 
                className="w-32 h-32 object-cover my-2"
              />
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 mt-4">
              {userReferrals.leaderboard.slice(0, 3).map((user, index) => (
                <div key={index} className={`flex flex-col items-center ${index === 0 ? 'order-2' : index === 1 ? 'order-1' : 'order-3'}`}>
                  <div className="relative">
                    <Avatar className="h-16 w-16 border-2 border-white shadow-md">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${user.name}`} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2">
                      {index === 0 ? (
                        <Award className="h-8 w-8 text-yellow-500" />
                      ) : index === 1 ? (
                        <Medal className="h-6 w-6 text-gray-400" />
                      ) : (
                        <Medal className="h-6 w-6 text-amber-600" />
                      )}
                    </div>
                  </div>
                  <p className="font-medium text-sm mt-3 text-center">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.count} referrals</p>
                  <p className="text-xs font-semibold">₹{user.earnings}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-center mb-2">Your Ranking</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold">
                    {userReferrals.userRank}
                  </div>
                  <div>
                    <p className="font-medium">Pawan Agarwal</p>
                    <p className="text-xs text-gray-500">{userReferrals.count} referrals</p>
                  </div>
                </div>
                <p className="font-semibold">₹{userReferrals.earnings}</p>
              </div>
            </div>
            
            <Button variant="outline" className="w-full" onClick={() => setIsLeaderboardOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
