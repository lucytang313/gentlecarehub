import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIcon, Calendar as CalendarIcon, User } from 'lucide-react';

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
      title: "Visit Scheduled",
      description: `Your appointment has been scheduled for ${date.toLocaleDateString()} at ${timeSlot}.`,
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Schedule Visits</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="care-manager" className="space-y-4">
          <TabsList className="grid grid-cols-3 gap-4">
            <TabsTrigger value="care-manager">Care Manager</TabsTrigger>
            <TabsTrigger value="doctor">Doctor</TabsTrigger>
            <TabsTrigger value="buddy">Buddy</TabsTrigger>
          </TabsList>

          <TabsContent value="care-manager" className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Next Scheduled Visit</h3>
              <p className="text-sm text-gray-600">Tomorrow, 9:00 AM - 1:00 PM</p>
              <Button variant="outline" className="mt-2" onClick={() => setDate(undefined)}>
                Reschedule
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="doctor" className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Next Teleconsultation</h3>
              <p className="text-sm text-gray-600">Today, 4:00 PM</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" onClick={() => setDate(undefined)}>
                  Reschedule
                </Button>
                <Button className="flex items-center gap-2">
                  <VideoIcon className="h-4 w-4" />
                  Join Session
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="buddy" className="space-y-4">
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
              Schedule Buddy Visit
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};