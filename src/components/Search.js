//  import react icons
import { RiArrowDropDownLine } from 'react-icons/ri';

//  main component
const Search = ({query,setQuery}) => {

    //  search component rendering to DOM
    return (
        <div className="flex flex-row font-Siliguri mx-36 mt-9 mb-9">
            <div className="text-4xl text-slate-900 font-bold grow self-center">Search properties to rent</div>
            <div className="border-2 border-violet-100 px-3 py-2 rounded-md bg-white self-center flex content-center">
                <input type="text" name="query" id="query" placeholder="Search with Search Bar" value={query} 
                onChange={(e)=>setQuery(e.target.value)} className="text-lg text-gray-500 focus:outline-0"/>
                <div className={`font-medium rounded -top-2`}>
                <RiArrowDropDownLine className={` inline-block text-3xl rounded-full text-violet-500 bg-violet-50`}/>
                </div>
            </div>
        </div>
    )
}

export default Search;