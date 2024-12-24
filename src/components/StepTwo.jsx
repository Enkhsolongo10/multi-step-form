export const Card2 = ({
    onChange,
    inputValue,
    onClickNext,
    onClickBack,
    errors,
    value,
    borderColor4,
    borderColor5,
    borderColor6,
    borderColor7,
}) => { 

    return(
        <div className="bg-[#FFFFFF] text-black rounded-lg w-[480px] h-[655px] flex flex-col items-start">
        <div className="p-[32px]">
            <div className="w-[416px] h-[129px] flex flex-col justify-center">
                <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
                <p className="font-semibold text-lg">Join Us! 😎</p> 
                <p className="font-lg text-[#8E8E8E]">Please provide all current information accurately.</p>
            </div> 



            <div className="w-416px] h-[350px] flex flex-col justify-between">


                <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Email *</p> 
                <input 
                className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border ${borderColor4} border-solid flex gap-3 bg-white pl-2 mb-4`}
                    id="firstName" 
                    value={inputValue.email}  
                    onChange={onChange}  
                    placeholder={'Enter your firstname...'} 
                    type='text'
                />
                <p className="text-red-700 text-[14px]">{errors.email}</p>



                <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Phone number *</p>
                <input 
                    className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border ${borderColor5} border-solid flex gap-3 bg-white pl-2 mb-4`}
                    id="lastName" 
                    value={inputValue.phoneNumber} 
                    onChange={onChange} 
                    placeholder={'Enter your lastname...'} 
                    type='text' 
                />
                <p className="text-red-700 text-[14px]">{errors.phoneNumber}</p>



                <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Password *</p> 
                <input
                    className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border ${borderColor6} border-solid flex gap-3 bg-white pl-2 mb-4`}
                    id="userName" 
                    value={inputValue.password}  
                    onChange={onChange} 
                    placeholder={'Enter your username...'}
                    type='text'
                />  
                <p className="text-red-700 text-[14px]">{errors.password}</p>



                <p className="text-sm font-semibold text-[#8E8E8E] mt-[10px]">Confirm Password *</p> 
                <input
                    className={`text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border ${borderColor7} border-solid flex gap-3 bg-white pl-2 mb-4`}
                    id="userName" 
                    value={inputValue.confirmPassword}  
                    onChange={onChange} 
                    placeholder={'Enter your username...'}
                    type='text'
                />  
                <p className="text-red-700 text-[14px]">{errors.confirmPassword}</p>


            </div> 



            <div className="w-[416px] h-[44px] flex mt-[65px] justify-between">
                <button 
                    className="bg-white text-black w-[128px] h-[44px] border border-[#D6D8DB] rounded-lg" 
                    onClick={onClickBack}>
                    {"< Back"}
                </button> 
                <button
                    className="flex justify-center items-center bg-[#D6D8DB] text-[#334155] w-[280px] h-[44px] border border-[#D6D8DB] rounded-lg"
                    disabled={false} 
                    onClick={onClickNext}> 
                    {"Continue 1/3 >"}
                </button>
            </div>
        </div>
    </div> 
    );
};