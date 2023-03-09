import { useState } from 'react'

import TaskList from "./components/TaskList";

import './App.css';

const initialTasks = [
  { id: "1", title: "Task 1", state: 'TASK_INBOX' },
  { id: "2", title: "Task 2", state: 'TASK_INBOX' },
  { id: "3", title: "Task 3", state: 'TASK_INBOX' },
  { id: "4", title: "Task 4", state: 'TASK_INBOX' },
  { id: "5", title: "Task 5", state: 'TASK_INBOX' },
  { id: "6", title: "Task 6", state: 'TASK_INBOX' },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [status, setStatus] = useState('idle');

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
