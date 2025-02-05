import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const PersonalInfoSection = ({ register, watch }: { register: any, watch: any }) => {
  const locationStatus = watch('locationStatus');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
          <Input id="fullName" {...register("fullName")} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth <span className="text-red-500">*</span></Label>
          <Input id="dob" type="date" {...register("dob")} required />
        </div>
        <div className="space-y-2">
          <Label>Gender <span className="text-red-500">*</span></Label>
          <RadioGroup defaultValue="male" required>
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
          <Label htmlFor="bloodGroup">Blood Group <span className="text-red-500">*</span></Label>
          <Select required>
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
          <Label htmlFor="height">Height (cm) <span className="text-red-500">*</span></Label>
          <Input id="height" type="number" {...register("height")} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg) <span className="text-red-500">*</span></Label>
          <Input id="weight" type="number" {...register("weight")} required />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="idProof">ID Proof Upload <span className="text-red-500">*</span></Label>
          <Input id="idProof" type="file" accept=".pdf,.jpg,.jpeg,.png" {...register("idProof")} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wakeUpTime">Usual Wake Up Time <span className="text-red-500">*</span></Label>
          <Input id="wakeUpTime" type="time" {...register("wakeUpTime")} required />
        </div>
        <div className="space-y-2">
          <Label>Current Location Status <span className="text-red-500">*</span></Label>
          <RadioGroup defaultValue="home" {...register("locationStatus")} required>
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
          <Label htmlFor="expectedReturn">
            Expected Return Date
            {locationStatus === 'travelling' && <span className="text-red-500">*</span>}
          </Label>
          <Input 
            id="expectedReturn" 
            type="date" 
            {...register("expectedReturn", { 
              required: locationStatus === 'travelling' 
            })} 
          />
        </div>
      </div>
    </div>
  );
};