import { useState } from 'react'

import TaskList from "./components/TaskList";

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  const onPinTask = (value) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === value.id ? { ...task, state: value.newTaskState } : task
      )
    );
  };

  const onArchiveTask = (value) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === value.id ? { ...task, state: value.newTaskState } : task
      )
    );
  };

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">Taskbox</h1>
      </nav>
      <TaskList
        status={status}
        tasks={tasks}
        onPinTask={(task) => onPinTask(task)}
        onArchiveTask={(task) => onArchiveTask(task)}
      />
    </div>
  );
}

export default App;
