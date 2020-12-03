import React, { useState, useContext } from 'react';
import moment from 'moment';
import { Calendar } from 'react-datepicker2';
import { makeStyles } from '@material-ui/core/styles';
import TaskList from './Tasks/TaskList';
import './Tasks/Task.css';
import { TaskListContext } from './Tasks/TaskListContext';

const Date = () => {
  const { tasks } = useContext(TaskListContext);
  const [selectedDate, setSelectedDate] = useState(moment());
  const classes = useStyles();

  const ranges = tasks.map((task) => {
    if (task.date) {
      return {
        color: '#00BCD4',
        start: task.date,
        end: task.date.add(1, 'minutes')
      };
    } else {
      return {
        color: '#00BCD4',
        start: moment(),
        end: moment().add('1', 'minutes')
      };
    }
  });
  console.log(ranges);

  return (
    <div className={classes.main}>
      <Calendar
        ranges={ranges}
        className={classes.calendar}
        value={selectedDate}
        onChange={(value) => setSelectedDate(value)}
      />
      <div className={classes.todo}>
        <TaskList selectedDate={selectedDate} />
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  calendar: {
    boxShadow: 'none',
    width: '80vw',
    marginTop: '10%',
    margin: 'auto',
    fontSize: '14px',
    '@media (min-width: 768px)': {
      width: '45vw',
      marginLeft: '3%',
      marginTop: '2%'
    },
    '@media (min-width: 1024px)': {
      marginLeft: '2%',
      marginTop: '0.5%',
      width: '42vw'
    },
    '@media (min-width: 1440px)': {
      marginLeft: '4%',
      width: '43vw',
      fontSize: '18px'
    }
  },
  todo: {
    '@media (min-width: 1440px)': {
      width: '60vw'
    }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      height: '55vh'
    },
    '@media (min-width: 1024px)': {
      height: '50vh'
    },
    '@media (min-width: 1440px)': {
      height: '40vh'
    }
  }
}));

export default Date;
