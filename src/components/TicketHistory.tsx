
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTickets } from '@/hooks/useTickets';
import { Button } from "@/components/ui/button";

type Ticket = {
  id: string;
  title: string;
  status: 'open' | 'closed';
  date: string;
  category: string;
};

export const TicketHistory = () => {
  const { tickets } = useTickets();
  const [showActive, setShowActive] = useState(true);

  // Filter tickets based on status
  const filteredTickets = tickets
    .filter(ticket => showActive ? ticket.status === 'open' : ticket.status === 'closed')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-primary">Support Tickets</CardTitle>
        <div className="flex gap-2">
          <Button
            variant={showActive ? "default" : "outline"}
            onClick={() => setShowActive(true)}
            size="sm"
          >
            Active
          </Button>
          <Button
            variant={!showActive ? "default" : "outline"}
            onClick={() => setShowActive(false)}
            size="sm"
          >
            Inactive
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          {filteredTickets.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-8">
              No {showActive ? 'active' : 'inactive'} tickets found
            </div>
          ) : (
            filteredTickets.map((ticket) => (
              <div key={ticket.id} className="mb-4 p-3 border rounded-lg bg-white">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm">{ticket.title}</h4>
                      <span className="text-xs text-muted-foreground">#{ticket.id}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">
                        Opened: {new Date(ticket.date).toLocaleString()} 
                        {ticket.status === 'closed' && ` - Closed: ${new Date(new Date(ticket.date).getTime() + 24*60*60*1000).toLocaleString()}`}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">Category: {ticket.category}</p>
                  </div>
                  <Badge variant={ticket.status === 'open' ? 'secondary' : 'outline'}>
                    {ticket.status}
                  </Badge>
                </div>
              </div>
            ))
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
