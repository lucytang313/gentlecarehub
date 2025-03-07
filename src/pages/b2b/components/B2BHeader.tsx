
import React, { useState } from 'react';
import { Bell, LogOut, Link, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger
} from "@/components/ui/popover";
import { Notification } from '../types';

interface B2BHeaderProps {
  notifications: Notification[];
  markAllAsRead: () => void;
}

export const B2BHeader: React.FC<B2BHeaderProps> = ({ 
  notifications,
  markAllAsRead 
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isReferralDialogOpen, setIsReferralDialogOpen] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      duration: 2000,
    });
    navigate('/signin');
  };

  const generateReferralLink = () => {
    return `https://webapp.caresanctum.com/signup?refferal_code=${referralCode}`;
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(generateReferralLink());
    toast({
      title: "Referral Link Copied",
      description: "Your referral link has been copied to clipboard",
    });
  };

  const handleNotificationClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (!isNotificationsOpen) {
      markAllAsRead();
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* CareSanctum Logo */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Apollo_Hospitals_Logo.svg/1200px-Apollo_Hospitals_Logo.svg.png" 
            alt="Apollo Hospitals" 
            className="h-8 object-contain" 
          />
          <span className="text-gray-400 text-xl">×</span>
          <img 
            src="https://example.com/caresanctum-logo.png" // Replace with actual CareSanctum logo URL
            alt="CareSanctum" 
            className="h-6 object-contain" 
          />
        </div>

        <div className="flex items-center space-x-4">
          {/* Referral Dialog */}
          <Dialog open={isReferralDialogOpen} onOpenChange={setIsReferralDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Link className="h-4 w-4" />
                Generate Referral
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Generate Your Referral Link</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Enter your referral code to generate a shareable link</p>
                  <Input
                    placeholder="Your Referral Code"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                  />
                </div>
                {referralCode && (
                  <div className="flex items-center space-x-2">
                    <Input
                      value={generateReferralLink()}
                      readOnly
                      className="flex-1"
                    />
                    <Button onClick={copyReferralLink} size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Notifications */}
          <Popover open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" onClick={handleNotificationClick} className="relative">
                <Bell className="h-4 w-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 max-h-96 overflow-y-auto p-0">
              <div className="p-4 border-b">
                <h4 className="text-sm font-medium">Notifications</h4>
              </div>
              <div className="divide-y">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    No notifications
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                    >
                      <p className="text-sm font-medium">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(notification.date).toLocaleDateString()}
                      </p>
                      {notification.earnings && (
                        <div className="mt-1 text-sm font-semibold text-primary">
                          Earned: ₹{notification.earnings}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </PopoverContent>
          </Popover>

          <Button 
            variant="ghost" 
            onClick={handleSignOut}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
};
