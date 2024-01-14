import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center  p-5  bg-red-400 border-t-4 border-blue-800">
      <div className="items-center mr-5">
        <span className="text-white text-2xl font-bold">KALVIUM</span>
      </div>
      <div className="flex flex-1 items-center justify-between ">
        <div className="text-sm flex flex-wrap">
          <a href=" " className="mr-4 xl:text-lg font-semibold text-gray-600">About us</a>
          <a href=" " className="mr-4 xl:text-lg font-semibold text-gray-600">Contacts</a>
          <a href=" " className="mr-4 xl:text-lg font-semibold text-gray-600">Courses</a>
        </div>
        <div>
          <button href=" " className="text-white border-white border rounded p-1 px-5">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;