"use client";
import React from 'react'
import { useState } from 'react';
import { StepOne } from '@/app/_components/StepOne';
import { StepTwo } from '@/app/_components/StepTwo';

const FormBody = ({ currentStep, setCurrentStep, onChange, form }) => {
  if (currentStep === 1) {
    return <StepOne setCurrentStep={setCurrentStep} onChange={onChange} form={form} />
  }
}

export default function Home () {
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

  const onChange = () => {};

  return (
    <div>
      <FormBody 
      currentStep={currentStep} 
      setCurrentStep={setCurrentStep}
      onChange={onChange}
      form={form}
      />
    </div> 
  );
}







// 'use client'; 
// import Image from "next/image";
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { StepOne } from '@/app/_components/StepOne';
// import { StepTwo } from '@/app/_components/StepTwo';
// import { StepThree } from '@/app/_components/StepThree';
// import { StepFour } from '@/app/_components/StepFour';
// import { validateStepOne, validateStepTwo } from "@/helpers/validation";

// export default function Home() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [inputValue, setInputValue] = useState({ 
//     firstName: '',
//     lastName: '',
//     userName:'',
//     email:'',
//     phoneNumber:'',
//     password:'',
//     confirmPassword:'',
//     dateOfBirth:'',
//     profileImage:'',a
//   });
//   const [error, setError] = useState({
//     firstName: '',
//     lastName: '',
//     userName:'',
//     email:'',
//     phoneNumber:'',
//     password:'',
//     confirmPassword:'',
//     dateOfBirth:'',
//     profileImage:'',
//   });
//   const [borderColor1, setBorderColor1] = useState("focus:border-[#CBD5E1]");
//   const [borderColor2, setBorderColor2] = useState("focus:border-[#CBD5E1]");
//   const [borderColor3, setBorderColor3] = useState("focus:border-[#CBD5E1]");
//   const [borderColor4, setBorderColor4] = useState("focus:border-[#CBD5E1]");
//   const [borderColor5, setBorderColor5] = useState("focus:border-[#CBD5E1]");
//   const [borderColor6, setBorderColor6] = useState("focus:border-[#CBD5E1]");
//   const [borderColor7, setBorderColor7] = useState("focus:border-[#CBD5E1]");
//   const [firstbuttonColor, setfirstButtonColor] = useState("");
//   const [secondButtonColor, setSecondButtonColor] = useState("");
  
//   useEffect(()=>{
//       if (error.firstName != '') {
//         setBorderColor1("border:[#E14942]")
//     }
//   }, [error]);

//   const inputChange = (e)=> {
//     const inputId = e.target.id;
//       console.log(inputId)
//     const newValues = {...inputValue, [inputId]: e.target.value}
//       console.log(newValues)
//     setInputValue(newValues);
    
//     const {isValid, newErrors} = validateStepOne(newValues);
//       console.log(newErrors,'errrororororoo')
//     setError(newErrors)
//     if(newErrors.firstName !== ""){
//       setBorderColor1("border:[#E14942]")
//     }
//     if(newErrors.lastName !== ""){
//       setBorderColor2("border:[#E14942]")
//     } 
//     if(newErrors.userName !== ""){
//       setBorderColor3("border:[#E14942]")
//     } 
//   };

//   const inputChangeTwo = (e)=> {
//     const inputId = e.target.id;
//       console.log(inputId)
//     const newValues = {...inputValue, [inputId]: e.target.value}
//       console.log(newValues)
//     setInputValue(newValues);
//       console.log(newValues)

//     const {isValidTwo, newErrorsTwo} = validateStepTwo(newValues);
//       console.log(newErrorsTwo,'errrororororoo')    
//     setError(newErrorsTwo)
//     if(newErrorsTwo.email !== ""){
//       setBorderColor4("border:[#E14942]")
//     }
//     if(newErrorsTwo.phoneNumber !== ""){
//       setBorderColor5("border:[#E14942]")
//     } 
//     if(newErrorsTwo.password !== ""){
//       setBorderColor6("border:[#E14942]")
//     } 
//     if(newErrorsTwo.confirmPassword !== ""){
//       setBorderColor7("border:[#E14942]")
//     } 
//   };
  
//   const nextCard = ()=>{
//     setCurrentStep(currentStep+1);
//   };

//   const backCard = ()=>{
//     setCurrentStep(currentStep-1);
//   };

//   const inputChangeThree = (e)=> {
//     const inputId = e.target.id;
//       console.log(inputId)
//     const newValues = {...inputValue, [inputId]: e.target.value}
//       console.log(newValues)
//     setInputValue(newValues);
//     const {isValidTwo, newErrorsTwo} = validateStepTwo(newValues);
//     console.log(newErrorsTwo,'errrororororoo')    
//   setError(newErrorsTwo)
// };

//   return (
//     <>
//       <div className="bg-stone-300 w-full h-screen flex justify-center items-center">
//         {currentStep === 1 && (
//           <StepOne
//           inputValue={inputValue}
//           onChange={inputChange} //end onChange gej nerlcheed StepOne dree onChange gj uguh l heregtei bsn !!!zgeerl StepOne neree export hiisen! 
//           onClickNext={nextCard}
//           errors={error}
//           borderColor1={borderColor1} 
//           borderColor2={borderColor2}
//           borderColor3={borderColor3} 
//           />
//         )} 
//         {currentStep === 2 && (
//           <StepTwo
//           inputValue={inputValue}
//           onChange={inputChangeTwo}
//           onClickBack={backCard}
//           onClickNext={nextCard}
//           errors={error}
//           borderColor4={borderColor4} 
//           borderColor5={borderColor5}
//           borderColor6={borderColor6}
//           borderColor7={borderColor7}
//           />
//         )}
//          {currentStep === 3 && (
//           <StepThree
//           inputValue={inputValue}
//           onChange={inputChangeThree}
//           onClickBack={backCard}
//           onClickNext={nextCard}
//           errors={error}
//           />
//         )}

//          {currentStep === 4 && (
//           <StepFour/>
//         )}
//       </div>
//     </>
//   )
// }

