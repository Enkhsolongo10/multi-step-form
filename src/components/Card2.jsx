import { TextInput } from "./Input";
export const Card2 = ({ setCurrentStep, onChange, form, type }) => { 
    return(
    <div className="pl-[30px] pt-[30px] bg-[#FFFFFF] text-black rounded-lg w-[480px] h-[655px] flex flex-col items-start">
        <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
        <h1 className="font-semibold text-lg">Join Us! 😎</h1> 
        <h2 className="font-lg text-[#8E8E8E]">Please prov    ide all current information accurately.</h2>
        <div className="mt-[20px]">
            <h3 className="text-sm font-semibold text-[#8E8E8E]">Email *</h3>
                <TextInput 
                    id="email" 
                    value={form.email} 
                    onChange={onChange}  
                    placeholder={'Enter your email...'} 
                    type='text'
                />   
            <h3 className="text-sm font-semibold text-[#8E8E8E]">Phone number *</h3>
                <TextInput 
                    id="phoneNumber"
                    value={form.phoneNumber} 
                    onChange={onChange}  
                    placeholder={'Enter your phone number...'} 
                    type='number'
                /> 
            <h3 className="text-sm font-semibold text-[#8E8E8E]">Password *</h3>
                <TextInput
                    id="password"
                    value={form.password} 
                    onChange={onChange}  
                    placeholder={'Enter your password...'} 
                    type='password'
                />
            <h3 className="text-sm font-semibold text-[#8E8E8E]">Confirm Password *</h3>
                <TextInput
                    id="confirmPassword"
                    value={form.confirmPassword} 
                    onChange={onChange}  
                    placeholder={'Repeat your password...'} 
                    type='password'
                /> 
        </div> 
        <div className="flex justify-center gap-2 mt-[90px]">
            <button className="bg-white text-black w-[128px] h-[44px] border border-[#D6D8DB] rounded-lg" onClick={()=> setCurrentStep(1)}>{"< Back"}</button> 
            <button className="bg-[#D6D8DB]  text-[#334155] w-[280px] h-[44px] border border-[#D6D8DB] rounded-lg" onClick={()=> setCurrentStep(3)}>{"Continue 2/3 >"}</button> 
        </div> 
    </div> 
    );
};