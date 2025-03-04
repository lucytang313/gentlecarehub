
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <HomeHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex items-center gap-2 mb-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 shadow-sm border border-primary/10 cursor-help">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Apollo_Hospitals_Logo.svg/1200px-Apollo_Hospitals_Logo.svg.png" 
                    alt="Apollo Hospitals" 
                    className="h-5 mr-2 object-contain" 
                  />
                  <span className="text-sm font-medium text-primary">Apollo Enterprise Plan</span>
                  <Info className="h-4 w-4 text-primary/60 ml-1.5" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" align="start" className="bg-white p-4 shadow-lg border border-primary/10 max-w-sm">
                <div>
                  <h4 className="font-semibold text-primary text-base">Enterprise Benefits</h4>
                  <p className="text-gray-600 mt-1 mb-2">You're enrolled through Apollo Hospitals corporate wellness program.</p>
                  <ul className="text-sm space-y-1 text-gray-600 list-disc pl-4">
                    <li>Priority access to specialists</li>
                    <li>Corporate discount on services</li>
                    <li>Quarterly wellness workshops</li>
                    <li>24/7 dedicated concierge support</li>
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <HealthStatusCard />
        <PrimaryVitals />
        <AdditionalHealthMetrics />

        <div className="grid gap-6 md:grid-cols-2">
          <TicketHistory />
          <ConciergeService />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <BuddyScheduler />
          <CommunityEvents />
        </div>

        <PrescriptionManagement />

        <div className="grid gap-6 md:grid-cols-2">
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
