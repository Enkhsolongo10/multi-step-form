import { useState } from "react";
import { TextInput } from "./Input";

export const Card1 = ({ setCurrentStep, inputChange , form, type }) => {


    const validateFirstName =()=>{
        return form.firstName === '', form.firstName === ''
    } 

    const validateLastName =()=>{
        return form.lastName === '' 
    }

    const validateUserName =()=>{
        return form.userName === '' 
    }


    const validate = validateFirstName() && validateLastName() && validateUserName()


    return( 
        <div className="p-[32px] bg-[#FFFFFF] text-black rounded-lg w-[480px] h-[655px] flex flex-col items-start justify-between">
            <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
            <h1 className="font-semibold text-lg -mt-[130px]">Join Us! 😎</h1> 
            <h2 className="font-lg text-[#8E8E8E] -mt-[130px]">Please provide all current information accurately.</h2>
            <div className="-mt-[120px]">
            <h3 className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">First Name *</h3>
                <input 
                    className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"
                    id="firstName" 
                    value={form.firstName} 
                    onChange={inputChange}  
                    placeholder={'Enter your firstname...'} 
                    type='text'
                /> 
                {form.firstName === '' && <p className="text-red-500 text-sm -mt-[12px]">Firstname cannot contain special characters or numbers.</p>}
            <h3 className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Last Name *</h3>
                <input 
                    className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"
                    id="lastName" 
                    value={form.lastName} 
                    onChange={inputChange} 
                    placeholder={'Enter your lastname...'} 
                    type='text' 
                />
                {form.lastName === ''  && <p className="text-red-500 text-sm -mt-[12px]">Firstname cannot contain special characters or numbers.</p>}
            <h3 className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Username *</h3>
                <input
                    className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"
                    id="userName" 
                    value={form.userName} 
                    onChange={inputChange} 
                    placeholder={'Enter your username...'}
                    type='text'
                />  
                {form.userName === ''  && <p className="text-red-500 text-sm -mt-[12px]">"This username is already taken. Please choose another one."</p>}
            </div> 
            <div className="flex justify-center bg-[#D6D8DB] text-[#334155] w-[416px] h-[44px] border border-[#D6D8DB] rounded-lg">
                <button disabled={validate} onClick={()=> setCurrentStep(2)}>{"Continue 1/3 >"}</button> 
            </div> 
        </div> 
    );
}; 