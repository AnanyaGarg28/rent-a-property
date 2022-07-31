//  main component
const Dropdown = ({ selected, setSelected, setDropDown, list, initial }) => {
    return (
        <div className="relative z-40">
            <div className="absolute top-0 rounded-md text-gray-500 font-Siliguri p-4 text-md w-full mt-1 bg-white bg-opacity-90 shadow-xl ">
                <div className={`my-2 cursor-pointer hover:text-indigo-500 ${JSON.stringify({obj:selected})===JSON.stringify({obj:initial}) && "text-indigo-500"}`}
                    onClick={()=> {setSelected(initial); setDropDown(false);}}>
                    Select
                </div>
                {list.map((item) => (
                    <div className={`my-2 cursor-pointer hover:text-indigo-500 ${JSON.stringify({obj:selected})===JSON.stringify({obj:item.value}) && "text-indigo-500"}`}
                    onClick={()=> {setSelected(item.value); setDropDown(false);}}>
                    {item.display}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;