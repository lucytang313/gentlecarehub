import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const LifestyleSection = ({ register }: { register: any }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">Lifestyle Details (Optional)</h3>
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
  );
};
