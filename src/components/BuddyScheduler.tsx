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
  const [showCareManagerScheduler, setShowCareManagerScheduler] = React.useState(false);
  const [showDoctorScheduler, setShowDoctorScheduler] = React.useState(false);

  const handleSchedule = (type: 'buddy' | 'care-manager' | 'doctor') => {
    if (!date || !timeSlot) {
      toast({
        title: "Please select both date and time slot",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Visit Scheduled",
      description: `Your ${type === 'buddy' ? 'buddy visit' : type === 'care-manager' ? 'care manager appointment' : 'doctor appointment'} has been scheduled for ${date.toLocaleDateString()} at ${timeSlot}.`,
    });

    // Reset states after scheduling
    setDate(undefined);
    setTimeSlot("");
    setShowCareManagerScheduler(false);
    setShowDoctorScheduler(false);
  };

  const renderScheduler = (type: 'care-manager' | 'doctor' | 'buddy') => {
    const slots = type === 'care-manager' 
      ? [
          "9:00 AM - 9:30 AM",
          "10:00 AM - 10:30 AM",
          "11:00 AM - 11:30 AM",
          "2:00 PM - 2:30 PM",
          "3:00 PM - 3:30 PM",
          "4:00 PM - 4:30 PM"
        ]
      : type === 'doctor'
      ? [
          "9:00 AM - 9:15 AM",
          "9:30 AM - 9:45 AM",
          "10:00 AM - 10:15 AM",
          "10:30 AM - 10:45 AM",
          "2:00 PM - 2:15 PM",
          "2:30 PM - 2:45 PM"
        ]
      : [
          "9:00 AM - 1:00 PM",
          "2:00 PM - 6:00 PM"
        ];

    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="space-y-2">
          <Label>Select Time Slot {type === 'care-manager' ? '(30 minutes)' : type === 'doctor' ? '(15 minutes)' : '(4 hours)'}</Label>
          <RadioGroup onValueChange={setTimeSlot} value={timeSlot}>
            {slots.map((slot) => (
              <div key={slot} className="flex items-center space-x-2">
                <RadioGroupItem value={slot} id={slot} />
                <Label htmlFor={slot}>{slot}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <Button 
          className="w-full" 
          onClick={() => handleSchedule(type)}
          disabled={!date || !timeSlot}
        >
          Schedule {type === 'buddy' ? 'Buddy Visit' : type === 'care-manager' ? 'Care Manager Appointment' : 'Doctor Appointment'}
        </Button>
      </div>
    );
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
            {!showCareManagerScheduler ? (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Next Scheduled Visit</h3>
                <p className="text-sm text-gray-600">Tomorrow, 9:00 AM - 9:30 AM</p>
                <Button variant="outline" className="mt-2" onClick={() => setShowCareManagerScheduler(true)}>
                  Reschedule
                </Button>
              </div>
            ) : renderScheduler('care-manager')}
          </TabsContent>

          <TabsContent value="doctor" className="space-y-4">
            {!showDoctorScheduler ? (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Next Teleconsultation</h3>
                <p className="text-sm text-gray-600">Today, 4:00 PM - 4:15 PM</p>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" onClick={() => setShowDoctorScheduler(true)}>
                    Reschedule
                  </Button>
                  <Button className="flex items-center gap-2">
                    <VideoIcon className="h-4 w-4" />
                    Join Session
                  </Button>
                </div>
              </div>
            ) : renderScheduler('doctor')}
          </TabsContent>

          <TabsContent value="buddy" className="space-y-4">
            {renderScheduler('buddy')}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};