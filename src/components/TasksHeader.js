//import { useEffect, useState } from "react";
//import { map } from "rxjs";
import { useTasks } from "../rxjs/rxjs";

const TasksHeader = () => {
  // const [undoneTasks, setUndoneTasks] = useState(0);

  //   useEffect(() => {
  //     tasks$
  //     .pipe(map(tasksok => (tasksok.filter(t => t.done === false)).length))
  //     .subscribe((nb) => setUndoneTasks(nb))
  //   }, []);
  const tasks = useTasks();
  const undoneTasks = tasks.filter((t) => t.done === false).length;

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Task to do : <strong>{undoneTasks}</strong>
      </p>
      <hr />
    </header>
  );
};

export default TasksHeader;
