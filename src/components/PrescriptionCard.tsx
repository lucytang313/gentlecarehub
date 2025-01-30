import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill } from 'lucide-react';

interface PrescriptionCardProps {
  medicine: string;
  dosage: string;
  timing: string;
  doctor: string;
}

export const PrescriptionCard = ({ medicine, dosage, timing, doctor }: PrescriptionCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Pill className="h-4 w-4" />
          {medicine}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <p className="text-sm text-gray-600">Dosage: {dosage}</p>
          <p className="text-sm text-gray-600">Timing: {timing}</p>
          <p className="text-sm text-gray-600">Prescribed by: {doctor}</p>
        </div>
      </CardContent>
    </Card>
  );
};