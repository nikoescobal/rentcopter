import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import Logo from './Logo';
import NavImages from './NavImages';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const isAdmin = sessionStorage.getItem('admin');
  const normalMenu = ['Reservations', 'Add reservation'];
  const adminMenu = ['Reservations', 'Add reservation', 'Add helicopter', 'Remove Helicopter'];
  const getMenu = () => (isAdmin === 'true' ? adminMenu : normalMenu);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: '#1b1b13' }}
      className=" h-full text-white flex flex-col justify-center text-center md:hidden "
    >
      <List className="h-full flex flex-col justify-center">
        {getMenu().map((text) => (
          <div key={text} className="text-center border-b border-gray-500 border-opacity-70 w-full hover:shadow-yellow-400 hover:shadow-inner flex justify-evenly duration-500">
            <NavImages key={text} text={text} />
            <NavLink
              key={text}
              className="menu-items text-xl mb-2 transition-all p-5 w-3/4 "
              to={`/${text.toLowerCase().replace(' ', '-')}`}
            >
              {text}
            </NavLink>
          </div>

        ))}
        <Logo />
        <LogoutButton />
      </List>
    </Box>
  );

  return (
    <div className="sm:block md:hidden text-yellow-400 text-5xl absolute top-4 left-4 z-50">
      <FaBars onClick={toggleDrawer('left', true)} />
      <Drawer
        className="rounded-r-xl"
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}
