import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingBag, Pill, Car } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export const ConciergeService = () => {
  const { toast } = useToast();

  const handleServiceRequest = (service: string) => {
    toast({
      title: "Service Requested",
      description: `Your request for ${service} has been received. Our concierge will contact you shortly.`,
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Concierge Services</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          className="flex flex-col items-center gap-2 h-auto py-4"
          onClick={() => handleServiceRequest("Medicine Delivery")}
        >
          <Pill className="h-6 w-6" />
          <span>Medicine Delivery</span>
        </Button>
        <Button 
          variant="outline" 
          className="flex flex-col items-center gap-2 h-auto py-4"
          onClick={() => handleServiceRequest("Cab Booking")}
        >
          <Car className="h-6 w-6" />
          <span>Cab Booking</span>
        </Button>
        <Button 
          variant="outline" 
          className="flex flex-col items-center gap-2 h-auto py-4"
          onClick={() => handleServiceRequest("Grocery Shopping")}
        >
          <ShoppingBag className="h-6 w-6" />
          <span>Grocery Shopping</span>
        </Button>
        <Button 
          variant="outline" 
          className="flex flex-col items-center gap-2 h-auto py-4"
          onClick={() => handleServiceRequest("Other Assistance")}
        >
          <Phone className="h-6 w-6" />
          <span>Other Assistance</span>
        </Button>
      </CardContent>
    </Card>
  );
};