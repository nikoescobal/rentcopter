import React from 'react';
import { useDispatch } from 'react-redux';
import { delete_heli } from '../logic/api';
import { fetchHelicopters, loadHelicopters } from '../redux/reducers/helicopters';
/* eslint-disable */
const LowerCardDelete = (props) => {
  const dispatch = useDispatch();
  return (
  <div className=" bg-gray-900 w-full h-1/4 flex flex-row-reverse justify-center bg-opacity-50">
    <button type="button" className="
                h-2/3
                sm:h-1/2
                my-auto
                rounded-full
                text-sm
                bg-opacity-75
                w-24
                 font-bold
                bg-red-600
                hover:bg-red-800
                transition-all
                text-white"
                onClick={async() => {
                  dispatch(loadHelicopters())
                  await(delete_heli(props.helicopter.id));
                  dispatch(fetchHelicopters());
                }}
    >
      DELETE
    </button>

  </div>
);
}

export default LowerCardDelete;
