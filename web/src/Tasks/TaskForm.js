import React, { useContext, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker2'
import { TaskListContext } from './TaskListContext';
import { makeStyles } from '@material-ui/core/styles';
import './Task.css';
import moment from 'moment'
import { Text } from '../Language/Language';

const TaskForm = () => {
  const classes = useStyles();
  const { addTask, editItem, editTask, isDone } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(moment())
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!editItem) {
      addTask(title, date, isDone);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  const [lang, setLang] = useState('');

  useEffect(() => {
    if (localStorage.myLanguage[7] == 'p'){
      setLang('Dodaj zadanie');
    } else if (localStorage.myLanguage[8] == 's') {
      setLang('Agregar una tarea')
    } else if (localStorage.myLanguage[7] == 'd') {
      setLang('Eine aufgabe hinzufügen')
    } else {
      setLang('Add task');
    }
  })

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange}
        value={title}
        type='text'
        className='task-input'
        placeholder={lang}
        required
      />
      <DatePicker
        value={date}
        inputFormat='DD-MM-YYYY'
        timePicker={false}
        onChange={(value) => setDate(value)}
        className={classes.datepicker}
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          <Text tid='add'>Add</Text>
        </button>
      </div>
    </form>
  );
};

const useStyles = makeStyles(() => {
  return {
    datepicker: {
      marginTop: '15px',
      width: '100px',
      height: '40px',
      border: '1px solid rgba(0,0,0,0.2)',
      fontSize: '15px',
      textAlign: 'center',
      borderRadius: 20,
      '@media (min-width: 320px)': {
        marginTop: '15px',
        width: '100px',
        height: '40px',
        fontSize: '14px'
      }
    }
  };
});

export default TaskForm;
