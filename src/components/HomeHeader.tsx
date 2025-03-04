
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Link, Copy, Users, Trophy, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Logo } from './Logo';
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const HomeHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // Generate a unique referral code
  const referralCode = React.useMemo(() => {
    const userPart = "caresanctum";
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${userPart}_${randomPart}`;
  }, []);

  const referralLink = `https://preview--gentlecarehub.lovable.app/signup?referal_code=${referralCode}`;

  // Show acquisition toast messages on component mount
  useEffect(() => {
    // Show referral achievement toast after a short delay
    const timer = setTimeout(() => {
      toast({
        title: "🎉 Referral Achievement!",
        description: "Pawan Agarwal referred 25 members and earned ₹3,500",
        duration: 5000,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast]);

  const handleEmergency = () => {
    toast({
      title: "Emergency assistance requested",
      description: "Our team has been notified and will contact you immediately.",
      duration: 5000,
    });
  };

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

  const navigateToReferrals = () => {
    // Navigate to profile page and scroll to referrals section
    navigate('/profile#referrals');
  };

  return (
    <header className="bg-white shadow-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo />
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center cursor-help">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Apollo_Hospitals_Logo.svg/1200px-Apollo_Hospitals_Logo.svg.png" 
                    alt="Apollo Hospitals" 
                    className="h-6 ml-2 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <Info className="h-3.5 w-3.5 text-primary/60 ml-1" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-white p-3 shadow-lg border border-primary/10 max-w-xs">
                <div className="text-sm">
                  <span className="font-semibold text-primary">Enterprise User</span>
                  <p className="text-gray-600 mt-1">Onboarded by Apollo Hospitals under their corporate wellness program.</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="destructive"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
            onClick={handleEmergency}
          >
            <Bell className="h-5 w-5 animate-pulse" />
            SOS
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="relative bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border-primary/20"
              >
                <Users className="h-5 w-5 text-primary" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogTitle className="text-xl font-bold text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                Share with friends & family
              </DialogTitle>
              <div className="mt-4">
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
                          <Copy className="h-4 w-4" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Button
                    onClick={navigateToReferrals}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <Trophy className="mr-2 h-5 w-5" />
                    View My Referrals
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <div 
            className="cursor-pointer" 
            onClick={() => navigate('/profile')}
          >
            <Avatar className="h-10 w-10 border-2 border-primary">
              <AvatarImage 
                src="/lovable-uploads/06ca9dad-031b-4abb-89e3-b5790fbd261b.png" 
                alt="Profile Picture"
                className="object-cover"
              />
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
