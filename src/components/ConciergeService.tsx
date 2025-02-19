
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingBag, Pill, Car } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useTickets } from '@/hooks/useTickets';

type ServiceState = {
  [key: string]: boolean;
};

export const ConciergeService = () => {
  const { toast } = useToast();
  const { addTicket } = useTickets();
  const [selectedServices, setSelectedServices] = useState<ServiceState>({});

  const handleServiceRequest = (service: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: true
    }));
  };

  const handleBookNow = (service: string) => {
    // Create a new ticket
    const newTicket = {
      id: Math.random().toString(36).substr(2, 9),
      title: `${service} Request`,
      status: 'open',
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

    // Reset the service state
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
        >
          Book Now
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
