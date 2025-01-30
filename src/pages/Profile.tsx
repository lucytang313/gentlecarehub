import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/home')}
            className="mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-gray-100 rounded-full p-6 w-32 h-32 flex items-center justify-center mb-4">
              <User className="h-16 w-16 text-gray-500" />
            </div>
            <CardTitle className="text-2xl">John Doe</CardTitle>
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
              <p className="font-medium">john.doe@example.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Emergency Contact</p>
              <p className="font-medium">Jane Doe (Daughter)</p>
              <p className="text-sm">+1 234 567 8900</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">123 Care Street, Health City, HC 12345</p>
            </div>

            <Button className="w-full">Edit Profile</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;