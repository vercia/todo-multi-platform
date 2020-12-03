import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TodayIcon from '@material-ui/icons/Today';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Typography from './Typography';
import MenuItem from './MenuItem';
import { LanguageContext } from './Language/Language';
import DarkMode from './DarkMode/DarkMode';

export default function SelectedListItem() {
  const classes = useStyles();
  const x = useContext(LanguageContext);

  const menuList = [
    {
      text: x.dictionary.home,
      icon: HomeOutlinedIcon,
      to: '/'
    },
    {
      text: x.dictionary.calendar,
      icon: TodayIcon,
      to: '/date'
    },
    {
      text: x.dictionary.settings,
      icon: SettingsOutlinedIcon,
      to: '/settings'
    }
  ];

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <List className={classes.list}>
          {menuList.map((item) => {
            return (
              <MenuItem
                key={item.text}
                text={item.text}
                pathname={item.to}
                icon={item.icon}
              />
            );
          })}
          <DarkMode />
        </List>
        <Typography />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    margin: 'auto',
    '@media (min-width: 768px)': {
      marginRight:"0"
    }
  },
  list: {
    display: 'flex',
    marginLeft: 5,
    height: "6vh",
    width:"100%",
    textAlign:'center',
    '@media (min-width: 768px)': {
      marginLeft: 0
    }
  }
}));
