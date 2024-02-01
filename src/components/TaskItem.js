import { useState } from "react";
import { deleteTask, toggleTask, updateTask } from "../rxjs/rxjs";

const TaskItem = (props) => {
  const { task } = props;
  const [currentText, setCurrentText] = useState(task.text);
  const [toggleUpdate, setToggleUpdate] = useState(false)

  const displaytask = !toggleUpdate ? (
    <>
      <span> {currentText}</span> {"  "}
      <button onClick={() => setToggleUpdate(!toggleUpdate)}>Update</button>
    </>
  ) : (
    <>
      <input
        type="text"
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
      />
      <button onClick={() => {
        updateTask({id:task.id, text: currentText});
        setToggleUpdate(!toggleUpdate); 
      }}>Save</button>
    </>
  );

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />
        {/* {task.text} */}
        {displaytask} 
        <span
          onClick={() => deleteTask(task.id)}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
