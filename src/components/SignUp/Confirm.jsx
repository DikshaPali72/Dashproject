import React from 'react'
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

import thumb from '../images/thumbs up.png'
const Confirm = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen  ml-96">
      <div className=" rounded-lg shadow-md px-8 py-12 bg-white">
      <img className='text-center ml-32  mb-6  ' src={thumb}></img>
        <h1 className="text-2xl font-bold mb-4">Your account successfully created.</h1>
        <button onClick={()=>{navigate("/")}} className="bg-blue-500 hover:bg-blue-700 text-white items-center font-bold py-2 px-4 rounded ml-28"><Confetti/>Go to Home</button>
      </div>
    </div>
  )
}

export default Confirm
