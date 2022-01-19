import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Drawer from './Drawer';
import LogoutButton from './LogoutButton';
import Logo from './Logo';

const Navbar = () => (
  <>
    <Drawer />
    <div
      id="navbar"
      className="
      w-2/6
      lg:w-1/6
      h-screen
      bg-slate-800
      justify-start
      text-center
      text-lg
      text-white
      pt-5
      left-0
      hidden
      md:block
      border-r
    border-gray-600
      shadow-2xl
    shadow-gray-400"
    >
      <List className="h-full flex flex-col justify-center">
        {['Reservations', 'Add reservation', 'Add Helicopter', 'Remove Helicopter'].map((text) => (
          <ListItem button key={text}>
            <NavLink className="text-center w-full menu-items text-xl mb-2" to={`/${text.toLowerCase().replace(' ', '-')}/`}>{text}</NavLink>
          </ListItem>
        ))}
        <Logo />
        <LogoutButton />
      </List>
    </div>
  </>

);

export default Navbar;
