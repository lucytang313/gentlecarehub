import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Edit, Phone, Mail, MapPin, Heart, Activity, AlertCircle, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      duration: 2000,
    });
    navigate('/signin');
  };

  // This would typically come from your app's state management
  const profileData = {
    personalInfo: {
      fullName: "Pawan Agarwal",
      dob: "1958-05-15",
      gender: "Male",
      bloodGroup: "O+",
      height: "175",
      weight: "68",
    },
    contact: {
      phone: "+91 98765 43210",
      altPhone: "+91 98765 43211",
      email: "pawan.agarwal@example.com",
      address: "42/B, Pali Hill Road, Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400050"
    },
    emergency: {
      kinName: "Roshan Agarwal",
      kinPhone: "+91 98765 43212",
      relationship: "Son",
      neighborName: "Rajesh Kumar",
      neighborPhone: "+91 98765 43213"
    },
    medical: {
      conditions: "Hypertension, Diabetes Type 2",
      allergies: "Penicillin",
      surgeries: "Knee replacement (2019)"
    },
    preferences: {
      doctorName: "Dr. Priya Patel",
      doctorContact: "+91 98765 43214",
      hospital: "Lilavati Hospital",
      activityLevel: "Moderately Active",
      diet: "Diabetic Diet"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/home')}
              className="mr-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
          <Button 
            onClick={() => navigate('/onboarding')} 
            variant="outline"
            className="flex items-center gap-2"
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/lovable-uploads/06ca9dad-031b-4abb-89e3-b5790fbd261b.png" alt={profileData.personalInfo.fullName} />
                <AvatarFallback>
                  <User className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl">{profileData.personalInfo.fullName}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium">{new Date(profileData.personalInfo.dob).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-medium">{profileData.personalInfo.gender}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Blood Group</p>
                <p className="font-medium">{profileData.personalInfo.bloodGroup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Height</p>
                <p className="font-medium">{profileData.personalInfo.height} cm</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Weight</p>
                <p className="font-medium">{profileData.personalInfo.weight} kg</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{profileData.contact.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Alternative Phone</p>
                <p className="font-medium">{profileData.contact.altPhone}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{profileData.contact.email}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{profileData.contact.address}</p>
                <p className="text-sm">PIN: {profileData.contact.pincode}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Next of Kin</p>
              <p className="font-medium">{profileData.emergency.kinName} ({profileData.emergency.relationship})</p>
              <p className="text-sm">{profileData.emergency.kinPhone}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-gray-500">Neighbor Contact</p>
              <p className="font-medium">{profileData.emergency.neighborName}</p>
              <p className="text-sm">{profileData.emergency.neighborPhone}</p>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Medical Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Health Conditions</p>
              <p className="font-medium">{profileData.medical.conditions}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Allergies</p>
              <p className="font-medium">{profileData.medical.allergies}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Past Surgeries</p>
              <p className="font-medium">{profileData.medical.surgeries}</p>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Preferences & Lifestyle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Preferred Doctor</p>
                <p className="font-medium">{profileData.preferences.doctorName}</p>
                <p className="text-sm">{profileData.preferences.doctorContact}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Preferred Hospital</p>
                <p className="font-medium">{profileData.preferences.hospital}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Activity Level</p>
                <p className="font-medium">{profileData.preferences.activityLevel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Diet Preference</p>
                <p className="font-medium">{profileData.preferences.diet}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sign Out Button */}
        <Button 
          variant="destructive" 
          className="w-full flex items-center justify-center gap-2"
          onClick={handleSignOut}
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </Button>
      </main>
    </div>
  );
};

export default Profile;
