//  import react icons
import { BsCalendar2CheckFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';

import Dropdown from "./Dropdown";

//  main component
const Filters = ({onFilter, location, setLocation, availableFrom, setAvailableFrom, rent, setRent, type, setType}) => {

    const [rentDropDown,setRentDropDown] = useState(false);
    const [typeDropDown,setTypeDropDown] = useState(false);

    //  filter component rendering to DOM
    return (
        <div className="bg-white rounded-md flex flex-rows divide-x divide-gray-300 align-center py-4 mx-36">
            <div className="self-start text-left px-6">
                <div className="text-gray-500">Location</div>
                <div>
                    <input type="text" value={location} onChange={(e)=> {setLocation(e.target.value)}} placeholder="Enter Location" 
                    className="font-Siliguri focus:outline-0 placeholder:text-black font-bold"/>
                </div>
            </div>
            <div className="self-start text-left px-6 grow">
                <div className="text-gray-500">When</div>
                <div className="flex flex-row">
                    <div className="relative grow">
                        <div className="absolute right-0 top-0 bg-violet-100 bg-opacity-90 p-1 rounded-t-full rounded-b-full px-2 self-center">
                        <BsCalendar2CheckFill className="pointer-events-auto rounded text-indigo-500 text-opacity-80 "/>
                        </div> 
                        <div className="absolute font-Siliguri top-0 left-0 font-bold">{availableFrom ? availableFrom : "Select Move-in Date"}</div>
                        <input id="calendar" type="date" value={availableFrom}
                        onChange={(e)=> {setAvailableFrom(e.target.value)}} 
                        className="opacity-0 w-full"/>
                    </div>                   
                </div>
            </div> 
            <div className="self-start text-left px-2">
                <div className="text-gray-500 w-full px-4">Price</div>
                <div className="flex flex-row px-4">
                    <div className="font-Siliguri font-bold w-56 self-center">{rent[0]===0 && rent[1]===Infinity ? "Select Range" : rent[1]===Infinity ? `Above $${rent[0]}` : `$${rent[0]}-$${rent[1]}`}</div>
                    <div onClick={()=>setRentDropDown(!rentDropDown)} className="font-medium rounded-full self-center bg-violet-50 text-violet-500 w-8 h-8">
                    <RiArrowDropDownLine className="w-8 h-8"/>
                    </div>
                </div>
                {
                    rentDropDown &&
                    <Dropdown selected={rent} setSelected={setRent} setDropDown={setRentDropDown} initial={{"0":0,"1":Infinity}} list={
                        [
                            {
                                value: {"0":0,"1":500},
                                display: "$0-$500"
                            },
                            {
                                value: {"0":500,"1":2500},
                                display: "$500-$2500"
                            },
                            {
                                value: {"0":2500,"1":4500},
                                display: "$2500-$4500"
                            },
                            {
                                value: {"0":4500,"1":Infinity},
                                display: "Above $4500"
                            }
                        ]
                    }/>
                }
            </div>
            <div className="self-start text-left px-2">
                <div className="text-gray-500 text-base w-full px-4">Property Type</div>
                <div onClick={()=>setTypeDropDown(!typeDropDown)} className="flex flex-row px-4">
                    <div className="font-Siliguri font-bold self-center w-48">{type ? type : "Select"}</div>
                    <div className="font-medium rounded-full self-center bg-violet-50 text-violet-500 w-8 h-8">
                    <RiArrowDropDownLine className="w-8 h-8"/>
                    </div>
                </div>
                {
                    typeDropDown &&
                    <Dropdown selected={type} setSelected={setType} setDropDown={setTypeDropDown} initial="" list={
                        [
                            {
                                value: "Apartments",
                                display: "Apartments"
                            },
                            {
                                value: "Houses",
                                display: "Houses"
                            },
                            {
                                value: "Villas",
                                display: "Villas"
                            }
                        ]
                    }/>
                }
            </div>
            <div className="self-start px-6">
                <button onClick={onFilter} className={`text-slate-50 bg-indigo-500 text-lg border-2 border-solid border-indigo-500 rounded-md py-2.5 px-8`}>
                Search</button>
            </div>
        </div>
    )
}

export default Filters;