import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import logo from'../images/symbol.png'
import signup from'../images/signup.png'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex  min-h-screen w-full px-4 bg-gray-50">
      <div className="bg-white  rounded-lg px-8  h-full sm:max-w-md sm:w-full">
        <img className="text-center ml-40 mb-6 mt-10 w-16 " src={logo}></img>
        <h1 className="text-3xl font-bold text-center my-4 mb-6">Sign Up</h1>
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
        
        <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="fullName" name="fullName" type="text" autoComplete="name" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Abc" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="example@gmail.com" />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="johnkevine4362" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="********" />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              </div>
              <div className="ml-2 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  By creating an account you agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">terms of use</a> and our <a href="#" className="text-indigo-600 hover:text-indigo-500">privacy policy</a>.
                </label>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create account</button>
            </div>
            <div className="text-center text-sm text-gray-500">
              Already have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in
              { navigate("/Login")}
              </a>
            </div>
          </form>
      </div>
      <div className="w-[600px] ml-48 mt-40">
        <img src={signup}></img>
      </div>
    </div>
  );
}

export default SignUp;
