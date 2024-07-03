import React from 'react'

import Sub from '../images/Subtract.png'




function Recover() {
  return (
    <div className="flex items-center justify-center h-screen  ml-96">
      <div className="bg-white rounded-lg shadow-md px-8 py-12">
      <img className='text-center ml-20 mb-6 ' src={Sub}></img>
        <h1 className="text-2xl font-bold text-center mb-6">Recover</h1>
        <form action="#">
          <div className="mb-6">
            <label htmlFor="email" className="text-gray-700 block mb-2">Email Address</label>
            <input type="email" id="email" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="example@gmail.com" />
          </div>
          <button type="submit" className="w-full px-4 py-2 rounded-lg bg-indigo-500 text-white font-bold shadow-sm hover:bg-indigo-700">Reset Your Password</button>
        </form>
      </div>
    </div>
  )
}

export default Recover
