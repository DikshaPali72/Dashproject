import React, { useState } from 'react';
import { RiEditFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const Tasklie = () => {
  const initialTasks = [
    {
      id: 1,
      name: "UI Design",
      startDate: "2021-12-03",
      endDate: "2021-12-05",
      members: 5,
      status: "Pending",
      icon: "https://img.icons8.com/color/48/000000/figma--v1.png", // Figma icon
    },
    {
      id: 2,
      name: "Logo Design",
      startDate: "2021-12-03",
      endDate: "2021-12-05",
      members: 5,
      status: "Pending",
      icon: "https://img.icons8.com/color/48/000000/adobe-xd.png", // Adobe XD icon
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const handleEditClick = (id) => {
    console.log(`Edit task with ID: ${id}`);
    // Implement actual edit functionality here
  };

  const handleDeleteClick = (id) => {
    console.log(`Delete task with ID: ${id}`);
    // Implement actual delete functionality here
  };

  const handleTaskChange = (id, field, value) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, [field]: value } : task));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-300 text-white font-semibold';
      case 'In Progress':
        return 'bg-blue-300 text-white font-semibold';
      case 'Completed':
        return 'bg-green-300 text-white font-semibold';
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto p-6 bg-white rounded-lg shadow-md">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold mb-4">Done</h2>
        <a href="#" className="text-blue-500 hover:underline">See More</a>
      </div>
      <table className="min-w-full bg-white border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 font-normal">Check Box</th>
            <th className="py-2 px-4 font-normal">Task Name</th>
            <th className="py-2 px-4 font-normal">Start Date</th>
            <th className="py-2 px-4 font-normal">End Date</th>
            <th className="py-2 px-4 font-normal">Member</th>
            <th className="py-2 px-4 font-normal">Status</th>
            <th className="py-2 px-4 font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 text-center"><input type="checkbox" /></td>
              <td className="py-2 px-4 flex items-center space-x-2">
                <img src={task.icon} alt="icon" className="w-6 h-6" />
                <select
                  value={task.name}
                  onChange={(e) => handleTaskChange(task.id, 'name', e.target.value)}
                  className="block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="UI Design">UI Design</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="Frontend Development">Frontend Development</option>
                </select>
              </td>
              <td className="py-2 px-4">
                <input
                  type="date"
                  value={task.startDate}
                  onChange={(e) => handleTaskChange(task.id, 'startDate', e.target.value)}
                  className="block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="date"
                  value={task.endDate}
                  onChange={(e) => handleTaskChange(task.id, 'endDate', e.target.value)}
                  className="block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </td>
              <td className="py-2 px-4">
                <select
                  value={task.members}
                  onChange={(e) => handleTaskChange(task.id, 'members', e.target.value)}
                  className="block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} Member</option>
                  ))}
                </select>
              </td>
              <td className="py-2 px-4">
                <select
                  value={task.status}
                  onChange={(e) => handleTaskChange(task.id, 'status', e.target.value)}
                  className={`block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${getStatusColor(task.status)}`}
                >
                  <option value="Pending" className="bg-yellow-300 text-white font-semibold">Pending</option>
                  <option value="In Progress" className="bg-blue-300 text-white font-semibold">In Progress</option>
                  <option value="Completed" className="bg-green-400 text-white font-semibold">Completed</option>
                </select>
              </td>
              <td className="py-2 px-4 text-center space-x-2">
              <button onClick={() => handleEditClick(task.id)} className="text-blue-600 rounded-full p-2 bg-blue-100">
                  <RiEditFill className="text-blue-600" />
                </button>
                <button onClick={() => handleEditClick(task.id)} className="text-red-600 rounded-full p-2 bg-blue-100">
                <FaTrash  className="text-red-600" />
                </button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasklie;
