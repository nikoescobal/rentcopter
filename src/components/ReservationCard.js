import React from 'react';
import { useSelector } from 'react-redux';

/* eslint-disable */

const ReservationCard = (props) => {
    const url = useSelector((state) => state.helicopters.helicopters_arr.filter(heli => heli.name == props.reservation.vip));
    return(
    <div className='w-full h-3/4 sm:w-2/3 md:w-full mx-auto md:h-60 rounded-2xl flex hover:shadow-2xl hover:shadow-gray-600 transition-all' style={{
        backgroundImage: `url(${url[0].img})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: 10,
        display: 'flex',
        flexFlow: 'column-reverse'}}>
        <div className="relative top-6 rounded-xl h-1/2 w-1/2 mx-auto bg-gray-400 bg-opacity-80 rounded-t-md flex flex-col">
            <div className="flex">
                <p className="ml-4 text-xl text-black">{props.reservation.helicopter}</p>
            </div>
        </div>
        
    </div> 
    
    
);}

export default ReservationCard;
