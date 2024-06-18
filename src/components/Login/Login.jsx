import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import logo from'../images/symbol.png'
import login from'../images/login.png'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex  min-h-screen w-full px-4 bg-gray-50">
      <div className="bg-white  rounded-lg px-8  h-full sm:max-w-md sm:w-full">
        <img className="text-center ml-40 mb-6 mt-28 w-16 " src={logo}></img>
        <h1 className="text-3xl font-bold text-center my-4 mb-6">Log in</h1>
        <div className="flex justify-center mb-6">
          <button className="flex items-center px-4 py-2  rounded-md bg-gray-100 hover:bg-gray-300">
            <FcGoogle />
            <span className="ml-2">Google</span>
          </button>
          <button className="flex items-center ml-3 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300">
            <FaFacebookF />
            <span className="ml-2  text-gray-600">Facebook</span>
          </button>
        </div>
      
       <div>
       <div className="mb-6">
          <label htmlFor="email" className="text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-gray-300 bg-gray-100  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-gray-700 ml-2">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Reset Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          Log in
        </button>
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Don't have an account yet?{" "}
            <a href="#" className="text-blue-600 hover:underline" >
              New Account
             { navigate("/SignUp")}
            </a>
          </p>
        </div>
       </div>
      </div>
      <div className="w-[550px] ml-48 mt-24">
        <img src={login}></img>
      </div>
    </div>
  );}

export default Login;
