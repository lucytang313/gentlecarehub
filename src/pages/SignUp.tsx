
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from '@/components/Logo';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [dataSharing, setDataSharing] = useState(false);
  const [emergencyNotifications, setEmergencyNotifications] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    // Get referral code from URL if present
    const params = new URLSearchParams(location.search);
    const urlReferralCode = params.get('referal_code'); // Note: using 'referal_code' to match the URL format
    if (urlReferralCode) {
      setReferralCode(urlReferralCode);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms || !dataSharing || !emergencyNotifications) {
      toast({
        title: "Consent Required",
        description: "Please accept all the required consents to continue",
        variant: "destructive",
      });
      return;
    }
    
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <Card className="w-[400px]">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <Logo />
          <CardTitle className="text-2xl mt-4">Create an account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Referral Code (Optional)"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="dataSharing" 
                  checked={dataSharing}
                  onCheckedChange={(checked) => setDataSharing(checked as boolean)}
                />
                <Label htmlFor="dataSharing">I consent to sharing my data with healthcare providers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="emergencyNotifications" 
                  checked={emergencyNotifications}
                  onCheckedChange={(checked) => setEmergencyNotifications(checked as boolean)}
                />
                <Label htmlFor="emergencyNotifications">I consent to receiving emergency notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                />
                <Label htmlFor="terms">
                  I agree to the Terms and Conditions
                </Label>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <div className="mt-4 text-center">
            <a href="/signin" className="text-sm text-primary hover:underline">
              Already have an account? Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
