import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, descripcion });
    setTitle("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className=" p-3 w-full mb-2"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Escribe una tarea"
          value={title}
          autoFocus
        />

        <textarea
          className="bg-slate-100 p-3 w-full mb-2"
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Escribe la descripcion de la tarea"
          value={descripcion}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">
          Agregar tarea
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
