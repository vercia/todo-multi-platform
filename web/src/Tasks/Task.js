import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from './TaskListContext';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './Task.css';
import { Text } from '../Language/Language';

const Task = ({ task }) => {
  const {
    removeTask,
    findItem,
    addTask,
    editItem,
    editTask,
    checkDone
  } = useContext(TaskListContext);
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <li className='list-item'>
      <Checkbox
        icon={<CheckBoxOutlineBlankOutlinedIcon />}
        color='default'
        checkedIcon={<CheckBoxIcon fontSize='medium' />}
        checked={task.isDone}
        onChange={() => checkDone(task.id)}
        value='task1'
      />
      <span>{task.title}</span>
      <div className='list-task'>
        <div>
          <button
            onClick={() => removeTask(task.id)}
            className='btn-delete task-btn'
          >
            <i className='fas fa-trash-alt'></i>
          </button>
        </div>
        <div onClick={() => findItem(task.id)}>
          <button onClick={handleClickOpen} className='btn-edit task-btn'>
            <i className='fas fa-pen'></i>
          </button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>
            <Text tid='taskManager'>Task Manager</Text>
          </DialogTitle>
          <form onSubmit={handleSubmit} className='form'>
            <input
              onChange={handleChange}
              value={title}
              type='text'
              className='task-input'
              placeholder='Add Task...'
              required
            />
            <div className='buttons'>
              <button type='submit' className='btn add-task-btn'>
                <Text tid='edit'>Edit</Text>
              </button>
            </div>
          </form>
          <DialogActions>
            <Button onClick={handleClose} color='primary' autoFocus>
              <Text tid='close'>Close</Text>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </li>
  );
};

export default Task;
