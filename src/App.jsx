import React from "react";
import TaskForm from "./components/TaskForm";

import Tasklist from "./components/TaskList";
const App = () => {
  return (
    <main className="bg-gray-900 h-screen">
      <div className="container  mx-auto p-10">
        <TaskForm></TaskForm>
        <Tasklist></Tasklist>
      </div>
    </main>
  );
};

export default App;
