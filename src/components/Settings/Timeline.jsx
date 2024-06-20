import React from 'react'
 import TimelineTask from './TimelineTask';
 import { useNavigate } from 'react-router-dom';

const Timeline = () => {
    const Navigate =useNavigate()
    const tasks = [
        { time: "09:00 AM", title: "Graphic Design", priority: "Low", status: "On Track", members: 3 },
        { time: "10:00 AM",},
        { time: "11:00 AM", title: "Dashboard Design", priority: "High", status: "On Track", members: 3 },
        { time: "01:00 PM", title: "Logo Design", priority: "High", status: "On Track", members: 3 },
        { time: "03:00 PM", title: "Web Design", priority: "High", status: "On Track", members: 3 }
      ];
  return (
    <div className="p-6">
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Task Preview</h1>
      {/* <div className="flex space-x-4">
        <button className="p-2 rounded-lg bg-gray-200">List</button>
        <button className="p-2 rounded-lg bg-gray-200">Board</button>
        <button className="p-2 rounded-lg bg-purple-500 text-white">Timeline</button>
      </div> */}
      <button className="p-2 rounded-lg bg-purple-500 text-white">+ Add Task</button>
    </header>
    <div className="flex justify-between m-4">
        <div className="flex space-x-4 ">
          <button className="p-2 rounded-lg bg-gray-200">List</button>
          <button className="p-2 rounded-lg bg-purple-500 text-white"onClick={()=>{Navigate("/BoardList")}}>Board</button>
          <button className="p-2 rounded-lg bg-gray-200"onClick={()=>{Navigate("/Timeline")}}>Timeline</button>
          </div>
          <div>
            <select className="p-2 rounded-lg bg-gray-200">
              <option>December 2021</option>
            </select>
          </div>
        </div>
    <div className="flex space-x-4 mb-6 ">
      <div className="flex flex-col space-y-2  w-60">
        <button className="py-2 px-4 rounded-lg bg-purple-500 text-white">To Do</button>
        <button className="py-2 px-4 rounded-lg bg-gray-200">Doing</button>
        <button className="py-2 px-4 rounded-lg bg-gray-200">Done</button>
      </div>
      
      <div className="flex-grow ml-20">
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex space-x-2">
            {[...Array(14).keys()].map(day => (
              <button key={day} className={`py-2 px-4 rounded-lg ${day === 2 ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}>
                {day + 1}
              </button>
            ))}
          </div>
          {/* <div>
            <select className="p-2 rounded-lg bg-gray-200">
              <option>December 2021</option>
            </select>
          </div> */}
        </div>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <TimelineTask key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Timeline