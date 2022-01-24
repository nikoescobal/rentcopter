import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { topDown } from '../animations';
import { login } from '../logic/api';

const LogIn = () => {
  useEffect(() => {
    topDown();
  }, []);
  sessionStorage.getItem('token') !== null ? window.location = '/' : null;
  return (
    <div className="h-screen w-screen">
      <div id="main" className="opacity-0 block p-6 rounded-lg shadow-lg bg-white w-3/4 md:w-1/2 lg:w-1/3 h-1/2 m-auto mt-48 transition-all duration-1000 -translate-y-full">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log In </h1>
        <form id="form">
          <div className="form-group">
            <br />
            <input type="email" id="email" placeholder="Enter email address" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
          </div>
          <div className="form-group mb-6">
            <input id="password" type="password" placeholder="Enter password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check text-center w-full flex justify-center">
              <input id="remember" type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
              <label htmlFor="remember" className="form-check-label inline-block text-gray-800 overf">Remember me</label>
            </div>
          </div>
          <button
            type="button"
            className="w-full
        px-6
        py-2.5
        bg-indigo-800
        text-white
        font-medium
        text-m
        leading-tight
        rounded-full
        shadow-md
        hover:bg-purple-700 hover:shadow-lg
        focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-purple-800 active:shadow-lg
        transition
        duration-150
        ease-in-out
        cursor-pointer"
            onClick={(e) => {
              e.preventDefault;
              const form = document.getElementById('form');
              login(form.email.value, form.password.value);
            }}
          >
            Log In
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?
            <NavLink to="/register/" className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out"> Register</NavLink>
            <br />
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
