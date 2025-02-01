import React from 'react';
import { Droplets, Activity, Scale, Moon, Brain, Gauge } from 'lucide-react';
import { HealthMetricCard } from './HealthMetricCard';

const generateTrendData = (baseValue: number, variance: number) => {
  return Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: baseValue + Math.random() * variance * 2 - variance,
  }));
};

export const AdditionalHealthMetrics = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">Additional Health Metrics</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HealthMetricCard
          title="Blood Sugar"
          value="95 mg/dL"
          icon={<Droplets className="h-4 w-4" />}
          lastChecked="Today, 1:30 PM"
          trendData={generateTrendData(95, 8)}
        />
        <HealthMetricCard
          title="ECG"
          value="Normal"
          icon={<Activity className="h-4 w-4" />}
          lastChecked="Yesterday, 3:45 PM"
          trendData={generateTrendData(72, 5)}
        />
        <HealthMetricCard
          title="BMI"
          value="22.4"
          icon={<Scale className="h-4 w-4" />}
          lastChecked="Last week"
          trendData={generateTrendData(22.4, 0.2)}
        />
        <HealthMetricCard
          title="Sleep Level"
          value="7.5 hrs"
          icon={<Moon className="h-4 w-4" />}
          lastChecked="Today, 8:00 AM"
          trendData={generateTrendData(7.5, 1)}
        />
        <HealthMetricCard
          title="Stress Level"
          value="Low"
          icon={<Brain className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(2, 1)}
        />
        <HealthMetricCard
          title="Blood Oxygen"
          value="98%"
          icon={<Gauge className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(98, 1)}
        />
      </div>
    </div>
  );
};