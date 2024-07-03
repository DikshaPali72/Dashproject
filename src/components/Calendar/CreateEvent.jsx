import React from 'react';
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
const CreateEvent = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-md shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Create an Event</h2>
      <button className="text-gray-500">✕</button>
    </div>
    <div className="flex mb-4">
      <button className="flex-1 py-2 bg-orange-400 text-white rounded-l-md">Event</button>
      <button className="flex-1 py-2 bg-gray-200">Reminder</button>
      <button className="flex-1 py-2 bg-gray-200 rounded-r-md">Task</button>
    </div>
    <input
      type="text"
      placeholder="Add title"
      className="w-full p-2 mb-4 border rounded-md"
    />
    <div className="flex items-center mb-4">
      <div className="flex items-center space-x-2">
        <span className="material-icons text-gray-500"><IoMdTime/></span>
        <div>
          <p>Thursday, December 5</p>
          <p>12:00pm - 1:00pm</p>
          <p className="text-sm text-gray-500">Time zone - Does not repeat</p>
          <button className="ml-auto text-blue-500">Find a time</button>
        </div>
      </div>
      
    </div>
    <div className="flex justify-between mb-4">
      <button className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-md">
        <span className="material-icons"><IoIosPeople/></span>
        <span>Add People</span>
      </button>
      <button className="flex items-center space-x-2 bg-gray-200 py-2 px-4 rounded-md">
        <span className="material-icons"><IoLocation/></span>
        <span>Add location</span>
      </button>
    </div>
    <div className="flex items-center mb-4">
      <span className="material-icons text-gray-500"><SlCalender/></span>
      <div className="ml-2">
        <p>John Deo</p>
        <p className="text-sm text-gray-500">Busy - Default visibility - notify 30 minutes before</p>
      </div>
    </div>
    <div className="flex justify-end space-x-2">
      <button className="bg-gray-200 py-2 px-4 rounded-md">Close</button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
    </div>
  </div>
  );
};

export default CreateEvent;
