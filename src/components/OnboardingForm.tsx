import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { PersonalInfoSection } from './onboarding/PersonalInfoSection';
import { ContactSection } from './onboarding/ContactSection';
import { EmergencyContactSection } from './onboarding/EmergencyContactSection';
import { MedicalSection } from './onboarding/MedicalSection';
import { PreferredMedicalSection } from './onboarding/PreferredMedicalSection';
import { LifestyleSection } from './onboarding/LifestyleSection';
import { SpecialNeedsSection } from './onboarding/SpecialNeedsSection';
import { ConsentsSection } from './onboarding/ConsentsSection';

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
      <PersonalInfoSection register={register} />
      <ContactSection register={register} />
      <EmergencyContactSection register={register} />
      <MedicalSection register={register} />
      <PreferredMedicalSection register={register} />
      <LifestyleSection register={register} />
      <SpecialNeedsSection register={register} />
      <ConsentsSection register={register} />

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