
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HomeHeader } from '@/components/HomeHeader';
import { HealthStatusCard } from '@/components/HealthStatusCard';
import { PrimaryVitals } from '@/components/PrimaryVitals';
import { AdditionalHealthMetrics } from '@/components/AdditionalHealthMetrics';
import { PrescriptionManagement } from '@/components/PrescriptionManagement';
import { TicketHistory } from "@/components/TicketHistory";
import { ConciergeService } from "@/components/ConciergeService";
import { BuddyScheduler } from "@/components/BuddyScheduler";
import { CommunityEvents } from "@/components/CommunityEvents";
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <HomeHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <HealthStatusCard />
        <PrimaryVitals />
        <AdditionalHealthMetrics />

        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
          <TicketHistory />
          <ConciergeService />
        </div>

        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
          <BuddyScheduler />
          <CommunityEvents />
        </div>

        <PrescriptionManagement />

        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
          <Card className="bg-gradient-to-br from-white to-gray-50 border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Payment & Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Current Plan: Premium Care (₹14,999/month)</p>
              <Button onClick={() => navigate('/payments')} className="bg-primary hover:bg-primary/90">
                Manage Subscription
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-gray-50 border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Support</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary/90">Contact Care Manager</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
