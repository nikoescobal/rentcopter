import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => (
  <div className="
    absolute
    top-0
    w-full
    border-b"
  >
    <NavLink className="text-center w-full" to="/">
      <img
        src="https://i.imgur.com/MKWxT1E.png"
        alt="logo"
        className="
            w-3/4
            m-auto"
      />
    </NavLink>
  </div>
);

export default Logo;
