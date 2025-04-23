
import React, { useState } from 'react';
import { Heart, Activity, Wind, Thermometer } from 'lucide-react';
import { ExpandableHealthMetricCard } from './ExpandableHealthMetricCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const generateTrendData = (baseValue: number, variance: number) => {
  return Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: baseValue + Math.random() * variance * 2 - variance,
  }));
};

export const PrimaryVitals = () => {
  const isMobile = useIsMobile();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    if (isMobile) {
      setExpandedCard(expandedCard === cardId ? null : cardId);
    }
  };

  const isCardExpanded = (cardId: string) => expandedCard === cardId;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">Primary Vitals</h2>
      <motion.div 
        layout
        className={`grid gap-6 ${isMobile ? 'grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4'}`}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ExpandableHealthMetricCard
          title="Heart Rate"
          value="72 BPM"
          icon={<Heart className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(72, 5)}
          description="Heart rate is the number of times your heart beats per minute. It varies based on activity level, emotions, and overall health."
          unit="Beats Per Minute (BPM)"
          normalRange="60-100 BPM"
          isExpanded={isCardExpanded('heart-rate')}
          onToggleExpand={() => toggleCard('heart-rate')}
        />
        <ExpandableHealthMetricCard
          title="Blood Pressure"
          value="120/80 mmHg"
          icon={<Activity className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(120, 10)}
          description="Blood pressure is the force of blood pushing against artery walls. It's shown as two numbers: systolic (top) and diastolic (bottom) pressure."
          unit="Millimeters of Mercury (mmHg)"
          normalRange="Systolic: 90-120 mmHg, Diastolic: 60-80 mmHg"
          isExpanded={isCardExpanded('blood-pressure')}
          onToggleExpand={() => toggleCard('blood-pressure')}
        />
        <ExpandableHealthMetricCard
          title="Respiratory Rate"
          value="16 BPM"
          icon={<Wind className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(16, 2)}
          description="Respiratory rate is the number of breaths taken per minute. It's measured by counting chest rises and falls."
          unit="Breaths Per Minute (BPM)"
          normalRange="12-20 BPM"
          isExpanded={isCardExpanded('respiratory-rate')}
          onToggleExpand={() => toggleCard('respiratory-rate')}
        />
        <ExpandableHealthMetricCard
          title="Temperature"
          value="36.6°C"
          icon={<Thermometer className="h-4 w-4" />}
          lastChecked="Today, 2:30 PM"
          trendData={generateTrendData(36.6, 0.3)}
          description="Body temperature is a measure of the body's ability to generate and get rid of heat. Normal temperature varies throughout the day."
          unit="Celsius (°C)"
          normalRange="36.1-37.2°C"
          isExpanded={isCardExpanded('temperature')}
          onToggleExpand={() => toggleCard('temperature')}
        />
      </motion.div>
    </div>
  );
};
