import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const tasks = [
  { id: 1, text: "Do shopping", done: false },
  { id: 2, text: "Others tasks !", done: true }
];

export const tasks$ = new BehaviorSubject(tasks);

export const addTask = (text) => {
  tasks.push({
    id: Date.now(),
    done: false,
    text: text,
  });

  tasks$.next(tasks);
};

export const updateTask = (data) => {
  tasks.map((task) => {
    if(task.id===data.id ) return data
    else return task
  });

  tasks$.next(tasks);
};

export const deleteTask = (id) => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) { 
    tasks.splice(index, 1);
    tasks$.next(tasks);
  }
};

export const toggleTask = (id) => {
  const task = tasks.find((t) => t.id === id);

  if (task) {
    task.done = !task.done;
    tasks$.next(tasks);  
  }
};

export const useTasks = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
   tasks$.subscribe(tasks => setTasks([...tasks]))
  }, [])

  return tasks
}

