import React, { useState } from "react";


export default function TasksPage() {
  const [tasks, setTasks] = useState([]); // Start with empty task list

  const [newTask, setNewTask] = useState({
    title: "",
    deadline: "",
    priority: "Medium",
  });

  // Add Task with auto status logic
  const addTask = () => {
    if (!newTask.title || !newTask.deadline) {
      alert("Please fill out all fields.");
      return;
    }

    // Auto calculate status based on deadline
    const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    let status = "Pending";
    if (newTask.deadline < currentDate) {
      status = "Overdue";
    }

    const taskToAdd = { ...newTask, status };
    setTasks([...tasks, taskToAdd]);
    setNewTask({ title: "", deadline: "", priority: "Medium" });
  };

  // Remove Task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Update Task Status (manual edit)
  const updateTaskStatus = (index, newStatus) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div 
      className="flex min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://github.com/Pseudeighn/StuddyBuddy/blob/master/src/assets/StudyBuddy-BackgroundBlank.png?raw=true')"
      }}
    >
    
      

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Profile Section */}
<div className="flex items-center justify-end mb-6 space-x-4">
  <p className="text-lg font-medium">John Doe</p>
  <img
    src="https://via.placeholder.com/40"
    alt="Profile"
    className="w-10 h-10 rounded-full border-2 border-yellow-400"
  />
</div>

        <h1 className="text-3xl font-bold mb-6">Tasks</h1>

        {/* Add Task Form */}
        <div className="bg-[#10172a] rounded-2xl p-4 mb-6 space-y-4 shadow-lg">
          <h2 className="text-xl font-semibold">Add New Task</h2>

          {/* Task Title */}
          <input
            className="w-full p-2 rounded bg-[#1e293b] text-white"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) =>
              setNewTask({ ...newTask, title: e.target.value })
            }
          />

          {/* Deadline */}
          <input
            className="w-full p-2 rounded bg-[#1e293b] text-white"
            type="date"
            value={newTask.deadline}
            onChange={(e) =>
              setNewTask({ ...newTask, deadline: e.target.value })
            }
          />

          {/* Priority */}
          <select
            className="w-full p-2 rounded bg-[#1e293b] text-white"
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          {/* Add Button */}
          <button
            onClick={addTask}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-[#10172a] rounded-2xl p-4 flex justify-between items-center shadow-lg"
            >
              {/* Task Details */}
              <div>
                <h2 className="text-xl font-semibold">{task.title}</h2>
                <p className="text-sm text-gray-400">Deadline: {task.deadline}</p>
                <p className="text-sm text-gray-400">Priority: {task.priority}</p>

                {/* Editable Status */}
                <div className="mt-2">
                  <select
                    value={task.status}
                    onChange={(e) => updateTaskStatus(index, e.target.value)}
                    className={`p-1 rounded ${
                      task.status === "Completed"
                        ? "bg-green-500 text-black"
                        : task.status === "Overdue"
                        ? "bg-red-500 text-black"
                        : "bg-yellow-400 text-black"
                    }`}
                  >
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Overdue</option>
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-end space-y-2">
                {/* Mark Completed Button */}
                {task.status !== "Completed" && (
                  <button
                    onClick={() => updateTaskStatus(index, "Completed")}
                    className="bg-green-500 text-black px-2 py-1 rounded hover:bg-green-400"
                  >
                    Mark Completed
                  </button>
                )}

                {/* Remove Button */}
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-400 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


