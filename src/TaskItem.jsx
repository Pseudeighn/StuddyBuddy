import React from 'react';

// Simple Checkmark SVG Icon Component
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4" // Tailwind size classes
  >
    <path d="M9.99999 15.1719L19.1924 5.97949L20.6066 7.39371L9.99999 17.9999L3.63603 11.636L5.05025 10.2218L9.99999 15.1719Z" />
  </svg>
);

const TaskItem = ({ task }) => {
  // Helper to determine color classes based on status
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'overdue':
        return 'text-[#FF6B6B]'; // Reddish
      case 'completed':
        return 'text-[#50D890]'; // Greenish
      case 'pending':
      default:
        return 'text-white'; // Default white for pending status text
    }
  };

  const getDeadlineColor = (status) => {
     switch (status.toLowerCase()) {
      case 'overdue':
        return 'text-[#FF6B6B]'; // Reddish
      case 'completed':
      case 'pending': // Deadline for pending is also green in the example
      default:
        return 'text-[#50D890]'; // Greenish
    }
  }

  return (
    <li className="flex justify-between items-center py-4 border-b border-white/10 last:border-b-0">
      {/* Left Side: Icon and Info */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 bg-[#50D890]/20 text-[#50D890] rounded-full w-9 h-9 flex items-center justify-center">
          <CheckIcon />
        </div>
        <div>
          <p className="text-sm font-medium text-white">{task.name}</p>
          <p className="text-xs text-gray-400">{task.type}</p>
        </div>
      </div>

      {/* Right Side: Status and Deadline */}
      <div className="flex items-center space-x-8 md:space-x-12"> {/* Increased spacing */}
        {/* Status */}
        <div className="text-left min-w-[80px]"> {/* Ensure minimum width for alignment */}
          <p className={`text-sm font-medium ${getStatusColor(task.status)}`}>
            {task.status}
          </p>
          <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
        </div>
        {/* Deadline */}
        <div className="text-left min-w-[110px]"> {/* Ensure minimum width for alignment */}
          <p className={`text-sm font-medium ${getDeadlineColor(task.status)}`}>
            {task.deadline}
          </p>
          <p className="text-xs text-gray-400 uppercase tracking-wider">Deadline</p>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;