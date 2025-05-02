import React from 'react';
import TaskItem from './TaskItem'; // Import the TaskItem component

// Example data (could be passed as props or fetched)
const taskData = [
    {
        id: 1,
        name: 'Web System and...',
        type: 'Project',
        status: 'Overdue',
        deadline: 'APRIL 10, 2025',
    },
    {
        id: 2,
        name: 'Information Man...',
        type: 'Activity',
        status: 'Pending',
        deadline: 'APRIL 13, 2025',
    },
    {
        id: 3,
        name: 'Ethics',
        type: 'Quiz',
        status: 'Completed',
        deadline: 'APRIL 13, 2025',
    },
    {
        id: 4,
        name: 'Networking',
        type: 'Assignment',
        status: 'Overdue',
        deadline: 'APRIL 10, 2025',
    },
];


const TasksSection = () => {
  return (
    // Use the specific dark blue bg color from the image
    <div className="bg-[#1F2A4D] p-6 rounded-xl shadow-lg text-white w-full max-w-3xl"> {/* Adjust max-w as needed */}
      {/* Header */}
      <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10">
        <h2 className="text-xl font-semibold text-white">Tasks</h2>
        <span className="text-gray-400 text-2xl font-bold cursor-pointer tracking-widest">
          ...
        </span>
      </div>

      {/* Task List */}
      <ul className="space-y-0"> {/* space-y-0 removes default spacing if any */}
        {taskData.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TasksSection;