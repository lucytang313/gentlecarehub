import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Droplets, 
  Weight, 
  Thermometer, 
  User, 
  LogOut, 
  AlertCircle,
  ArrowLeft,
  Activity,
  Brain,
  Moon,
  Scale,
  Lungs,
  Gauge
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HealthMetricCard } from '@/components/HealthMetricCard';
import { PrescriptionCard } from '@/components/PrescriptionCard';
import { Logo } from '@/components/Logo';
import { useToast } from "@/components/ui/use-toast";

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmergency = () => {
    toast({
      title: "Emergency assistance requested",
      description: "Our team has been notified and will contact you immediately.",
      duration: 5000,
    });
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      duration: 2000,
    });
    navigate('/signin');
  };

  // Mock data for health metrics trends
  const generateTrendData = (baseValue: number, variance: number) => {
    return Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: baseValue + Math.random() * variance * 2 - variance,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <header className="bg-white shadow-lg border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="h-5 w-5 text-primary" />
            </Button>
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="destructive"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
              onClick={handleEmergency}
            >
              <AlertCircle className="h-5 w-5" />
              Emergency Assistance
            </Button>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/profile')}>
              <img 
                src="/lovable-uploads/6f8636d0-de39-49e5-a707-a7cc04c4fb22.png" 
                alt="Amit Bachhan" 
                className="h-10 w-10 rounded-full object-cover border-2 border-primary"
              />
              <span className="font-medium text-primary">Amit Bachhan</span>
            </div>
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <Card className="bg-gradient-to-r from-primary via-primary/90 to-secondary text-white border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Health Status Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-200 font-medium">Your health metrics are within normal range</p>
              <p className="mt-2 text-white/80">Next check-up scheduled for: June 15, 2024</p>
            </CardContent>
          </Card>
        </div>

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
              icon={<Lungs className="h-4 w-4" />}
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

        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">Current Prescriptions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PrescriptionCard
              medicine="Metformin"
              dosage="500mg"
              timing="Twice daily"
              doctor="Dr. Smith"
            />
            <PrescriptionCard
              medicine="Lisinopril"
              dosage="10mg"
              timing="Once daily"
              doctor="Dr. Johnson"
            />
            <PrescriptionCard
              medicine="Simvastatin"
              dosage="20mg"
              timing="Evening"
              doctor="Dr. Williams"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-white to-gray-50 border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Payment & Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Current Plan: Premium Care (₹1,999/month)</p>
              <Button onClick={() => navigate('/payments')} className="bg-primary hover:bg-primary/90">
                Manage Subscription
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-gray-50 border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90">Contact Care Manager</Button>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                Request Emergency Assistance
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;