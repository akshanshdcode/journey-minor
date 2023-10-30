import React from 'react';
import animation from "../assets/Tablet login.gif";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import {Link,useNavigate} from "react-router-dom"
import { useState } from 'react'
function LoginForm(props) {
    let username;
    let [Email,SetEmail] = useState("");
    let [Password,SetPassword] = useState("");
    let navigate = useNavigate();
    let ValidateUser=(event)=>{
        event.preventDefault();
        let user = {
            Email,
            Password
        }
        fetch("https://tame-gold-cormorant-robe.cyclic.app/login",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                
                "Content-Type":"application/json",
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            if(response.Message === "Login Successful !"){
                
                localStorage.setItem("Current_User",JSON.stringify(response.user));
                localStorage.setItem("UserName",response.user.Name);
                localStorage.setItem("User_role",response.user.Role);
                localStorage.setItem("token",response.token);
                localStorage.setItem("islogged",true)
                alert(response.Message);
                navigate("/blogs");
            }
            else{
                alert("Invalid Credentials");
            }
        }).catch((error)=>{
            alert("Failed to login !");
            console.log(error);
        })
    }
    return (
        <div>

      <div className="max-h-full max-w-full py-48 mdflex-col lg:flex-row flex items-center justify-evenly">
        <form className="bg-green-600 rounded-3xl px-10 py-10 shadow-lg shadow-black" onSubmit={ValidateUser}>
          
          <div className="flex items-center justify-center">
            <RxAvatar className=" text-6xl text-green-600 bg-white rounded-full" />
          </div>

          <div className="flex items-center justify-evenly m-2 p-2 my-5 bg-white rounded-full">
            <input
              variant="flushed"
              type="email"
              placeholder="email..."
              size="md"
              className="ml-2 focus:outline-none"
              onChange={(event)=>{
                SetEmail(event.target.value)
              }}
            />
            <div>
              <IoMailOutline className="text-3xl ml-2 text-green-600" />
            </div>
          </div>
          <div className="flex items-center justify-evenly m-2 p-2 bg-white rounded-full">
            <input
              variant="flushed"
              size="md"
              type="password"
              placeholder="password..."
              className="ml-2 focus:outline-none"
              onChange={(event)=>{
                SetPassword(event.target.value)
              }}
            />
            <div>
              <RiLockPasswordLine className="text-3xl ml-2 text-green-600" />
            </div>
          </div>
          <div className="flex justify-center item-center m-3 mb-1 bg-green-800 rounded-full my-10 py-2 hover:scale-105 hover:shadow-lg shadow-white">
            <button type="submit" className="text-white">Login</button>
          </div>
          <div className="flex items-center justify-center">
            <p className="mr-1 text-black">Don't have an account?</p>
            <Link to="/signup" className=" text-blue-900">
                SignUp
            </Link>
          </div>
          
        </form>
        <div className="hidden md:block">
          <img src={animation} alt="gif"/>
        </div>
      </div>
    </div>
    );
}

export default LoginForm;