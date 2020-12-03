import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { BackgroundContext } from './BackgroundContext';
import landscape from './images/landscape-1.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import { Text } from './Language/Language';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const useStyles = makeStyles(() => ({
  containerIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '50%',
    height: '50%',
    marginTop: '-40px',
    padding: '10px',
    '@media (min-width: 375px)': {
      width: '40%',
      height: '50%',
      marginTop: '-50px'
    }
  },
  button: {
    marginTop: '-20px'
  },
  title: {
    fontSize: '25px',
    marginBottom:0,
    '@media (min-width: 768px)': {
      fontSize: '30px'
    },
    '@media (min-width: 1440px)': {
      fontSize: '40px'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: '15vh',
    '@media (min-width: 768px)': {
      height: '25vh'
    },
    '@media (min-width: 1024px)': {
      height: '30vh'
    }
  },
  dialog: {
    width: '100vw'
  }
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function DialogSettings() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { newImageOne, newImageTwo, newImageThree, newImageFour } = useContext(
    BackgroundContext
  );

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.containerIcon}>
        <ArrowForwardIosIcon
          className='text iconArrow'
          onClick={handleClickOpen}
        />
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className={classes.dialog}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          <p className={classes.title}>
            <Text tid='chooseImage'>Choose background image:</Text>
          </p>
        </DialogTitle>
        <DialogContent>
          <div className={classes.container}>
            <img
              src={img1}
              onClick={newImageOne}
              className={classes.image}
              alt='img one'
            />
            <img
              src={landscape}
              onClick={newImageTwo}
              className={classes.image}
              alt='img two'
            />
          </div>
          <div className={classes.container}>
            <img
              src={img2}
              onClick={newImageThree}
              className={classes.image}
              alt='img three'
            />
            <img
              src={img3}
              onClick={newImageFour}
              className={classes.image}
              alt='img four'
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className={classes.button}>
            <Text tid='saveChanges'>Save changes</Text>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
