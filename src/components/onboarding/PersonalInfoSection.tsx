import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const PersonalInfoSection = ({ register }: { register: any }) => {
  return (
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
          <Input id="wakeUpTime" type="time" {...register("wakeUpTime")} required />
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
          <Input id="expectedReturn" type="date" {...register("expectedReturn")} />
        </div>
      </div>
    </div>
  );
};