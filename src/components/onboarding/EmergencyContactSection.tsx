import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const EmergencyContactSection = ({ register }: { register: any }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">Emergency Contact Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="emergencyName">Next of Kin's Name <span className="text-red-500">*</span></Label>
          <Input id="emergencyName" {...register("emergencyName")} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="emergencyPhone">Next of Kin's Contact Number <span className="text-red-500">*</span></Label>
          <Input id="emergencyPhone" type="tel" {...register("emergencyPhone")} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="relationship">Relationship with the Senior <span className="text-red-500">*</span></Label>
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
  );
};