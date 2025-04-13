'use client'; 
import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';
import { StepOne } from '@/app/_components/StepOne';
import { StepTwo } from '@/app/_components/StepTwo';
import { StepThree } from '@/app/_components/StepThree';
import { StepFour } from '@/app/_components/StepFour';
import { validateStepOne, validateStepTwo } from "@/helpers/validation";

const FormBody = ({
  currentStep,
  setCurrentStep,
  form,
  onChange,
  error,
  setError,
}) => {
  if (currentStep === 1) {
    return (
      <StepOne 
        setCurrentStep={setCurrentStep} 
        onChange={onChange} 
        form={form} 
        error={error}
        setError={setError}
      />
    )
  }
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({ 
    firstName: '',
    lastName: '',
    userName:'',
    email:'',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
    dateOfBirth:'',
    profileImage:'',
  });
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    userName:'',
    email:'',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
    dateOfBirth:'',
    profileImage:'',
  });

  const onChange = (e)=> {
    const newValues = {...form, [e.target.id]: e.target.value};
      console.log(newValues)
    setForm(newValues);
  };

  // const nextCard = ()=>{
  //   setCurrentStep(currentStep+1);
  // };

  // const backCard = ()=>{
  //   setCurrentStep(currentStep-1);
  // };

  return (
    <>
      <div className="bg-stone-300 w-full h-screen flex justify-center items-center">
      <FormBody 
        currentStep={currentStep} 
        setCurrentStep={setCurrentStep} 
        onChange={onChange}
        form={form} 
        error={error}
        setError={setError}
      />
      </div>
    </>
  )
}

