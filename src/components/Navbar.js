import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from './Drawer';

const Navbar = () => (
  <>
    <Drawer />
    <div className="w-72 h-screen bg-slate-800 justify-start text-center text-lg text-white pt-5 left-0 hidden md:block">

      <List className="h-full flex flex-col justify-center">
        {['Reservations', 'Add reservation', 'Add Helicopter', 'Remove Helicopter'].map((text) => (
          <ListItem button key={text}>
            <NavLink className="text-center w-full " to={`/${text.toLowerCase().replace(' ', '-')}/`}><ListItemText primary={text} /></NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  </>

);

export default Navbar;
