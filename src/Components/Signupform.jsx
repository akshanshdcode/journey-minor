import React from 'react';
import animation from "../assets/Sign up.gif";
import { RxAvatar } from "react-icons/rx";
import {Link,useNavigate} from "react-router-dom"
import { useState } from 'react'
function Signupform(props) {
   let [Name,SetName] = useState("");
   let [Email,SetEmail] = useState("");
   let [Role,SetRole] = useState("");
   let [Password,SetPassword] = useState("");
    let navigate = useNavigate();

   let AddUser = (event)=>{
    event.preventDefault();
    let new_user = {
        Name,
        Email,
        Password,
        Role
    }
    fetch("https://tame-gold-cormorant-robe.cyclic.app/signup",{
        method:"POST",
        body:JSON.stringify(new_user),
        headers:{
            "Content-Type":"application/json",
        }
    }).then((response)=>{
        alert("Signup Successful !")
        navigate("/login")
    }).catch((error)=>{
        alert("Failed to Signu");
        console.log(error);
    })

   }
    
    return (
      <div>
        <div className="max-h-full max-w-full py-3 md:py-40 mdflex-col lg:flex-row flex items-center justify-evenly">
          <form className="bg-green-600 rounded-3xl px-10 py-10 shadow-lg shadow-black" onSubmit={AddUser}>
            <div className="flex items-center justify-center">
              <RxAvatar className=" text-6xl text-green-600 bg-white rounded-full" />
            </div>

            <div className="flex flex-col md:flex-row">
            <div className="flex flex-col m-2 p-2 my-5 ">
              <label className="text-white font-bold pl-3 text-start">Enter Name: </label>
              <input
                variant="flushed"
                size="md"
                type="text"
                placeholder="name..."
                className="p-2 mt-3 px-4 focus:outline-none bg-white rounded-full"
                onChange={(event)=>{
                  SetName(event.target.value)
                }}
              />
            </div>

            <div className="flex flex-col m-2 p-2 my-5 ">
              <label className="text-white font-bold pl-3 text-start">Enter Email: </label>
              <input
                variant="flushed"
                size="md"
                type="email"
                placeholder="email..."
                className="p-2 mt-3 px-4 focus:outline-none bg-white rounded-full"
                onChange={(event)=>{
                  SetEmail(event.target.value)
                }}
              />
            </div>
            </div>

            <div className="flex flex-col mt-0 m-2 p-2 my-5 ">
              <label className="text-white font-bold pl-3 text-start">Enter Password: </label>
              <input
                variant="flushed"
                type="password"
                placeholder="password..."
                className="p-2 mt-3 px-4 focus:outline-none bg-white rounded-full"
                onChange={(event)=>{
                  SetPassword(event.target.value)
                }}
              />
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="item-center m-3 mb-1 text-white bg-green-800 rounded-full p-8 py-2 hover:scale-105 hover:shadow-lg shadow-white">SignUp</button>
            </div>
            <div className="flex items-center justify-center">
              <p className="mr-1 text-black">Already have an account?</p>
              <Link to="/login" className=" text-blue-900">
                Login
              </Link>
            </div>
          </form>
          <div className="hidden md:block">
            <img src={animation} alt="gif" />
          </div>
        </div>
      </div>
    );
}

export default Signupform;