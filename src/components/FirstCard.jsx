export const Card1 = ({
    setCurrentStep,
    inputValue, 
    inputChange,
    onClick,
    firstName,
    lastName,
    userName, 
}) => {

    const validate =()=>{
        if (firstName === '' && lastName === '' && userName === '') {
            return false;
        }; 
        return true;
    };
    
    return( 
        <div className="bg-[#FFFFFF] text-black rounded-lg w-[480px] h-[655px] flex flex-col items-start">
            <div className="p-[32px]">
                <div className="w-[416px] h-[129px] flex flex-col justify-center">
                    <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
                    <p className="font-semibold text-lg">Join Us! 😎</p> 
                    <p className="font-lg text-[#8E8E8E]">Please provide all current information accurately.</p>
                </div>
                <div className="w-416px] h-[270px] flex flex-col justify-between">
                    <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">First Name *</p> 
                    <input 
                        className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"
                        id="firstName" 
                        value={inputValue}  
                        onChange={inputChange}  
                        placeholder={'Enter your firstname...'} 
                        type='text'
                    />
                    <p className="text-red-700 text-[14px]">{firstName}</p>

                    <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Last Name *</p>
                    <input 
                        className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"
                        id="lastName" 
                        value={inputValue} 
                        onChange={inputChange} 
                        placeholder={'Enter your lastname...'} 
                        type='text' 
                    />
                    <p className="text-red-700 text-[14px]">{lastName}</p>

                    <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Username *</p> 
                    <input
                        className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"
                        id="userName" 
                        value={inputValue}  
                        onChange={inputChange} 
                        placeholder={'Enter your username...'}
                        type='text'
                    />  
                    <p className="text-red-700 text-[14px]">{userName}</p>
                </div> 
                <div className="w-[416px] h-[44px] flex flex-col mt-[140px]">
                    <button
                        className="flex justify-center items-center bg-[#D6D8DB] text-[#334155] w-[416px] h-[44px] border border-[#D6D8DB] rounded-lg"
                        disabled={validate()} 
                        onClick={onClick}>
                        {"Continue 1/3 >"}
                    </button> 
                </div>
            </div>
        </div> 
    );
}; 