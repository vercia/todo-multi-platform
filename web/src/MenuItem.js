import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MenuItem = (props) => {
    const classes = useStyles()
    const Icon = props.icon

    return (
        <ListItem>
          <NavLink 
            className={classes.navlink}
            to={props.pathname} exact
            activeStyle={{
              background: '#717171',
              color: '#56F2F8',
              opacity: 0.8,
              width: "100%",
            }}
          >
            <Icon className={classes.icon} />
            <ListItemText className={classes.text} primary={props.text} />
          </NavLink>
        </ListItem>
    )
}

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '30px',
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'inline',
      fontSize: '40px'
    }
  },
  text: {
    '@media (min-width: 768px)': {
      paddingLeft: '10px'
    }
  },
  navlink: {
    display: 'flex',
    textDecoration: 'none',
    color: '#6E6E6E',
    '&:hover': {
      backgroundColor: '#717171',
      opacity: '.4',
      color: 'black',
      width: '100%'
    }
  }
}));

export default MenuItem