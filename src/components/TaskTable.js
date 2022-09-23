import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ tasks, toggleTask, showCompleted }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task, index) => (
        <TaskRow task={task} key={index} toggleTask={toggleTask} />
      ));
  };

  return (
    <>
      <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th colSpan="2">Tasks</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
    </>
  );
};

export default TaskTable;
