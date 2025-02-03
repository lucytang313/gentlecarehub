import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

export const OnboardingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated!",
    });
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" {...register("fullName")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" {...register("dob")} required />
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup defaultValue="male">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bloodGroup">Blood Group</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select blood group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input id="height" type="number" {...register("height")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input id="weight" type="number" {...register("weight")} required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="idProof">ID Proof Upload</Label>
            <Input id="idProof" type="file" accept=".pdf,.jpg,.jpeg,.png" {...register("idProof")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wakeUpTime">Usual Wake Up Time</Label>
            <Input 
              id="wakeUpTime" 
              type="time" 
              {...register("wakeUpTime")} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label>Current Location Status</Label>
            <RadioGroup defaultValue="home">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="home" id="home" />
                  <Label htmlFor="home">At Home</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="travelling" id="travelling" />
                  <Label htmlFor="travelling">Travelling</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="expectedReturn">Expected Return Date (if travelling)</Label>
            <Input 
              id="expectedReturn" 
              type="date" 
              {...register("expectedReturn")} 
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" {...register("phone")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="altPhone">Alternate Phone Number</Label>
            <Input id="altPhone" type="tel" {...register("altPhone")} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Current Address</Label>
            <Textarea id="address" {...register("address")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pincode">PIN Code</Label>
            <Input id="pincode" {...register("pincode")} required />
          </div>
        </div>
      </div>

      {/* Emergency Contact Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Emergency Contact Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="emergencyName">Next of Kin's Name</Label>
            <Input id="emergencyName" {...register("emergencyName")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emergencyPhone">Next of Kin's Contact Number</Label>
            <Input id="emergencyPhone" type="tel" {...register("emergencyPhone")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="relationship">Relationship with the Senior</Label>
            <Input id="relationship" {...register("relationship")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neighborName">Neighbor's Name</Label>
            <Input id="neighborName" {...register("neighborName")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neighborPhone">Neighbor's Contact Number</Label>
            <Input id="neighborPhone" type="tel" {...register("neighborPhone")} />
          </div>
        </div>
      </div>

      {/* Medical History */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Medical History</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="healthConditions">Existing Health Conditions</Label>
            <Textarea id="healthConditions" {...register("healthConditions")} placeholder="List any chronic illnesses" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="allergies">Known Allergies</Label>
            <Textarea id="allergies" {...register("allergies")} placeholder="Food, medication, environmental allergies" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="prescriptions">Current Prescriptions</Label>
            <Input id="prescriptions" type="file" multiple accept=".pdf,.jpg,.jpeg,.png" {...register("prescriptions")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="surgeries">Past Surgeries</Label>
            <Textarea id="surgeries" {...register("surgeries")} placeholder="Include dates if available" />
          </div>
        </div>
      </div>

      {/* Preferred Medical Services */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Preferred Medical Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="doctorName">Preferred Doctor's Name</Label>
            <Input id="doctorName" {...register("doctorName")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="doctorContact">Doctor's Contact Number</Label>
            <Input id="doctorContact" type="tel" {...register("doctorContact")} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="preferredHospital">Preferred Hospital/Clinic</Label>
            <Input id="preferredHospital" {...register("preferredHospital")} />
          </div>
        </div>
      </div>

      {/* Lifestyle Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Lifestyle Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Activity Level</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary</SelectItem>
                <SelectItem value="moderate">Moderately Active</SelectItem>
                <SelectItem value="active">Highly Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Diet Preferences</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select diet preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="diabetic">Diabetic Diet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Special Needs */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Special Needs</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="mobilityAssistance" {...register("mobilityAssistance")} />
            <Label htmlFor="mobilityAssistance">Requires Mobility Assistance</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="visionImpairment" {...register("visionImpairment")} />
            <Label htmlFor="visionImpairment">Has Vision Impairment</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="hearingImpairment" {...register("hearingImpairment")} />
            <Label htmlFor="hearingImpairment">Has Hearing Impairment</Label>
          </div>
        </div>
      </div>

      {/* Consents */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Permissions and Consents</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="dataSharing" {...register("dataSharing")} required />
            <Label htmlFor="dataSharing">I consent to sharing my data with healthcare providers</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="emergencyNotifications" {...register("emergencyNotifications")} required />
            <Label htmlFor="emergencyNotifications">I consent to receiving emergency notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="termsAccepted" {...register("termsAccepted")} required />
            <Label htmlFor="termsAccepted">I agree to the Terms and Conditions</Label>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button type="submit">
          Save Profile
        </Button>
      </div>
    </form>
  );
};
