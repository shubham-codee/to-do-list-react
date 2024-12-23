import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function InputBox({ addNewTask }) {
  let [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask({ id: uuidv4(), content: newTask });
    setNewTask("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [handleSubmit]);

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="flex items-center gap-x-2 mt-6"
    >
      <input
        type="text"
        onChange={handleChange}
        value={newTask}
        ref={inputRef}
        className="w-full p-3 text-white bg-black border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 aspect-square w-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
