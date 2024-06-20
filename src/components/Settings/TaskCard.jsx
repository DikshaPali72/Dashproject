import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <header className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{task.title}</h3>
        <button className="p-1 rounded-full bg-gray-100">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </header>
      <div className="mb-4">
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${task.priority === 'High' ? 'bg-red-100 text-red-500' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-500' : 'bg-green-100 text-green-500'}`}>
          {task.priority}
        </span>
        <span className={`inline-block ml-2 px-2 py-1 text-xs font-semibold rounded ${task.status === 'On Track' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
          {task.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{task.description}</p>
      <footer className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {Array(task.members).fill().map((_, i) => (
            <img key={i} src="https://via.placeholder.com/20" alt="Member" className="w-6 h-6 rounded-full"/>
          ))}
        </div>
        <div className="flex space-x-4 text-sm text-gray-400">
          <span><i className="fas fa-comment"></i> {task.comments}</span>
          <span><i className="fas fa-paperclip"></i> {task.attachments}</span>
        </div>
      </footer>
    </div>
  );
};

export default TaskCard;
