import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => (
  <div className="h-screen w-screen">
    <div className="block p-6 rounded-lg shadow-lg bg-white w-3/4 md:w-1/2 lg:w-1/3 h-auto m-auto mt-48">
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register </h1>
      <form>
        <div className=" mb-4">
          <label htmlFor="user" className="inline-block text-gray-700 w-full">
            Username
            <br />
            <input type="text" id="user" placeholder="Enter username" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
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
          <label htmlFor="confirm-password" className="inline-block mb-2 text-gray-700 w-full">
            Confirm Password
            <input id="confirm-password" type="password" placeholder="Confirm previous password" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
          </label>
        </div>
        <button
          type="submit"
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
        >
          Register
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Already a member?
          <NavLink to="/login" className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out"> Log In</NavLink>
          <br />
        </p>
      </form>
    </div>
  </div>
);

export default Register;
