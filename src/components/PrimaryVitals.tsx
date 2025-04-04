
import React from 'react';
import { Heart, Activity, Wind, Thermometer } from 'lucide-react';
import { HealthMetricCard } from './HealthMetricCard';

const generateTrendData = (baseValue: number, variance: number) => {
  return Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: baseValue + Math.random() * variance * 2 - variance,
  }));
};

interface PrimaryVitalsProps {
  HeartRate?: number;
  BloodPressure?: string;
  RespiratoryRate?: number;
  Temperature?: number;
  checked_at?: string;
}

export const PrimaryVitals: React.FC<PrimaryVitalsProps> = ({
  HeartRate = 72,
  BloodPressure = "120/80",
  RespiratoryRate = 16,
  Temperature = 36.6,
  checked_at = "Today, 2:30 PM"
}) => {
  // Create an array of vital card data
  const vitalCards = [
    {
      title: "Heart Rate",
      value: `${HeartRate} BPM`,
      icon: <Heart className="h-4 w-4" />,
      lastChecked: checked_at,
      trendData: generateTrendData(HeartRate, 5),
      description: "Heart rate is the number of times your heart beats per minute. It varies based on activity level, emotions, and overall health.",
      unit: "Beats Per Minute (BPM)",
      normalRange: "60-100 BPM"
    },
    {
      title: "Blood Pressure",
      value: `${BloodPressure} mmHg`,
      icon: <Activity className="h-4 w-4" />,
      lastChecked: checked_at,
      trendData: generateTrendData(parseInt(BloodPressure.split('/')[0], 10), 10),
      description: "Blood pressure is the force of blood pushing against artery walls. It's shown as two numbers: systolic (top) and diastolic (bottom) pressure.",
      unit: "Millimeters of Mercury (mmHg)",
      normalRange: "Systolic: 90-120 mmHg, Diastolic: 60-80 mmHg"
    },
    {
      title: "Respiratory Rate",
      value: `${RespiratoryRate} BPM`,
      icon: <Wind className="h-4 w-4" />,
      lastChecked: checked_at,
      trendData: generateTrendData(RespiratoryRate, 2),
      description: "Respiratory rate is the number of breaths taken per minute. It's measured by counting chest rises and falls.",
      unit: "Breaths Per Minute (BPM)",
      normalRange: "12-20 BPM"
    },
    {
      title: "Temperature",
      value: `${Temperature}°C`,
      icon: <Thermometer className="h-4 w-4" />,
      lastChecked: checked_at,
      trendData: generateTrendData(Temperature, 0.3),
      description: "Body temperature is a measure of the body's ability to generate and get rid of heat. Normal temperature varies throughout the day.",
      unit: "Celsius (°C)",
      normalRange: "36.1-37.2°C"
    }
  ];

  // Function to determine optimal grid columns based on number of cards
  const getGridClass = (count: number) => {
    switch (count) {
      case 1: 
        return "grid-cols-1";
      case 2: 
        return "md:grid-cols-2";
      case 3: 
        return "md:grid-cols-3";
      case 4: 
        return "md:grid-cols-2 lg:grid-cols-4";
      case 5:
      case 6:
        return "md:grid-cols-2 lg:grid-cols-3";
      default:
        return "md:grid-cols-2 lg:grid-cols-4";
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">Primary Vitals</h2>
      <div className={`grid gap-6 ${getGridClass(vitalCards.length)}`}>
        {vitalCards.map((card, index) => (
          <HealthMetricCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            lastChecked={card.lastChecked}
            trendData={card.trendData}
            description={card.description}
            unit={card.unit}
            normalRange={card.normalRange}
          />
        ))}
      </div>
    </div>
  );
};
