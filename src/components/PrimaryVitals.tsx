import React from 'react';
import { Heart, Activity, Wind, Thermometer } from 'lucide-react';
import { HealthMetricCard } from './HealthMetricCard';

const generateTrendData = (baseValue: number, variance: number) => {
  return Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: baseValue + Math.random() * variance * 2 - variance,
  }));
};

export const PrimaryVitals = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">Primary Vitals</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <HealthMetricCard
          title="Heart Rate"
          value="72 BPM"
          icon={<Heart className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(72, 5)}
        />
        <HealthMetricCard
          title="Blood Pressure"
          value="120/80 mmHg"
          icon={<Activity className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(120, 10)}
        />
        <HealthMetricCard
          title="Respiratory Rate"
          value="16 BPM"
          icon={<Wind className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(16, 2)}
        />
        <HealthMetricCard
          title="Temperature"
          value="36.6°C"
          icon={<Thermometer className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(36.6, 0.3)}
        />
      </div>
    </div>
  );
};