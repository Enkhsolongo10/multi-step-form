'use client'; 

import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';
import { Card1 } from '@/components/FirstCard';
import { Card2 } from '@/components/SecondCard';
import { Card3 } from '@/components/ThirdCard';
import { Card4 } from '@/components/ForthCard';
import { TextInput } from "@/components/Input";

export default function Home() {

  const [currentStep, setCurrentStep] = useState(1);

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
  useEffect(()=>{
    const allErrors = [error.firstName, error.lastName, error.userName];
    let  checkErrors = false;
    for (let i=0; i < allErrors.length; i++) {
      if (allErrors[i] != '') {
        checkErrors = true;
      };   
    };
  }, [error]); 
  useEffect(()=>{
    const allErrors = [error.email, error.phoneNumber, error.password, error.confirmPassword];
    let checkErrors = false;
    for (let i = 0; i < allErrors.length; i++) {
      if (allErrors[i] != '') {
        checkErrors = true;
      };
    };
  }); 

  const inputChange = (e)=> {
    const inputId = e.target.id;
    const newValues = {...inputValue, [inputId]: e.target.value}
    setInputValue(newValues) 
    console.log(newValues)
  };
  
  const nextCard = ()=>{
    setCurrentStep(currentStep+1);
  };

  const backCard = ()=>{
    setCurrentStep(currentStep-1);
  };

  return (
    <>
      <div className="bg-stone-300 w-full h-screen flex justify-center items-center">
        {currentStep === 1 && (
          <Card1
          value={inputValue}
          onChange={inputChange}
          onClick={nextCard}
          />
        )}; 
         {currentStep === 2 && (
          <Card2
          value={inputValue}
          onChange={inputChange}
          onClick={nextCard}
          Back={backCard}
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

