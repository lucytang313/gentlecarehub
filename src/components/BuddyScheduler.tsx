import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const BuddyScheduler = () => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = React.useState<string>("");

  const handleSchedule = () => {
    if (!date || !timeSlot) {
      toast({
        title: "Please select both date and time slot",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Buddy Service Scheduled",
      description: `Your care manager will be available on ${date.toLocaleDateString()} at ${timeSlot}. Please check your email for confirmation.`,
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
        <div className="space-y-2">
          <Label>Select Time Slot (4 hours)</Label>
          <RadioGroup onValueChange={setTimeSlot} value={timeSlot}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="9:00 AM - 1:00 PM" id="morning" />
              <Label htmlFor="morning">Morning (9:00 AM - 1:00 PM)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2:00 PM - 6:00 PM" id="afternoon" />
              <Label htmlFor="afternoon">Afternoon (2:00 PM - 6:00 PM)</Label>
            </div>
          </RadioGroup>
        </div>
        <Button 
          className="w-full" 
          onClick={handleSchedule}
          disabled={!date || !timeSlot}
        >
          Schedule Care Manager Visit
        </Button>
      </CardContent>
    </Card>
  );
};