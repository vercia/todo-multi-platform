import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Dark from './DarkMode/Dark';
import LanguageSelector from './Language/LanguageSelector';
import { Text } from './Language/Language';
import DialogSettings from './DialogSettings';

export default function Settings() {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem>
          <Text tid='blackTheme'>
            <ListItemText id='switch-list-label-black' primary='Black theme' />
          </Text>
          <ListItemSecondaryAction>
            <Dark />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <Text tid='backgroundImage'>
            <ListItemText primary='Background image'/>
          </Text>
          <DialogSettings />
        </ListItem>
        <ListItem>
          <Text tid='language'>
            <ListItemText primary='Language' />
          </Text>
          <LanguageSelector />
        </ListItem>
      </List>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 410,
    marginTop: '30px',
    marginLeft: '0px',
    fontSize: '20px',
    lineHeight:"2em",
    '@media (min-width: 768px)': {
      marginLeft: '3%',
      fontSize: '22px',
      overflow: 'hidden'
    },
    '@media (min-width: 1024px)': {
      fontSize: '25px'
    },
    '@media (min-width: 1440px)': {
      fontSize: '30px'
    }
  }
}));