'use client';

import Image from "next/image";
import { useState } from 'react';
import { StepOne } from '@/components/StepOne';
import { StepTwo } from '@/components/StepTwo';
import { StepThree } from '@/components/StepThree';
import { StepFour } from '@/components/StepFour';
import { TextInput } from "@/components/TextInput"; 

const FormBody = ({ currentStep, setCurrentStep, onChange, form, })=>{ 
  if (currentStep === 1) {
    return (
      <StepOne 
        setCurrentStep = {setCurrentStep} 
        onChange={onChange}
        form={form} 
      />
    );
  }; 

  if (currentStep === 2) {
    return (
      <StepTwo 
        setCurrentStep = {setCurrentStep} 
        onChange={onChange}
        form={form} 
      />
    );
  };

  if (currentStep === 3) {
    return (
      <StepThree  
        setCurrentStep = {setCurrentStep} 
        onChange={onChange}
        form={form} 
      />
    );
  };

  if (currentStep === 4) {
    return (
      <StepFour/>
    );
  }; 

};

export default function Home() {

  const [currentStep, setCurrentStep] = useState(1)
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


  const onChange = (e)=> {
    const field = e.target.id;
    const newValue = {...form, [field]: e.target.value}
    setForm(newValue) 


    

  }; 

  console.log(form)

  return (
    <>
      <div className="bg-stone-300 w-full h-screen flex justify-center items-center">
        <FormBody 
        currentStep={currentStep} 
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form} 
        />
      </div>
    </>
  );
};

