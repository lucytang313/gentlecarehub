
import React, { useState } from 'react';
import { HomeHeader } from '@/components/HomeHeader';
import { PrimaryVitals } from '@/components/PrimaryVitals';
import { AdditionalHealthMetrics } from '@/components/AdditionalHealthMetrics';
import { HealthStatusCard } from '@/components/HealthStatusCard';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Activity, Smartphone, Watch, Info } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Data source types
type DataSource = 'all' | 'doctor' | 'googlefit';
// Time period types
type TimePeriod = 'current' | '7days';

const Home = () => {
  const [dataSource, setDataSource] = useState<DataSource>('all');
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('current');
  const [isGoogleFitConnected, setIsGoogleFitConnected] = useState(false);
  const [isGoogleFitDialogOpen, setIsGoogleFitDialogOpen] = useState(false);
  const [dataTab, setDataTab] = useState<'primary' | 'additional'>('primary');

  // This would come from an actual API in a real app
  const lastSyncTime = new Date();

  const handleConnectGoogleFit = () => {
    // In a real app, this would trigger Google OAuth and API connection
    setIsGoogleFitConnected(true);
    setIsGoogleFitDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Your Health Dashboard</h1>
        <Separator className="mb-6" />
        
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
                      <Button 
                        variant="outline" 
                        className="flex items-center space-x-2 text-sm"
                        onClick={() => setIsGoogleFitDialogOpen(true)}
                      >
                        <Smartphone className="h-4 w-4" />
                        <span>Connect Google Fit</span>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Fit Connection Dialog */}
          <Dialog open={isGoogleFitDialogOpen} onOpenChange={setIsGoogleFitDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Connect Google Fit</DialogTitle>
                <DialogDescription>
                  Access your health data from Google Fit to get more insights.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                {isGoogleFitConnected ? (
                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md text-green-600">
                    <Activity className="h-5 w-5" />
                    <span className="font-medium">Your Google Fit account is connected</span>
                  </div>
                ) : (
                  <Button 
                    onClick={handleConnectGoogleFit} 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-5 w-5">
                      <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                      <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                      <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                      <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
                    </svg>
                    Connect with Google
                  </Button>
                )}

                <div className="space-y-3 mt-4">
                  <h4 className="font-medium">How to connect your wearable device:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Install Google Fit app on your phone</li>
                    <li>Connect your wearable device to Google Fit</li>
                    <li>Allow health data access permissions</li>
                    <li>Sync your device with Google Fit</li>
                  </ol>
                  <div className="flex items-center gap-2 mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-700 text-sm">
                    <Info className="h-4 w-4 shrink-0" />
                    <p>Need help setting up your device? Contact your Care Manager at <span className="font-medium">support@caresanctum.com</span></p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsGoogleFitDialogOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

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
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button 
                            className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${dataSource === 'googlefit' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'} ${!isGoogleFitConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => isGoogleFitConnected && setDataSource('googlefit')}
                            disabled={!isGoogleFitConnected}
                          >
                            <Smartphone className="h-3 w-3" />
                            Google Fit
                          </button>
                        </TooltipTrigger>
                        {!isGoogleFitConnected && (
                          <TooltipContent>
                            <p>Connect to Google Fit to view this data</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
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
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main metrics content */}
          <Tabs defaultValue="primary" className="space-y-4" value={dataTab} onValueChange={(value) => setDataTab(value as 'primary' | 'additional')}>
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
          {dataSource === 'googlefit' && isGoogleFitConnected && (
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
      </main>
    </div>
  );
};

export default Home;
