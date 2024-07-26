import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
