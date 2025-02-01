import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Edit } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const navigate = useNavigate();

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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Amit Bachhan" />
                <AvatarFallback>
                  <User className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl">Amit Bachhan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Age</p>
                <p className="font-medium">65 years</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Height</p>
                <p className="font-medium">175 cm</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Weight</p>
                <p className="font-medium">68 kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Blood Type</p>
                <p className="font-medium">O+</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">amit.bachhan@example.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Emergency Contact</p>
              <p className="font-medium">Abhishek Bachhan (Son)</p>
              <p className="text-sm">+1 234 567 8900</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">123 Care Street, Health City, HC 12345</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;