import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidLeaf } from "react-icons/bi";
function Navbar(props) {

    let islogged = localStorage.getItem("islogged");

    return (
        <div className="flex justify-between items-center px-4 py-2 ">
      {/* logo */}
      <div className="flex text-black text-xl font-semibold m-2">
        <a href="/">Journey</a>
        <BiSolidLeaf />
      </div>

      {/* navbar div */}
      <div className="flex flex-grow space-x-4 justify-center hidden md:flex">
        {/* home page div */}
        <div className="flex rounded-md border-black">
          <Link
            to="/"
            className="text-custom-size rounded-md text-green-700 hover:text-white hover:bg-green-700 p-2"
          >
            Home
          </Link>
        </div>

        {/* Blogs page button div */}
        <div className="flex rounded-md border-black">
          <Link
            to="/blogs"
            className="text-custom-size rounded-md text-green-700 hover:text-white hover:bg-green-700 p-2"
          >
            Blogs
          </Link>
        </div>

        {/* Writer's Corner button div */}
        <div className="flex rounded-md border-black">
          <Link
            to="/corner"
            className="text-custom-size rounded-md text-green-700 hover:text-white hover:bg-green-700 p-2"
          >
            Writer's Corner
          </Link>
        </div>
        {/* Login button div */}
        {!islogged && (
          <Link to="/login">
            <button className="flex justify-end items-center hidden md:flex p-1 px-2 text-white bg-green-700 border border-1 border-green-700 rounded-md hover:bg-white hover:text-green-700">
              Login
            </button>
          </Link>
        )}
    </div>
    </div>
    );
}

export default Navbar;