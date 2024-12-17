export const StepThree = ({ setCurrentStep }) => {
    return(
        <div className="">
            <b>Hello 3nd</b>
            <div className="flex justify-center bg-[#D6D8DB] text-[#A9ACAF] w-[416px] h-[44px] border border-[#D6D8DB] rounded-lg">
                <button onClick={()=> setCurrentStep(1)}>Continue 1/3</button> 
            </div>
        </div>
    );
}; 