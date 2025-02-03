import React from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const ConsentsSection = ({ register }: { register: any }) => {
  return (
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
  );
};