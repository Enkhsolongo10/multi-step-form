"use client"
import { validation } from '@/utils/validation'
import { FormInput } from './Input'
import React from 'react'
export const StepOne = ({
    setCurrentStep,
    onChange,
    form,
    error,
    setError,
}) => {   
    return( 
        <div className="bg-[#FFFFFF] text-black rounded-lg w-[480px] min-h-[655px] flex flex-col items-start">
            <div className="p-[32px]">
                <div className="w-[416px] h-[129px] flex flex-col justify-center">
                    <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
                    <p className="font-semibold text-lg">Join Us! 😎</p> 
                    <p className="font-lg text-[#8E8E8E]">Please provide all current information accurately.</p>
                </div>
                <div className="w-416px] flex flex-col justify-between">
                    <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">First Name *</p> 
                    <FormInput
                        className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4`}
                        id="firstName" 
                        value={form.firstName}  
                        onChange={onChange}  
                        placeholder={'Enter your firstname...'} 
                        type='text'
                        error={error.firstName}
                    /> 
                    <p className="text-red-700 text-[14px]">{error.firstName}</p>

                    <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Last Name *</p>
                    <FormInput
                        className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4`}
                        id="lastName" 
                        value={form.lastName}  
                        onChange={onChange}  
                        placeholder={'Enter your lastname...'} 
                        type='text'
                        error={error.lastName}
                    /> 
                    <p className="text-red-700 text-[14px]">{error.lastName}</p>

                    <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Username *</p> 
                    <FormInput
                        className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4`}
                        id="userName" 
                        value={form.userName}  
                        onChange={onChange}  
                        placeholder={'Enter your username...'} 
                        type='text'
                        error={error.userName}
                    /> 
                    <p className="text-red-700 text-[14px]">{error.userName}</p>
                </div> 
                <div className="w-[416px] h-[44px] flex flex-col mt-[140px] bg-[#D6D8DB] justify-center items-center border border-[#D6D8DB] rounded-lg">
                    <button 
                        onClick={() => {
                            validation(form, newErrors)

                            if (isValid) {
                                setCurrentStep(2);
                            }
                        }}
                    >Continue 1/3</button>
                </div>
            </div>
        </div>
    )
}






// "use client"
// import React from 'react'
// export const StepOne = ({
//     onChange,
//     onClickNext,
//     inputValue,
//     errors,
//     borderColor1,
//     borderColor2,
//     borderColor3, 
// }) => {   
//     return( 
//         <div className="bg-[#FFFFFF] text-black rounded-lg w-[480px] min-h-[655px] flex flex-col items-start">
//             <div className="p-[32px]">
                // <div className="w-[416px] h-[129px] flex flex-col justify-center">
                //     <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
                //     <p className="font-semibold text-lg">Join Us! 😎</p> 
                //     <p className="font-lg text-[#8E8E8E]">Please provide all current information accurately.</p>
                // </div>
//                 <div className="w-416px] flex flex-col justify-between">
//                     <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">First Name *</p> 
//                     <input 
//                         className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] ${borderColor1} border border-solid flex gap-3 bg-white pl-2 mb-4`}
//                         id="firstName" 
//                         value={inputValue.firstName}  
//                         onChange={onChange}  
//                         placeholder={'Enter your firstname...'} 
//                         type='text'
//                     /> 
//                     <p className="text-red-700 text-[14px]">{errors.firstName}</p>

//                     <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Last Name *</p>
//                     <input 
//                         className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] ${borderColor2} border border-solid flex gap-3 bg-white pl-2 mb-4`}
//                         id="lastName" 
//                         value={inputValue.lastName} 
//                         onChange={onChange} 
//                         placeholder={'Enter your lastname...'} 
//                         type='text' 
//                     />
//                     <p className="text-red-700 text-[14px]">{errors.lastName}</p>

//                     <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Username *</p> 
//                     <input
//                         className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] ${borderColor3} border border-solid flex gap-3 bg-white pl-2 mb-4`}
//                         id="userName" 
//                         value={inputValue.userName}  
//                         onChange={onChange} 
//                         placeholder={'Enter your username...'}
//                         type='text'
//                     />  
//                     <p className="text-red-700 text-[14px]">{errors.userName}</p>
//                 </div> 
//                 <div className="w-[416px] h-[44px] flex flex-col mt-[140px]">
//                     <button
//                         className="flex justify-center items-center bg-[#D6D8DB] text-[#334155] w-[416px] h-[44px] border border-[#D6D8DB] rounded-lg"
                         
//                         onClick={onClickNext}>
//                         {"Continue 1/3 >"}
//                     </button> 
//                 </div>
//             </div>
//         </div> 
//     )
// }

// //  propsoor function useState ali n ch ywj bolhimu? yess..
// //  gadnaas hergelj bga ymaa propsoor oruulj irsen tgd deer butsaagaad ingej ashiglasan shu gd export hijigamu? yess..