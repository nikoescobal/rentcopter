import React from 'react';
import { register } from '../logic/api';
import { topDown, downTop } from '../animations';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { popup } from '../logic/popup';

const Register = () => {
  let regexEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;
  const navigate = useNavigate();
  useEffect(() => {
    topDown();
  }, []);
  sessionStorage.getItem('token') !== null ? window.location = '/' : null;
  return (
    <div className="h-screen w-screen">
      <div id="main" className="opacity-0 -translate-y-full block p-6 rounded-lg shadow-lg bg-white w-3/4 md:w-1/2 lg:w-1/3 h-auto m-auto mt-32 transition-all duration-1000">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register </h1>
        <form id="form">
          <div className=" mb-4">
            <label htmlFor="user" className="inline-block text-gray-700 w-full">
              Username
              <br />
              <input type="text" id="name" placeholder="Enter username" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <div className=" mb-4">
            <label htmlFor="email" className="inline-block text-gray-700 w-full">
              Email
              <br />
              <input type="email" id="email" placeholder="Enter email address" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <div className=" mb-4">
            <label htmlFor="password" className="inline-block mb-2 text-gray-700 w-full">
              Password
              <input id="password" type="password" placeholder="Enter password" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <div className=" mb-6">
            <label htmlFor="confirmPassword" className="inline-block mb-2 text-gray-700 w-full">
              Confirm Password
              <input id="confirmPassword" type="password" placeholder="Confirm previous password" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
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
              if(form.password.value == form.confirmPassword.value && form.email.value.match(regexEmail)) {
                register(form.name.value, form.email.value, form.password.value);
              }
              else {
                popup('Invalid input!','red');
              }
              
            }}
          >
            Register
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Already a member?
            <button type="button" onClick={()=> {downTop();
                  setTimeout(() => {
                    navigate('/login')
                  }, 700);}} className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out">Log In</button>
            <br />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
