export const Card3 = ({
    setCurrentStep, 
    inputValue,
    inputChange,
    dateOfBirth,
    profileImage,
}) => { 
    return(
        <div className="p-[32px] bg-[#FFFFFF] text-black rounded-lg w-[480px] h-[655px] flex flex-col justify-between">
            <img className="w-[60px] h-[60px]" src="/logo.svg" alt="mainLogo"></img>
            <h1 className="font-semibold text-lg -mt-[120px]">Join Us! 😎</h1> 
            <h2 className="font-lg text-[#8E8E8E] -mt-[125px]">Please provide all current information accurately.</h2>
            <div className="-mt-[100px]">
                <h3 className="text-sm font-semibold text-[#8E8E8E] mb-[5px]">Date of birth *</h3>
                    <TextInput 
                        id="dateOfBirth" 
                        value={form.dateOfBirth} 
                        onChange={onChange} 
                        placeholder={'03/27/1997'} 
                        type='date' 
                    />   
                <h3 className="text-sm font-semibold text-[#8E8E8E] mb-[5px]">Profile image *</h3>
                    <div className="w-[416px] h-[180px] border border-[#8E8E8E] flex flex-col items-center justify-center rounded-lg">
                        <img className="w-[38px] h-[38px]" src="image.png" alt="logo"></img>
                        <p>Add Image</p>
                    </div>
            </div>
            <div className="flex justify-center gap-2">
            <button className="bg-white text-black w-[128px] h-[44px] border border-[#D6D8DB] rounded-lg" onClick={()=> setCurrentStep(2)}>{"< Back"}</button> 
            <button className="bg-black text-white w-[280px] h-[44px] border border-[#D6D8DB] rounded-lg" onClick={()=> setCurrentStep(4)}>{"Submit 3/3 >"}</button> 
            </div>
        </div>
    );
}; 