export const Card3 = ({
    inputValue,
    inputChange,
    dateOfBirth,
    onClickBack,
    onClickNext,
}) => { 
    return(
        <div className="p-[32px] bg-[#FFFFFF] text-black rounded-lg w-[480px] h-[655px] flex flex-col justify-between">
            <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
            <p className="font-semibold text-lg -mt-[120px]">Join Us! 😎</p> 
            <p className="font-lg text-[#8E8E8E] -mt-[125px]">Please provide all current information accurately.</p>
            <div className="-mt-[100px]">
                <p className="text-sm font-semibold text-[#8E8E8E] mb-[5px]">Date of birth *</p>
                <input 
                    className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"
                    id="firstName" 
                    value={inputValue}  
                    onChange={inputChange}  
                    placeholder={'Enter your firstname...'} 
                    type='text'
                />
                <p className="text-red-700 text-[14px]">{dateOfBirth}</p>

                <p className="text-sm font-semibold text-[#8E8E8E] mb-[5px]">Profile image *</p>
                    <div className="w-[416px] h-[180px] border border-[#8E8E8E] flex flex-col items-center justify-center rounded-lg">
                        <img className="w-[38px] h-[38px]" src="image.png" alt="logo"></img>
                        <p>Add Image</p>
                    </div>
            </div>
            <div className="flex justify-center gap-2">
            <button className="bg-white text-black w-[128px] h-[44px] border border-[#D6D8DB] rounded-lg" onClick={onClickBack}>{"< Back"}</button> 
            <button className="bg-black text-white w-[280px] h-[44px] border border-[#D6D8DB] rounded-lg" onClick={onClickNext}>{"Submit 3/3 >"}</button> 
            </div>
        </div>
    );
};