export const TextInput = ({ value, onChange , placeholder, type, id }) => {
    return (
        <div className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"> 
            <input 
                required
                className="w-full outline-none mr-1"
                id={id} 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
            />
        </div> 
    );
};