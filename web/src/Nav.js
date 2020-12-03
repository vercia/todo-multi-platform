import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from './List';
import AppBar from '@material-ui/core/AppBar';

const Nav = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='fixed' className={classes.appBar}>
          <List />
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      backgroundColor: '#56F2F8',
      height: "8vh",
      width: '100vw',
      boxShadow:"none"
    }
  };
});

export default Nav;
