
import React from 'react';
import { Droplets, Activity, Scale, Moon, Brain, Gauge } from 'lucide-react';
import { ExpandableHealthMetricCard } from './ExpandableHealthMetricCard';
import { useIsMobile } from '@/hooks/use-mobile';

const generateTrendData = (baseValue: number, variance: number) => {
  return Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: baseValue + Math.random() * variance * 2 - variance,
  }));
};

export const AdditionalHealthMetrics = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">Additional Health Metrics</h2>
      <div className={`grid gap-6 ${isMobile ? 'grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        <ExpandableHealthMetricCard
          title="Blood Sugar"
          value="95 mg/dL"
          icon={<Droplets className="h-4 w-4" />}
          lastChecked="Today, 1:30 PM"
          trendData={generateTrendData(95, 8)}
          description="Blood sugar (glucose) level indicates the amount of sugar in your bloodstream. It's important for monitoring diabetes and overall health."
          unit="Milligrams per Deciliter (mg/dL)"
          normalRange="70-99 mg/dL (fasting)"
        />
        <ExpandableHealthMetricCard
          title="ECG"
          value="Normal"
          icon={<Activity className="h-4 w-4" />}
          lastChecked="Yesterday, 3:45 PM"
          trendData={generateTrendData(72, 5)}
          description="Electrocardiogram (ECG) measures the electrical activity of your heart. It helps detect irregular heartbeats and other heart conditions."
          normalRange="Normal sinus rhythm"
        />
        <ExpandableHealthMetricCard
          title="BMI"
          value="22.4"
          icon={<Scale className="h-4 w-4" />}
          lastChecked="Last week"
          trendData={generateTrendData(22.4, 0.2)}
          description="Body Mass Index (BMI) is a measure of body fat based on height and weight. It helps assess if someone is at a healthy weight."
          unit="kg/m²"
          normalRange="18.5-24.9"
        />
        <ExpandableHealthMetricCard
          title="Sleep Level"
          value="7.5 hrs"
          icon={<Moon className="h-4 w-4" />}
          lastChecked="Today, 8:00 AM"
          trendData={generateTrendData(7.5, 1)}
          description="Sleep duration and quality are important for overall health. Good sleep helps with recovery, memory, and immune function."
          unit="Hours"
          normalRange="7-9 hours per night"
        />
        <ExpandableHealthMetricCard
          title="Stress Level"
          value="Low"
          icon={<Brain className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(2, 1)}
          description="Stress level indicates your current mental and emotional state. It's measured through various physiological indicators."
          normalRange="Low to Moderate"
        />
        <ExpandableHealthMetricCard
          title="Blood Oxygen"
          value="98%"
          icon={<Gauge className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(98, 1)}
          description="Blood oxygen saturation (SpO2) measures how much oxygen your red blood cells are carrying. It's crucial for vital organ function."
          unit="Percentage (%)"
          normalRange="95-100%"
        />
      </div>
    </div>
  );
};
