import React from 'react';
import { CardActionArea } from '@mui/material';
import Money from './Money';

/* eslint-disable */

const HeliCard = (props) => (
    <div className='w-full sm:w-2/3 md:w-full mx-auto md:h-60 rounded-2xl flex' style={{
        backgroundImage: `url(${props.helicopter.img})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: 10,
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-start'}}>
        <CardActionArea className="h-3/4 border-b border-gray-600" style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start'
        }} >
            <div className="h-10 w-full bg-gray-900 bg-opacity-75 rounded-t-md">
                <h1 className="cool-title ml-4 my-auto text-left h-full">{props.helicopter.name}</h1>
            </div>
            
        </CardActionArea>
        <div className=" bg-gray-900 w-full h-1/4 flex flex-row-reverse justify-between bg-opacity-50">
                <button className="
                h-2/3
                sm:h-1/2 
                my-auto 
                rounded-full 
                mr-5
                text-sm
                bg-opacity-75
                w-24
                 font-bold 
                bg-yellow-600
                hover:bg-indigo-700
                transition-all
                text-white">RESERVE</button>
                <div className="ml-3 my-auto flex">
                    <Money />
                    <p className="ml-2 text-xs text-white " style={{fontFamily: 'Montserrat'}}>Price per day:<br/><span className="text-md font-bold">{props.helicopter.price_per_day}$</span></p>
                </div>
                
            </div>
            
    </div>
    
    
);

export default HeliCard;
