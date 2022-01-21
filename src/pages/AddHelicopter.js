import { useEffect } from 'react';
import { topDown } from '../animations';

const AddHelicopter = () => {
  useEffect(() => {
    topDown();
  }, []);
  return (
    <div id="main" className="p-4 md:p-24 flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 h-screen transition-all opacity-0 -translate-y-full origin-top ease-out duration-500">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-3/4 lg:w-2/3 h-auto m-auto mt-20">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">New helicopter </h1>
        <form>
          <div className=" mb-4">
            <label htmlFor="user" className="inline-block text-gray-700 w-full">
              Name
              <br />
              <input type="text" id="user" placeholder="Enter username" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <div className=" mb-4">
            <label htmlFor="cost" className="inline-block text-gray-700 w-full">
              Cost per day
              <br />
              <input type="number" id="cost" placeholder="Enter cost" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <div className=" mb-4">
            <label htmlFor="capacity" className="inline-block mb-2 text-gray-700 w-full">
              Capacity
              <input id="capacity" type="number" placeholder="Enter max number of passengers" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <div className=" mb-6">
            <label htmlFor="confirm-password" className="inline-block mb-2 text-gray-700 w-full">
              Picture
              <input id="confirm-password" type="password" placeholder="Idk how but we'll upload it" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
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
        </form>
      </div>
    </div>
  );
};

export default AddHelicopter;