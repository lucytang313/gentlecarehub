import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Droplets, Weight, Thermometer, User, LogOut, AlertCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <Button 
              variant="destructive"
              className="flex items-center gap-2"
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
              <span className="font-medium">Amit Bachhan</span>
            </div>
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-red-600 hover:text-red-700"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-none shadow-lg">
            <CardHeader>
              <CardTitle>Health Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-600 font-medium">Your health metrics are within normal range</p>
              <p className="mt-2 text-gray-600">Next check-up scheduled for: June 15, 2024</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <HealthMetricCard
            title="Heart Rate"
            value="72 BPM"
            icon={<Heart className="h-4 w-4" />}
            lastChecked="Today, 2:30 PM"
            trendData={generateTrendData(72, 5)}
          />
          <HealthMetricCard
            title="Blood Oxygen"
            value="98%"
            icon={<Droplets className="h-4 w-4" />}
            lastChecked="Today, 2:30 PM"
            trendData={generateTrendData(98, 1)}
          />
          <HealthMetricCard
            title="Weight"
            value="68 kg"
            icon={<Weight className="h-4 w-4" />}
            lastChecked="Yesterday, 9:00 AM"
            trendData={generateTrendData(68, 0.5)}
          />
          <HealthMetricCard
            title="Temperature"
            value="36.6°C"
            icon={<Thermometer className="h-4 w-4" />}
            lastChecked="Today, 2:30 PM"
            trendData={generateTrendData(36.6, 0.3)}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Current Prescriptions</h2>
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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
            <CardHeader>
              <CardTitle>Payment & Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Current Plan: Premium Care (₹1,999/month)</p>
              <Button onClick={() => navigate('/payments')}>Manage Subscription</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
            <CardHeader>
              <CardTitle>Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Contact Care Manager</Button>
              <Button variant="outline" className="w-full">Request Emergency Assistance</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;