import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";

export const BuddyScheduler = () => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const handleSchedule = () => {
    if (!date) {
      toast({
        title: "Please select a date",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Buddy Service Scheduled",
      description: `Your care manager will be available on ${date.toLocaleDateString()}. Please select the time slot in the confirmation email.`,
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Schedule Buddy Service</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <Button 
          className="w-full" 
          onClick={handleSchedule}
          disabled={!date}
        >
          Schedule Care Manager Visit
        </Button>
      </CardContent>
    </Card>
  );
};