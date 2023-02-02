import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (task) => {
    setTasks(
      tasks.filter((t) => {
        return t !== task;
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
            <div>
              <h2>{task}</h2>
              <button onClick={() => deleteTask(task)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
