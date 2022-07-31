//  import react icons
import {FaRegHeart} from 'react-icons/fa';
import {IoBedOutline} from 'react-icons/io5';
import {GiBathtub} from 'react-icons/gi';
import {TbSquareRotated} from 'react-icons/tb';
import {HiSparkles} from 'react-icons/hi';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fa-bath} from '@fortawesome/free-regular-svg-icons';

//  main component
const PropertyInfo = ({property}) => {

    //  filter component rendering to DOM
    return (
        <div className='inline-block rounded-lg w-full shadow-md relative overflow-hidden'>
            <div className='relative'>
                <div className='h-56 overflow-hidden'><img src={property.image} className="w-full" alt="House"></img></div>
                {property.popular && 
                <div className='absolute -left-0 -bottom-4 z-10 overflow-visible text-slate-50 bg-indigo-500 text-base 
                w-28 mr-1.5 border-2 border-solid border-indigo-500 rounded-md py-1 pl-2 pr-0'>
                <HiSparkles className='inline font-light'/> POPULAR</div>}
            </div>

            <div className='px-4 bg-white'>
                <div className='flex flex-row pt-6'>
                    <div className='text-indigo-500 text-xl font-bold font-Siliguri self-center'>${`${property.rent}`}</div>
                    <div className='self-center grow text-slate-600'>/month</div>                    
                    <div className={`outline-1 rounded-full self-center border border-gray-300 text-indigo-600 pb-2 pl-2 pr-2 pt-1`}>
                        <FaRegHeart className='inline text-lg' /></div>
                </div>
                <div className='font-bold font-Siliguri text-2xl text-slate-900 mt-2'>{property.name}</div>
                <div className='text-slate-600 mt-1'>{property.address}</div>
                <div className='border-gray-300 border-t mt-2 mb-2'></div>
                <div className='flex flex-row pb-4 rounded-b-md '>
                    <div className='text-slate-600 grow'><IoBedOutline className='inline text-indigo-700  '/> {property.beds} Beds
                    </div>
                    <div className='text-slate-600 grow'> <GiBathtub className='inline text-indigo-600' /> {property.bathrooms} Bathrooms
                    </div>
                    <div className='text-slate-600 self-center'><TbSquareRotated className='inline text-indigo-600' /> {property.length}x{property.breadth}
                    </div>
                    <div className='text-slate-600 text-sm self-center'>m</div>
                    <div className='text-slate-600 text-sm'>2</div>
                </div>
            </div>
        </div>
    )
}

export default PropertyInfo;