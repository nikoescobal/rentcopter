import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import { v4 as uuidv4 } from 'uuid';
import Drawer from './Drawer';
import LogoutButton from './LogoutButton';
import Logo from './Logo';
import NavImages from './NavImages';
import { downTop } from '../animations';
/* eslint-disable */

const Navbar = () => {
  const navigate = useNavigate();
  const { hash } = window.location;
  const isAdmin = sessionStorage.getItem('admin');
  const normalMenu = ['Reservations', 'Add reservation'];
  const adminMenu = ['Reservations', 'Add reservation', 'Add helicopter', 'Remove Helicopter'];
  const getMenu = () => isAdmin=='true' ? adminMenu : normalMenu;
  return (
  <div className={`md:w-1/4 lg:w-1/5 block ${hash === "#/login" || hash === "#/register" ? "hidden" : null}`}>
    <Drawer />
    <div
      id="navbar"
      className={`
      md:w-1/4
      lg:w-1/5
      fixed
      z-50
      hidden
      md:block
      rounded-r-2xl
      h-screen
      bg-slate-800
      justify-start
      text-center
      text-lg
      pt-5
      left-0
      border-r
    border-gray-600
      shadow-2xl
    shadow-gray-600`}
    >
      <List className="h-full flex flex-col justify-center">
        {getMenu().map((text) => (
          <div key={uuidv4()} className="text-center border-b border-gray-500 border-opacity-70 w-full hover:shadow-yellow-400 hover:shadow-inner flex justify-evenly transition-all delay-75">
            <NavImages key={uuidv4()} text={text} />
            <span
              key={uuidv4()}
              onClick={(e) => {
                e.preventDefault();
                if ( hash !== `#/`+text.toLowerCase().replace(' ', '-')) {
                  downTop();
                  setTimeout(() => {
                    navigate(`/${text.toLowerCase().replace(' ', '-')}`)
                  }, 250);
                }
                
              }}
              className="menu-items text-xl mb-2 transition-all p-5 w-3/4 cursor-pointer "
              activestyle={{ color: 'red' }}
              to={`/${text.toLowerCase().replace(' ', '-')}`}
            >
              {text}
            </span>
          </div>

        ))}
        <Logo />
        <LogoutButton />
      </List>
    </div>
  </div>

);}

export default Navbar;
