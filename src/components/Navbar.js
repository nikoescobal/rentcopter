import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Drawer from './Drawer';

const Navbar = () => {
    return (
        <>
            <Drawer />
            <div className="w-72 h-screen bg-slate-800 justify-start text-center text-lg text-white pt-5 left-0 hidden md:block">
            
             <ul className="flex flex-col justify-center h-full">
                <li className="mt-2"><NavLink to = "/reservations">Reservations</NavLink></li>
                <li className="mt-2"><NavLink to = "/reservations/new">Reserve</NavLink></li>
                <li className="mt-2"><NavLink to = "/helicopters/new">AddHelicopter</NavLink></li>
            </ul>
        </div>
        </>
        
    )
}

export default Navbar
