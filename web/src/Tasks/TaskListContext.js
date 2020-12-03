import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import  {firebase}  from '../Config/config';
import 'firebase/database';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = (JSON.parse(localStorage.getItem('tasks')) || []).map(
    (task) => {
      if (task.date) {
        return {
          ...task,
          date: moment(task.date)
        };
      } else {
        return task;
      }
    }
  );

  const [tasks, setTasks] = useState(initialState);

  const database = firebase
    .database()
    .ref()
    .child('tasks');

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const mappedTasks = tasks.map((task) => {
      if (task.date) {
        return {
          ...task,
          date: task.date.toString()
        };
      } else {
        return task;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(mappedTasks));
  }, [tasks]);

  const addTask = (title, date = moment(), isDone) => {
    setTasks([...tasks, { title, date, id: uuid(), isDone }]);
    database.push().set({ taskContent: title });
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    database.child(id).remove();
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };

  const [isDone, setIsDone] = useState(false);

  const checkDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
        return task;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        findItem,
        editTask,
        editItem,
        isDone,
        checkDone
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
