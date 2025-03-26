
import React from 'react';
import { HomeHeader } from '@/components/HomeHeader';
import { HealthMetricsDashboard } from '@/components/HealthMetricsDashboard';
import { Separator } from '@/components/ui/separator';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Your Health Dashboard</h1>
        <Separator className="mb-6" />
        <HealthMetricsDashboard />
      </main>
    </div>
  );
};

export default Home;
