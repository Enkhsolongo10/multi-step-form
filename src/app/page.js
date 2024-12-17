'use client';

import Image from "next/image";
import { useState } from 'react';
import { StepOne } from '@/components/StepOne';
import { StepTwo } from '@/components/StepTwo'
import { StepThree } from '@/components/StepThree'
import { SearchInput } from "@/components/SearchInput";

const FormBody = ({currentStep, setCurrentStep})=>{
  if (currentStep === 1) {
    return <StepOne setCurrentStep = {setCurrentStep}/>
  }

  if (currentStep === 2) {
    return <StepTwo setCurrentStep = {setCurrentStep}/>
  }

  if (currentStep === 3) {
    return <StepThree setCurrentStep = {setCurrentStep}/>
  }

  return <div>
    <button onClick={()=> setCurrentStep(1)}>to Step 1</button>
  </div>
};

export default function Home() {

  const [currentStep, setCurrentStep] = useState(1)

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <FormBody currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      </div>
    </>
  );
}; 
