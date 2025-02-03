import React from 'react';
import { Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactProps {
  contact: {
    phone: string;
    altPhone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export const ContactCard = ({ contact }: ContactProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Phone className="h-5 w-5" />
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{contact.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Alternative Phone</p>
            <p className="font-medium">{contact.altPhone}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{contact.email}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">
              {contact.address}, {contact.city}, {contact.state} - {contact.pincode}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};