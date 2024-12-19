'use client'; 

import Image from "next/image";
import { useState } from 'react';
import { Card1 } from '@/components/Card1';
import { Card2 } from '@/components/Card2';
import { Card3 } from '@/components/Card3';
import { Card4 } from '@/components/Card4';
import { TextInput } from "@/components/Input";

const FormBody = ({ currentStep, setCurrentStep, inputChange, inputValue, })=>{ 

  if (currentStep === 4) {
    return (
      <StepFour/>
    );
  }; 

};

export default function Home() {

  const [currentStep, setCurrentStep] = useState(1);

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

  const [inputValue, setInputValue] = useState({ 
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

  const inputChange = (e)=> {
    const inputId = e.target.id;
    const newValue = {...inputValue, [inputId]: e.target.value}
    setInputValue(newValue) 
    console.log(inputId)
  }; 

  return (
    <>
      <div className="bg-stone-300 w-full h-screen flex justify-center items-center">
        {currentStep === 1 && (
          <Card1
          value={inputValue}
          onChange={inputChange}
          />
        )};

         {currentStep === 2 && (
          <Card2
          value={inputValue}
          onChange={inputChange}
          />
        )};

         {currentStep === 3 && (
          <Card3
          value={inputValue}
          onChange={inputChange}
          />
        )};

         {currentStep === 4 && (
          <Card4 
          value={inputValue}
          onChange={inputChange}
          />
        )};
      </div>
    </>
  );
}; 

