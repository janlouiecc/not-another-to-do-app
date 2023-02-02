import { useState } from 'react';
import Task from './Task';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className='App'>
      <div className='addTask'>
        <input type='text' value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {tasks.map((task) => {
          return (
            <Task
              completeTask={completeTask}
              deleteTask={deleteTask}
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
