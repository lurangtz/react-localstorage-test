import { useState } from "react";

const TaskCreator = ({ createTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <>
      <form
        method="post"
        onSubmit={(e) => handleSubmit(e)}
        className="my-2 row"
      >
        <div className="col-md-9">
          <input
            type="text"
            name=""
            placeholder="Enter a new task"
            id=""
            onChange={(e) => setNewTaskName(e.target.value)}
            value={newTaskName}
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary btn-sm py-2">Save task</button>
        </div>
      </form>
    </>
  );
};

export default TaskCreator;
