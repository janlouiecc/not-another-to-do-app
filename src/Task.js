const Task = ({ taskName, id, deleteTask }) => {
  return (
    <div>
      <h2>{taskName}</h2>
      <button onClick={() => deleteTask(id)}>x</button>
    </div>
  );
};

export default Task;
