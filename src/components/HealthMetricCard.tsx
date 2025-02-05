import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Info } from 'lucide-react';
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HealthMetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  lastChecked: string;
  trendData: Array<{ date: string; value: number }>;
  description?: string;
  unit?: string;
  normalRange?: string;
}

export const HealthMetricCard = ({ 
  title, 
  value, 
  icon, 
  lastChecked, 
  trendData,
  description,
  unit,
  normalRange
}: HealthMetricCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <TooltipProvider>
            <UITooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-2">
                  <p>{description}</p>
                  {unit && <p>Unit: {unit}</p>}
                  {normalRange && <p>Normal Range: {normalRange}</p>}
                </div>
              </TooltipContent>
            </UITooltip>
          </TooltipProvider>
        </div>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">{value}</div>
        <div className="text-xs text-gray-500 mb-2">Last checked: {lastChecked}</div>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                fontSize={10}
                tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { weekday: 'short' })}
              />
              <YAxis fontSize={10} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#6B0F8B" 
                strokeWidth={2} 
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};