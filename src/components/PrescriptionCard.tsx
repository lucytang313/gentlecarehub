import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PrescriptionCardProps {
  medicine: string;
  dosage: string;
  timing: string;
  doctor: string;
}

export const PrescriptionCard = ({ medicine, dosage, timing, doctor }: PrescriptionCardProps) => {
  const handleDownload = () => {
    // In a real app, this would trigger the actual prescription download
    console.log(`Downloading prescription for ${medicine}`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Pill className="h-4 w-4" />
          {medicine}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mb-4">
          <p className="text-sm text-gray-600">Dosage: {dosage}</p>
          <p className="text-sm text-gray-600">Timing: {timing}</p>
          <p className="text-sm text-gray-600">Prescribed by: {doctor}</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center gap-2"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" /> Download Prescription
        </Button>
      </CardContent>
    </Card>
  );
};