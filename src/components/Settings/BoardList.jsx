import React from 'react'
import { useNavigate } from 'react-router-dom'

import TaskColumn from './TaskColumn';
import board from "../images/customer/board.png";

const BoardList = () => {
  
    const tasks = {
        todo: [
          { title: "Dashboard Design", priority: "Low", status: "On Track", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
          { title: "Landing page Design", priority: "Medium", status: "At risk", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
          { title: "E-Shop Mobile App", priority: "High", status: "On Track", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
        ],
        inProgress: [
          { title: "Dashboard Design", priority: "High", status: "On Track", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
          { title: "Landing page Design", priority: "Low", status: "On Track", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
          { title: "E-Shop Mobile App", priority: "Low", status: "On Track", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
        ],
        inReview: [
          { title: "Dashboard Design", priority: "Medium", status: "On Track", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
          { title: "E-Shop Mobile App", priority: "Low", status: "On Track", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
        ],
        done: [
          { title: "Dashboard Design", priority: "High", status: "On Track", description: "Discussion for management dashboard UI design", pic: board, comments: 112, attachments: "1.2k" },
        ]
      };
    
const Navigate =useNavigate()
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Preview</h1>
        {/* <div className="flex space-x-4">
          <button className="p-2 rounded-lg bg-gray-200">List</button>
          <button className="p-2 rounded-lg bg-purple-500 text-white">Board</button>
          <button className="p-2 rounded-lg bg-gray-200">Timeline</button>
        </div> */}
        <button className="p-2 rounded-lg bg-purple-500 text-white">Filter</button>
      </header>
      <div className="flex justify-between m-4">
        <div className="flex space-x-4 ">
          <button className="p-2 rounded-lg bg-gray-200">List</button>
          <button className="p-2 rounded-lg bg-purple-500 text-white"onClick={()=>{Navigate("/BoardList")}}>Board</button>
          <button className="p-2 rounded-lg bg-gray-200"onClick={()=>{Navigate("/Timeline")}}>Timeline</button>
          </div>
          <div className='  '>
            <input placeholder='search'  className=' bg-slate-200 rounded-lg py-1 ' type="text" />
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <TaskColumn title="ToDo" tasks={tasks.todo} />
        <TaskColumn title="In Progress" tasks={tasks.inProgress} />
        <TaskColumn title="In Review" tasks={tasks.inReview} />
        <TaskColumn title="Done" tasks={tasks.done} />
      </div>
    </div>
  )
}

export default BoardList