import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Droplets, Weight, Thermometer, User, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HealthMetricCard } from '@/components/HealthMetricCard';
import { PrescriptionCard } from '@/components/PrescriptionCard';
import { Logo } from '@/components/Logo';
import { useToast } from "@/components/ui/use-toast";

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = () => {
    // In a real app, you would handle sign out logic here
    toast({
      title: "Signed out successfully",
      duration: 2000,
    });
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="flex items-center gap-2"
              onClick={() => navigate('/profile')}
            >
              <User className="h-5 w-5" />
              Profile
            </Button>
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
          <Card>
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
          />
          <HealthMetricCard
            title="Blood Oxygen"
            value="98%"
            icon={<Droplets className="h-4 w-4" />}
          />
          <HealthMetricCard
            title="Weight"
            value="68 kg"
            icon={<Weight className="h-4 w-4" />}
          />
          <HealthMetricCard
            title="Temperature"
            value="36.6°C"
            icon={<Thermometer className="h-4 w-4" />}
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
          <Card>
            <CardHeader>
              <CardTitle>Payment & Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Current Plan: Premium Care</p>
              <Button onClick={() => navigate('/payments')}>Manage Subscription</Button>
            </CardContent>
          </Card>
          
          <Card>
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
