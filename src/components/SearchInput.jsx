export const SearchInput = ({ search, onChangeText , onPressEnter}) => {
    return (
        <div className="text-black w-[416px] h-[44px] rounded-lg border-[#0CA5E9] border border-solid flex gap-3 bg-white pl-2 mb-4"> 
            <input 
                className="w-full outline-none mr-1"
                type="text"
                placeholder="Placeholder"
                // value={search}
                // onChange={onChangeText} 
                // onKeyDown={onPressEnter}
            />
        </div>
    );
};