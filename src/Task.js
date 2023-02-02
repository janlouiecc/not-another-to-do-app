const Task = ({ taskName, id, completed, completeTask, deleteTask }) => {
  return (
    <div>
      <h2 style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>
        {taskName}
      </h2>
      <button onClick={() => completeTask(id)}>Complete</button>
      <button onClick={() => deleteTask(id)}>x</button>
    </div>
  );
};

export default Task;
