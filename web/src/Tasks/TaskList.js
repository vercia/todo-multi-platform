import React, { useContext } from 'react';
import { TaskListContext } from './TaskListContext';
import Task from './Task';
import './Task.css';
import { Text } from '../Language/Language';

const TaskList = (props) => {
  const value = useContext(TaskListContext);
  const { tasks } = value;
  const { selectedDate } = props;
  const selectedTasks = selectedDate
    ? tasks.filter((task) => {
        if (task.date) {
          return selectedDate.isSame(task.date, 'day');
        }

        return false;
      })
    : tasks;

  return (
    <div>
      {selectedTasks.length ? (
        <ul className='main list'>
          {selectedTasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
          <div className='no-tasks'><Text tid="noTasks">No tasks</Text></div>
      )}
    </div>
  );
};

export default TaskList;
