import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

const Tasklist = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-center text-4xl font-bold">
        No hay tareas aun
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Tasklist;
