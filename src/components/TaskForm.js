import { useState } from "react";
import { addTask } from "../rxjs/rxjs";

const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
    addTask(text); 
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input  type="text" placeholder="Add a task" value={text} onChange={(e) => setText(e.target.value)} />
    </form>
  );
};

export default TaskForm;
