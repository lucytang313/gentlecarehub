import React from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const ConsentsSection = ({ register }: { register: any }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">Additional Consents</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="marketingConsent" {...register("marketingConsent")} />
          <Label htmlFor="marketingConsent">I would like to receive marketing communications</Label>
        </div>
      </div>
    </div>
  );
};