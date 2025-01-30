import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

interface HealthMetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  lastChecked: string;
  trendData: Array<{ date: string; value: number }>;
}

export const HealthMetricCard = ({ title, value, icon, lastChecked, trendData }: HealthMetricCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">{value}</div>
        <div className="text-xs text-gray-500 mb-2">Last checked: {lastChecked}</div>
        <div className="h-20">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#6B0F8B" 
                strokeWidth={2} 
                dot={false}
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};