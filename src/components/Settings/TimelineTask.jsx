import React from 'react';

const TimelineTask = ({ task }) => {
  return (
    
    <div className="flex items-center space-x-4">
      <div className="w-1/6 text-gray-500">{task.time}</div>
      <div className="w-5/6 p-4 bg-white rounded-lg shadow flex justify-between items-center">
        <div className="flex items-center">
          <input type="checkbox" className="mr-4"/>
          <h3 className="font-semibold">{task.title}</h3>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-1">
          <div className="mb-2 w-28">
        {task.pic && <img src={task.pic} alt={task.title} className="w-full h-auto" />}
      </div>
            {/* {Array(task.members).fill().map((_, i) => (
              <img key={i} src="https://via.placeholder.com/20" alt="Member" className="w-6 h-6 rounded-full"/>
            ))} */}
          </div>
          <span className={`px-2 py-1 text-xs font-semibold rounded ${task.priority === 'High' ? 'bg-red-100 text-red-500' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-500' : 'bg-green-100 text-green-500'}`}>
            {task.priority}
          </span>
          <span className={`px-2 py-1 text-xs font-semibold rounded ${task.status === 'On Track' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
            {task.status}
          </span>
          <button className="p-1 rounded-full bg-gray-100">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineTask;
