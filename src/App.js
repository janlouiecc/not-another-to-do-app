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
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
              deleteTask={deleteTask}
              taskName={task.taskName}
              id={task.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
