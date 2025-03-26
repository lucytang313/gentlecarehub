
import React, { useState } from 'react';
import { PrimaryVitals } from './PrimaryVitals';
import { AdditionalHealthMetrics } from './AdditionalHealthMetrics';
import { HealthStatusCard } from './HealthStatusCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Activity, Smartphone } from 'lucide-react';
import { format } from 'date-fns';

// Data source types
type DataSource = 'all' | 'doctor' | 'googlefit';
// Time period types
type TimePeriod = 'current' | '7days' | '1hour' | 'custom';

export const HealthMetricsDashboard = () => {
  const [dataSource, setDataSource] = useState<DataSource>('all');
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('current');
  const [isGoogleFitConnected, setIsGoogleFitConnected] = useState(false);

  // This would come from an actual API in a real app
  const lastSyncTime = new Date();

  const handleConnectGoogleFit = () => {
    // In a real app, this would trigger Google OAuth and API connection
    setIsGoogleFitConnected(true);
  };

  return (
    <div className="space-y-6">
      {/* Status section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <HealthStatusCard />
        </div>
        <Card className="md:w-1/3">
          <CardContent className="p-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-medium">Data Sources</h3>
              <div className="flex gap-2 items-center">
                {isGoogleFitConnected ? (
                  <>
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <Smartphone className="h-4 w-4" />
                      <span>Google Fit Connected</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Last synced: {format(lastSyncTime, 'MMM d, h:mm a')}
                    </span>
                  </>
                ) : (
                  <button 
                    className="flex items-center space-x-2 text-sm text-primary bg-primary/10 px-3 py-1 rounded-md hover:bg-primary/20"
                    onClick={handleConnectGoogleFit}
                  >
                    <Smartphone className="h-4 w-4" />
                    <span>Connect Google Fit</span>
                  </button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter section */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground">Data Source</h3>
              <div className="flex gap-2">
                <button 
                  className={`px-3 py-1 rounded-md text-sm ${dataSource === 'all' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}
                  onClick={() => setDataSource('all')}
                >
                  All Sources
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${dataSource === 'doctor' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}
                  onClick={() => setDataSource('doctor')}
                >
                  <Activity className="h-3 w-3" />
                  Doctor Entered
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${dataSource === 'googlefit' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'} ${!isGoogleFitConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => isGoogleFitConnected && setDataSource('googlefit')}
                  disabled={!isGoogleFitConnected}
                >
                  <Smartphone className="h-3 w-3" />
                  Google Fit
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground">Time Period</h3>
              <div className="flex gap-2">
                <button 
                  className={`px-3 py-1 rounded-md text-sm ${timePeriod === 'current' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}
                  onClick={() => setTimePeriod('current')}
                >
                  Current
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm ${timePeriod === '7days' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}
                  onClick={() => setTimePeriod('7days')}
                >
                  7 Day Avg
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm ${timePeriod === '1hour' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}
                  onClick={() => setTimePeriod('1hour')}
                >
                  Last Hour
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${timePeriod === 'custom' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}
                  onClick={() => setTimePeriod('custom')}
                >
                  <Calendar className="h-3 w-3" />
                  Custom
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main metrics content */}
      <Tabs defaultValue="primary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="primary">Primary Vitals</TabsTrigger>
          <TabsTrigger value="additional">Additional Metrics</TabsTrigger>
        </TabsList>
        <TabsContent value="primary" className="mt-6">
          <PrimaryVitals />
        </TabsContent>
        <TabsContent value="additional" className="mt-6">
          <AdditionalHealthMetrics />
        </TabsContent>
      </Tabs>

      {/* Data interpretation */}
      {dataSource === 'googlefit' && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-medium text-blue-800">Google Fit Insights</h3>
            <p className="text-sm text-blue-700 mt-1">
              Your heart rate has been more stable in the last 7 days compared to the previous week. 
              Your sleep patterns show improvement with an average of 7.5 hours per night.
            </p>
            {timePeriod === '7days' && (
              <p className="text-sm text-blue-700 mt-2">
                7-day trends show your blood pressure is gradually improving. Keep up your current routine!
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
