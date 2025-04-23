
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from '@/hooks/use-mobile';

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

export const ExpandableHealthMetricCard = ({ 
  title, 
  value, 
  icon, 
  lastChecked, 
  trendData,
  description,
  unit,
  normalRange
}: HealthMetricCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // On desktop, always show full card
  if (!isMobile) {
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
  }

  // Mobile view with expandable card
  return (
    <motion.div
      layout
      onClick={toggleExpand}
      className="cursor-pointer"
      initial={{ borderRadius: 16 }}
      animate={{ 
        height: isExpanded ? "auto" : "auto", 
        backgroundColor: isExpanded ? "white" : "white",
        y: isExpanded ? 0 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-primary">{icon}</div>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-secondary" />
            ) : (
              <ChevronDown className="h-4 w-4 text-secondary" />
            )}
          </div>
        </CardHeader>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
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
                {description && (
                  <div className="mt-4 text-sm text-gray-600">
                    <h4 className="font-medium">Description:</h4>
                    <p>{description}</p>
                    {unit && <p className="mt-1"><span className="font-medium">Unit:</span> {unit}</p>}
                    {normalRange && <p className="mt-1"><span className="font-medium">Normal Range:</span> {normalRange}</p>}
                  </div>
                )}
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};
