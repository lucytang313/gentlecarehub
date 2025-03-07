
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Link, Copy, Users, Trophy, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Logo } from './Logo';
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const HomeHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [referralDialogOpen, setReferralDialogOpen] = useState(false);
  const [referralCode] = useState("PAWAN25");

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Referral Code Copied",
      description: "Your referral code has been copied to clipboard!",
    });
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-primary/5 px-3 py-1 rounded-full flex items-center gap-2 cursor-help border border-primary/10">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Apollo_Hospitals_Logo.svg/1200px-Apollo_Hospitals_Logo.svg.png" 
                    alt="Apollo Hospitals" 
                    className="h-4 object-contain" 
                  />
                  <span className="text-xs font-medium text-primary">Enterprise Plan</span>
                  <Info className="h-3 w-3 text-primary/60" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-2 max-w-xs">
                  <p className="font-medium">Apollo Hospitals Corporate Wellness Program</p>
                  <p className="text-sm">You're enrolled through your employer's wellness initiative with Apollo Hospitals.</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <Dialog open={referralDialogOpen} onOpenChange={setReferralDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
              >
                <Users className="h-4 w-4" />
                Refer
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Share and Earn
              </DialogTitle>
              <div className="space-y-4 mt-4">
                <div className="bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800 border border-yellow-200">
                  Earn ₹140 for each person who signs up using your referral link and completes their first month!
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Your Referral Code</p>
                  <div className="flex gap-2">
                    <Input value={referralCode} readOnly className="flex-grow" />
                    <Button 
                      variant="outline" 
                      onClick={copyReferralCode}
                      className="flex items-center gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Share your referral link</p>
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
                
                <div className="pt-4">
                  <Button 
                    onClick={() => {
                      setReferralDialogOpen(false);
                      navigate('/profile#referrals');
                    }}
                    className="w-full"
                  >
                    View Your Referrals
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <div className="flex items-center gap-2" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
            <Avatar>
              <AvatarImage src="/lovable-uploads/06ca9dad-031b-4abb-89e3-b5790fbd261b.png" />
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
