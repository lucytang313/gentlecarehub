import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Pill, Upload, FileText, FlaskConical } from 'lucide-react';

export const PrescriptionManagement = () => {
  const { toast } = useToast();
  const [uploadType, setUploadType] = React.useState<'prescription' | 'lab'>('prescription');
  const [doctorName, setDoctorName] = React.useState('');
  const [visitDate, setVisitDate] = React.useState('');
  const [testName, setTestName] = React.useState('');

  const handleUpload = () => {
    toast({
      title: `${uploadType === 'prescription' ? 'Prescription' : 'Lab Report'} uploaded successfully`,
      description: "Your document has been added to your records.",
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Health Records Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="prescriptions" className="space-y-4">
          <TabsList className="grid grid-cols-3 gap-4">
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="lab-reports">Lab Reports</TabsTrigger>
            <TabsTrigger value="medicines">Medicine Management</TabsTrigger>
          </TabsList>

          <TabsContent value="prescriptions" className="space-y-4">
            <div className="grid gap-4">
              {/* Existing Prescriptions */}
              <div className="space-y-2">
                <h3 className="font-medium">Recent Prescriptions</h3>
                <div className="grid gap-2">
                  <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Dr. Smith - Cardiology</p>
                      <p className="text-sm text-gray-600">Visit Date: 15th March 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </div>

              {/* Upload New Prescription */}
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-medium">Upload New Prescription</h3>
                <div className="space-y-2">
                  <Label>Doctor Name</Label>
                  <Input 
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    placeholder="Enter doctor's name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Visit Date</Label>
                  <Input 
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                  />
                </div>
                <Button onClick={handleUpload} className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Prescription
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lab-reports" className="space-y-4">
            <div className="grid gap-4">
              {/* Existing Lab Reports */}
              <div className="space-y-2">
                <h3 className="font-medium">Recent Lab Reports</h3>
                <div className="grid gap-2">
                  <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Blood Work Analysis</p>
                      <p className="text-sm text-gray-600">Date: 10th March 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </div>

              {/* Upload New Lab Report */}
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-medium">Upload New Lab Report</h3>
                <div className="space-y-2">
                  <Label>Test Name</Label>
                  <Input 
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    placeholder="Enter test name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Test Date</Label>
                  <Input 
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                  />
                </div>
                <Button onClick={handleUpload} className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Lab Report
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="medicines" className="space-y-4">
            <div className="grid gap-4">
              {/* Current Medicines */}
              <div className="space-y-2">
                <h3 className="font-medium">Current Medicines</h3>
                <div className="grid gap-2">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-primary" />
                      <p className="font-medium">Metformin 500mg</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>Dosage: 1 tablet</p>
                      <p>Timing: Twice daily after meals</p>
                      <p>Prescribed by: Dr. Johnson</p>
                      <p className="mt-1 text-amber-600">Stock remaining: 15 tablets</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-primary" />
                      <p className="font-medium">Lisinopril 10mg</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>Dosage: 1 tablet</p>
                      <p>Timing: Once daily in the morning</p>
                      <p>Prescribed by: Dr. Smith</p>
                      <p className="mt-1 text-red-600">Stock remaining: 5 tablets (Low)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
