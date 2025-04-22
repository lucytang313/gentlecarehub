
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingBag, Pill, Car, Loader2, Lock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useTickets } from '@/hooks/useTickets';

type ServiceState = {
  [key: string]: boolean;
};

type LoadingState = {
  [key: string]: boolean;
};

export const ConciergeService = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addTicket } = useTickets();
  const [selectedServices, setSelectedServices] = useState<ServiceState>({});
  const [loadingServices, setLoadingServices] = useState<LoadingState>({});
  
  // Temporary mock - replace with actual subscription check
  const isPremiumUser = false;

  const handleServiceRequest = (service: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: true
    }));
  };

  const handleBookNow = async (service: string) => {
    // Set loading state
    setLoadingServices(prev => ({
      ...prev,
      [service]: true
    }));

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Create a new ticket with explicitly typed status
    const newTicket = {
      id: Math.random().toString(36).substr(2, 9),
      title: `${service} Request`,
      status: 'open' as const,
      date: new Date().toISOString().split('T')[0],
      category: 'Concierge'
    };

    // Add the ticket to the store
    addTicket(newTicket);

    // Show toast notification
    toast({
      title: "Ticket Created",
      description: `Your ${service} request has been created. Ticket ID: ${newTicket.id}`,
    });

    // Reset the loading and service states
    setLoadingServices(prev => ({
      ...prev,
      [service]: false
    }));
    setSelectedServices(prev => ({
      ...prev,
      [service]: false
    }));
  };

  const renderServiceButton = (service: string, icon: React.ReactNode) => {
    if (selectedServices[service]) {
      return (
        <Button 
          variant="default"
          className="flex flex-col items-center gap-2 h-auto py-4 bg-primary"
          onClick={() => handleBookNow(service)}
          disabled={loadingServices[service]}
        >
          {loadingServices[service] ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            'Book Now'
          )}
        </Button>
      );
    }

    return (
      <Button 
        variant="outline" 
        className="flex flex-col items-center gap-2 h-auto py-4"
        onClick={() => handleServiceRequest(service)}
      >
        {icon}
        <span>{service}</span>
      </Button>
    );
  };

  if (!isPremiumUser) {
    return (
      <Card className="shadow-md bg-gradient-to-br from-gray-50 to-gray-100">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">Concierge Services</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center text-center space-y-6 py-8">
          <div className="flex flex-col items-center space-y-4">
            <Lock className="h-12 w-12 text-primary/60" />
            <h3 className="text-lg font-semibold">Premium Feature</h3>
            <p className="text-gray-600 max-w-sm">
              Upgrade to Premium to unlock Concierge Services including medicine delivery, 
              cab booking, grocery shopping, and personal assistance.
            </p>
          </div>
          <Button 
            onClick={() => navigate('/payments')} 
            className="bg-primary hover:bg-primary/90 w-full max-w-sm"
          >
            Upgrade to Premium
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Concierge Services</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {renderServiceButton("Medicine Delivery", <Pill className="h-6 w-6" />)}
        {renderServiceButton("Cab Booking", <Car className="h-6 w-6" />)}
        {renderServiceButton("Grocery Shopping", <ShoppingBag className="h-6 w-6" />)}
        {renderServiceButton("Other Assistance", <Phone className="h-6 w-6" />)}
      </CardContent>
    </Card>
  );
};
