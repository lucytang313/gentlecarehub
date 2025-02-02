import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Logo } from './Logo';
import { useToast } from "@/components/ui/use-toast";

export const HomeHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmergency = () => {
    toast({
      title: "Emergency assistance requested",
      description: "Our team has been notified and will contact you immediately.",
      duration: 5000,
    });
  };

  return (
    <header className="bg-white shadow-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5 text-primary" />
          </Button>
          <Logo />
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
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/profile')}>
            <img 
              src="/lovable-uploads/6f8636d0-de39-49e5-a707-a7cc04c4fb22.png" 
              alt="Amit Bachhan" 
              className="h-10 w-10 rounded-full object-cover border-2 border-primary"
            />
            <span className="font-medium text-primary">Amit Bachhan</span>
          </div>
        </div>
      </div>
    </header>
  );
};