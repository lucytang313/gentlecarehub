import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HealthStatusCard = () => {
  return (
    <Card className="bg-gradient-to-r from-primary via-primary/90 to-secondary text-white border-none shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Health Status Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-green-200 font-medium">Your health metrics are within normal range</p>
        <p className="mt-2 text-white/80">Next check-up scheduled for: June 15, 2024</p>
      </CardContent>
    </Card>
  );
};