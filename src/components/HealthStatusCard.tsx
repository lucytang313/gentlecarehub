
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HealthStatusCardProps {
  status_message?: string;
  next_checkup_date?: string;
}

export const HealthStatusCard: React.FC<HealthStatusCardProps> = ({
  status_message = "Your health metrics are within normal range",
  next_checkup_date = "June 15, 2024"
}) => {
  return (
    <Card className="bg-gradient-to-r from-primary via-primary/90 to-secondary text-white border-none shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Health Status Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-green-200 font-medium">{status_message}</p>
        <p className="mt-2 text-white/80">Next check-up scheduled for: {next_checkup_date}</p>
      </CardContent>
    </Card>
  );
};
