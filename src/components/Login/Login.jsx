import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import logo from'../images/symbol.png'
import login from'../images/login.png'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required.';
    else {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) newErrors.email = 'Enter a valid email address.';
    }
    if (!password) newErrors.password = 'Password is required.';
   else{
     const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) 
      newErrors.password = 'Password must be at least 6 characters long and contain at least one uppercase letter.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      navigate("/Dashboard")
      // Perform form submission tasks
    }
  };
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
      
       <form
       onSubmit={handleSubmit}
       >
       <div className="mb-6">
          <label htmlFor="email" className="text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        <div className="mb-6">
          <label htmlFor="password" className="text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-gray-300 bg-gray-100  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
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
          <button
        onClick={()=>{navigate("/Recover")}}
          type="submit"
          className=" text-sm text-blue-600 hover:underline"
        >
          reset password
          </button>
          {/* <a href="#" className="text-sm text-blue-600 hover:underline">
            Reset Password?
            { navigate("/Recover")}
          </a> */}
        </div>
        <button
        // onClick={()=>{navigate("/Dashboard")}}
          type="submit"
          className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          Log in
        </button>
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Don't have an account yet?{" "}
            {/* <a href="#" className="text-blue-600 hover:underline" >
              New Account
             { navigate("/SignUp")}
            </a>/ */}
            <button
        onClick={()=>{navigate("/SignUp")}}
          type="submit"
          className="rounded-md text-blue-700    font-bold py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
         New Account

        </button>
          </p>
        </div>
       </form>
      </div>
      <div className="w-[550px] ml-48 mt-24">
        <img src={login}></img>
      </div>
    </div>
  );}

export default Login;
