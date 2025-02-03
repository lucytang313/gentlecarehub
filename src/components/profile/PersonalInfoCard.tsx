import React from 'react';
import { User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface PersonalInfoProps {
  personalInfo: {
    fullName: string;
    dob: string;
    gender: string;
    bloodGroup: string;
    height: string;
    weight: string;
    wakeUpTime?: string;
    currentLocation: {
      status: "home" | "travelling";
      expectedReturn?: string;
    };
  };
}

export const PersonalInfoCard = ({ personalInfo }: PersonalInfoProps) => {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/lovable-uploads/06ca9dad-031b-4abb-89e3-b5790fbd261b.png" alt={personalInfo.fullName} />
            <AvatarFallback>
              <User className="h-16 w-16" />
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-2xl">{personalInfo.fullName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-medium">{new Date(personalInfo.dob).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium">{personalInfo.gender}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Blood Group</p>
            <p className="font-medium">{personalInfo.bloodGroup}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Height</p>
            <p className="font-medium">{personalInfo.height} cm</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Weight</p>
            <p className="font-medium">{personalInfo.weight} kg</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Wake Up Time</p>
            <p className="font-medium">{personalInfo.wakeUpTime || "6:00 AM"}</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Current Status</p>
          <p className="font-medium">
            {personalInfo.currentLocation.status === "home" 
              ? "At Home" 
              : `Travelling (Expected Return: ${personalInfo.currentLocation.expectedReturn})`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};