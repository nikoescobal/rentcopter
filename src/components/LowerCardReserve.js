import React from 'react';
import Money from './Money';
/* eslint-disable */

const LowerCardReserve = (props) => (
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
                text-white"
    >
      RESERVE
    </button>
    <div className="ml-3 my-auto flex">
      <Money />
      <p className="ml-2 text-xs text-white " style={{ fontFamily: 'Montserrat' }}>
        Price per day:
        <br />
        <span className="text-md font-bold">
          {props.helicopter.price_per_day}
          $
        </span>
      </p>
    </div>

  </div>
);

export default LowerCardReserve;
