import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export const OnboardingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Profile Completed",
      description: "Your profile has been successfully created!",
    });
    navigate('/home');
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
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button type="submit">
          Complete Profile
        </Button>
      </div>
    </form>
  );
};