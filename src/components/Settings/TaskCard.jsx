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
        <div className="mb-2 w-28">
        {task.pic && <img src={task.pic} alt={task.title} className="w-full h-auto" />}
      </div>
          {/* {Array(task.members).fill().map((_, i) => (
            <img key={i} src="https://via.placeholder.com/20" alt="Member" className="w-6 h-6 rounded-full"/>
          ))} */}
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
// import React from 'react';

// const TaskCard = ({ task }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-sm">
//       <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
//       <p className="text-sm mb-2"><strong>Priority:</strong> {task.priority}</p>
//       <p className="text-sm mb-2"><strong>Status:</strong> {task.status}</p>
//       <p className="text-sm mb-2">{task.description}</p>
//       <div className="mb-2">
//         {task.pic && <img src={task.pic} alt={task.title} className="w-full h-auto" />}
//       </div>
//       <p className="text-sm mb-2"><strong>Comments:</strong> {task.comments}</p>
//       <p className="text-sm mb-2"><strong>Attachments:</strong> {task.attachments}</p>
//     </div>
//   );
// };

// export default TaskCard;

