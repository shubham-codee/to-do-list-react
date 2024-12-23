import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputBox, DisplayTask } from "./components";

export default function ToDoList() {
  let [allTasks, setAllTasks] = useState([]);

  const addNewTask = (newTask) => {
    setAllTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const updateTasks = (allTasks) => {
    setAllTasks(allTasks);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col	">
      <h1 className="text-4xl font-bold text-white tracking-wide border-b-4 border-blue-500 pb-2">
        ToDoList
      </h1>
      <InputBox addNewTask={addNewTask}></InputBox>
      <DisplayTask allTasks={allTasks} updateTasks={updateTasks}></DisplayTask>
    </div>
  );
}
