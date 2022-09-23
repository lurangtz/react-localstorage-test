import React from "react";

const TaskRow = ({ task, toggleTask }) => {
  return (
    <>
      <tr>
        <td className="w-75">{task.name}</td>
        <td className="w-25 text-end">
          <input
            type="checkbox"
            defaultChecked={task.done}
            onClick={() => toggleTask(task)}
          />
        </td>
      </tr>
    </>
  );
};

export default TaskRow;
