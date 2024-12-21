'use client'; 

import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';
import { Card1 } from '@/Components/StepOne';
import { Card2 } from '@/Components/StepTwo';
import { Card3 } from '@/Components/StepThree';
import { Card4 } from '@/Components/StepFour';
import { validateStepOne, validateStepTwo } from "@/helpers/validation";

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

  const [borderColor1, setBorderColor1] = useState("focus:border-[#CBD5E1]");
  const [borderColor2, setBorderColor2] = useState("focus:border-[#CBD5E1]");
  const [borderColor3, setBorderColor3] = useState("focus:border-[#CBD5E1]");
  const [borderColor4, setBorderColor4] = useState("focus:border-[#CBD5E1]");
  const [borderColor5, setBorderColor5] = useState("focus:border-[#CBD5E1]");
  const [borderColor6, setBorderColor6] = useState("focus:border-[#CBD5E1]");
  const [borderColor7, setBorderColor7] = useState("focus:border-[#CBD5E1]");
  const [firstbuttonColor, setfirstButtonColor] = useState("");
  const [secondButtonColor, setSecondButtonColor] = useState("");
  
  useEffect(()=>{
    const allErrors = [
      error.firstName, 
      error.lastName, 
      error.userName
    ];
    let  checkErrors = false;
    for (let i=0; i < allErrors.length; i++) {
      if (allErrors[i] != '') {
        checkErrors = true;
      };   
    };
  }, [error]);

  useEffect(()=>{
    const allErrors = [
      error.email, 
      error.phoneNumber, 
      error.password, 
      error.confirmPassword
    ];
    let checkErrors = false;
    for (let i = 0; i < allErrors.length; i++) {
      if (allErrors[i] != '') {
        checkErrors = true;
      };
    };
  }); 
  console.log(inputValue)

  const inputChange = (e)=> {

    const inputId = e.target.id;
    console.log(inputId)
    const newValues = {...inputValue, [inputId]: e.target.value}
    console.log(newValues)
    setInputValue(newValues);

    const {isValid, newErrors} = validateStepOne(inputValue);
    // const {isValidTwo, newErrorsTwo} = validateStepTwo(inputValue);
      console.log(newErrors,'errrororororoo')
    setError(newErrors)
    if(newErrors.firstName !== ""){
      setBorderColor1("border:[#E14942]")
    }
    if(newErrors.lastName !== ""){
      setBorderColor2("border:[#E14942]")
    } 
    if(newErrors.userName !== ""){
      setBorderColor3("border:[#E14942]")
    } 

    // setError(newErrorsTwo)
    // if(newErrorsTwo.email != ""){
    //   setBorderColor4("border:[#E14942]")
    // }
  
   
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
          onChange={inputChange} //end onChange gej nerlcheed StepOne dree onChange gj uguh l heregtei bsn !!!zgeerl StepOne neree export hiisen! 
          onClickNext={nextCard}
          borderColor1={borderColor1} 
          borderColor2={borderColor2}
          borderColor3={borderColor3}
          />
        )}
         {currentStep === 2 && (
          <Card2
          value={inputValue}
          onChange={inputChange}
          onClickBack={backCard}
          onClickNext={nextCard}
          />
        )} 

         {currentStep === 3 && (
          <Card3
          value={inputValue}
          onChange={inputChange}
          onClickBack={backCard}
          onClickNext={nextCard}
          />
        )}

         {currentStep === 4 && (
          <Card4/>
        )}
      </div>
    </>
  )
}

