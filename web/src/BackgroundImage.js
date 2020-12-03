import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AddButton from './AddButton';
import { BackgroundContext } from './BackgroundContext';
import { Text } from './Language/Language';

const BackgroundImage = () => {
  const classes = useStyles();
  const { changeImage } = useContext(BackgroundContext);

  return (
    <Paper className={classes.paper} style={{ backgroundImage: changeImage }}>
      <div className={classes.main}>
        <div className={classes.text}>
          <h1>
            <Text tid='myTasks'>My Tasks</Text>
          </h1>

          <p>{new Date().toLocaleDateString()}</p>
        </div>
        <div className={classes.button}>
          <AddButton />
        </div>
      </div>
    </Paper>
  );
};

const useStyles = makeStyles(() => {
  return {
    paper: {
      backgroundPosition: 'middle',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      color: 'white',
      lineHeight: '12px',
      width: '100vw',
      padding: '0px 0px',
      height: '40vh',
      '@media (min-width: 768px)': {
        height: '45vh'
      },
      '@media (min-width: 1024px)': {
        height: '50vh'
      }
    },
    main: {
      display: 'flex'
    },
    button: {
      position: 'absolute',
      top: '35%',
      right: '5%',
      zIndex: 300,
      '@media (min-width: 768px)': {
        top: '40%'
      },
      '@media (min-width: 1024px)': {
        top: '45%'
      }
    },
    text: {
      marginLeft: '20px',
      fontSize: '13px',
      marginLeft: '4%',
      '@media (min-width: 1440px)': {
        marginLeft: '4%',
        fontSize: '16px'
      }
    }
  };
});

export default BackgroundImage;
