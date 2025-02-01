import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'upcoming' | 'past';
  registered?: boolean;
};

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Morning Yoga Session',
    date: '2024-03-25',
    location: 'Community Center',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Health Talk: Nutrition',
    date: '2024-03-28',
    location: 'Virtual Meet',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'Art & Craft Workshop',
    date: '2024-03-15',
    location: 'Activity Room',
    status: 'past',
    registered: true
  },
];

export const CommunityEvents = () => {
  const { toast } = useToast();

  const handleRegister = (eventId: string) => {
    toast({
      title: "Registration Successful",
      description: "You have been registered for the event. Check your email for details.",
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Community Events</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {mockEvents.map((event) => (
            <div key={event.id} className="mb-4 p-4 border rounded-lg bg-white">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <Badge variant={event.status === 'upcoming' ? 'secondary' : 'outline'}>
                  {event.status}
                </Badge>
              </div>
              {event.status === 'upcoming' && (
                <Button 
                  className="w-full mt-2" 
                  variant="outline"
                  onClick={() => handleRegister(event.id)}
                >
                  Register
                </Button>
              )}
              {event.status === 'past' && event.registered && (
                <Badge variant="outline" className="mt-2">
                  Attended
                </Badge>
              )}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};