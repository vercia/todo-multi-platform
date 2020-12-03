import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TaskForm from './Tasks/TaskForm';
import { Text } from './Language/Language';

export default function AddButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        className={classes.fab}
        color='primary'
        aria-label='add'
        onClick={handleClickOpen}
      >
        <AddIcon className={classes.addIcon} />
      </Fab>
      <Dialog open={open} onClose={handleClose} className={classes.dialog}>
        <DialogTitle className={classes.title}>
          <Text tid='taskManager'>Task Manager</Text>
        </DialogTitle>
        <TaskForm />
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            <Text tid='close'>Close</Text>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  fab: {
    backgroundColor: '#56F2F8',
    boxShadow: 'none',
    display: 'flex',
    right: 0,
    width: '60px',
    height: '60px',
    '&:hover': {
      backgroundColor: '#717171',
      opacity: '.8'
    },
    '@media (min-width: 1024px)': {
      width: '70px',
      height: '70px'
    },
    '@media (min-width: 1440px)': {
      width: '80px',
      height: '80px'
    }
  },
  addIcon: {
    width: '30px',
    height: '30px',
    '@media (min-width: 1440px)': {
      width: '40px',
      height: '40px'
    }
  },
  title: {
    color: '#363537',
    margin: 'auto'
  },
  dialog: {
    width: '100vw',
    height: '100vh'
  }
}));
