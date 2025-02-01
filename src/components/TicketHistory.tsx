import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

type Ticket = {
  id: string;
  title: string;
  status: 'open' | 'closed';
  date: string;
  category: string;
};

const mockTickets: Ticket[] = [
  { id: '1', title: 'Medicine Delivery Request', status: 'closed', date: '2024-03-15', category: 'Concierge' },
  { id: '2', title: 'Cab Booking Assistance', status: 'open', date: '2024-03-18', category: 'Transport' },
  { id: '3', title: 'Weekly Health Check-up', status: 'open', date: '2024-03-20', category: 'Healthcare' },
];

export const TicketHistory = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Support Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          {mockTickets.map((ticket) => (
            <div key={ticket.id} className="mb-4 p-3 border rounded-lg bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-sm">{ticket.title}</h4>
                  <p className="text-xs text-muted-foreground">{ticket.date}</p>
                </div>
                <Badge variant={ticket.status === 'open' ? 'secondary' : 'outline'}>
                  {ticket.status}
                </Badge>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};