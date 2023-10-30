import React from "react";
import Card1 from "./HomeCards/Card1.jsx";
import Card2 from "./HomeCards/Card2.jsx";
import Card3 from "./HomeCards/Card3.jsx";
import { BiSolidLeaf } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function HomeComp(props) {
  return (
    <div className="flex-col flex-full py-4 bg-green-700 pb-96 md:pb-2">
      <div className="flex justify-center items-center">
        <div className="rounded-full relative bg-white hover:scale-105 transition-transform shadow-md shadow-black hover:shadow-lg hover:shadow-black">
          <div className="absolute left-2 top-1.5 text-green-700">
            <BiSearch size={30} />
          </div>
          <input
            type="text"
            className="bg-white focus:outline-none rounded-full pl-10 py-2 pr-2 ml-1 w-64"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="mt-10 ml-11 m-8">
        <h1 className="text-white text-3xl font-semibold">
          Welcome to Your Travel Blog
        </h1>
        <div className="flex justify-center items-baseline">
          <h1 className="text-white text-3xl font-semibol hidden md:block">
            Lets start your
          </h1>
          <div className="flex text-white text-2xl font-semibold m-2 hidden md:flex">
            <a href="/">Journey</a>
            <BiSolidLeaf />
          </div>
        </div>
        <div className="mt-4">
          <Link
            to="/signup"
            className="bg-white text-black px-4 py-2 rounded-md border border-custom-borderWidth hover:bg-green-700 hover:text-white hover: hover:border-white"
          >
            Get Started
          </Link>
        </div>
        <p className="text-gray-300 mt-5">
          Explore the world, discover new destinations, and share your travel
          experiences with the world.
        </p>
      </div>
      <div className="m-4 hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
