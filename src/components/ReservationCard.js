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
        <div className="relative top-6 rounded-xl h-1/2 w-1/2 md:w-3/4 mx-auto bg-white bg-opacity-80 rounded-t-md flex flex-col">
            <div className="flex flex-col">
                <p className="mx-auto text-xl text-black">{props.reservation.helicopter}</p>
                <hr className="border-black h-1" />
                <div className="flex p-2">
                    <div className="w-3/4 flex flex-col justify-center text-black text-xs raleway">
                    <p className="w-full flex mb-5 items-center"><svg className="h-full my-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="black" width="20" height="20" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" /></svg> From: {props.reservation.date_start}</p>
                    <p className="w-full flex items-center"><svg className="h-full my-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="black" width="20" height="20" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" /></svg> To: {props.reservation.date_end}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div> 
    
    
);}

export default ReservationCard;
