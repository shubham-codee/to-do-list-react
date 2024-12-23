import { useState } from "react";

export default function DisplayTask({ allTasks, updateTasks }) {
  const handleDelete = (id) => {
    let newAllTasks = allTasks.filter((task) => (task.id != id ? task : null));
    updateTasks(newAllTasks);
  };

  const handleStatus = (id) => {
    let newAllTasks = allTasks.map((task) => {
      if (task.id == id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    updateTasks(newAllTasks);
  };

  return (
    <ol className="mt-6 space-y-4">
      {allTasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-3 bg-black border border-blue-500 rounded-lg shadow-lg min-w-full"
        >
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              onClick={() => handleStatus(task.id)}
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />
            <span
              className={`text-white text-sm ${
                task.isDone ? "line-through text-gray-400" : ""
              }`}
            >
              {task.content}
            </span>
          </div>
          <button
            onClick={() => handleDelete(task.id)}
            className="px-4 ml-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
