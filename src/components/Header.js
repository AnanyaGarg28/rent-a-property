//  import react hooks to handle state, events and side-effects
import { useState } from 'react';

//  import react icons
import {RiHomeSmile2Fill, RiArrowDropDownLine} from 'react-icons/ri';

//  main component
const Header = () => {

    //  state variables
    const [selectButton, setSelectButton] = useState("rent");

    //  header component rendering to DOM
    return (
        <div className='px-4 pt-7 pb-6 tracking-tighter flex flex-row bg-white' >
            <h1 className="text-3xl text-indigo-900 font-Siliguri mr-5 self-center"> 
                <RiHomeSmile2Fill className="text-indigo-500 inline text-3xl rounded mr-2"/> Estatery
            </h1>
            <div className='flex flex-row text-xl self-center ml-10'>
                <button onClick={() => (setSelectButton("rent"))} className={`py-0.5 px-4 mx-3 font-medium rounded 
                ${ selectButton==="rent" ? "text-violet-900 text-opacity-80 bg-violet-100 bg-opacity-90" : ""}`}>Rent
                </button>

                <button onClick={() => (setSelectButton("buy"))} className={`py-0.5 px-4 mx-3 font-medium rounded 
                ${ selectButton==="buy" ? "text-violet-900 text-opacity-80 bg-violet-100 bg-opacity-90" : ""}`}>Buy
                </button>

                <button onClick={() => (setSelectButton("sell"))} className={`py-0.5 px-4 mx-3 font-medium rounded 
                ${ selectButton==="sell" ? "text-violet-900 text-opacity-80 bg-violet-100 bg-opacity-90" : ""}`}>Sell
                </button>

                <button onClick={() => (setSelectButton("manageProperty"))} className={`py-0.5 px-4 mx-3 font-medium rounded 
                ${selectButton==="manageProperty" ? "text-violet-900 text-opacity-90" : ""}`}>Manage Property <RiArrowDropDownLine 
                className={`${ selectButton==="manageProperty" ? "text-violet-900 text-opacity-80 bg-violet-100 bg-opacity-90" : ""} 
                inline text-3xl rounded-full`}/>
                </button>

                <button onClick={() => (setSelectButton("resources"))} className={`py-0.5 px-4 mx-3 font-medium rounded 
                ${selectButton==="resources" ? "text-violet-900 text-opacity-90" : ""}`}>Resources <RiArrowDropDownLine 
                className={`${ selectButton==="resources" ? "text-violet-900 text-opacity-80 bg-violet-100 bg-opacity-90" : ""} 
                inline text-3xl rounded-full`}/>
                </button>

            </div>
            <div className='grow text-right self-center mr-4'>
                <button className="text-indigo-600 text-base mx-1.5 border-2 border-solid rounded-md py-1.5 px-5">Login</button>
                <button className="text-slate-50 bg-indigo-500 text-base mx-1.5 border-2 border-solid border-indigo-500 rounded-md py-1.5 px-5">
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Header;