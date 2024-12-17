import { SearchInput } from "./SearchInput";

export const StepOne = ({ setCurrentStep }) => {
    return(
        <div className="pl-[30px] pt-[30px] bg-[#FFFFFF] text-black rounded-lg w-[480px] h-[655px] flex flex-col items-start">
            <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
            <h1 className="font-semibold text-lg">Join Us! 😎</h1> 
            <h2 className="font-lg text-[#8E8E8E]">Please provide all current information accurately.</h2>
            <div className="mt-[20px]">
                <h3 className="text-sm font-semibold text-[#8E8E8E]">First Name *</h3>
                <SearchInput/>
                <h3 className="text-sm font-semibold text-[#8E8E8E]">Last Name *</h3>
                <SearchInput/>
                <h3 className="text-sm font-semibold text-[#8E8E8E]">Username *</h3>
                <SearchInput/>
            </div>
            <div className="flex justify-center bg-[#D6D8DB] text-[#334155] w-[416px] h-[44px] border border-[#D6D8DB] rounded-lg mt-[170px]">
                <button onClick={()=> setCurrentStep(2)}>Continue 1/3</button> 
            </div> 
        </div>
    );
};