import React from 'react'
import { func, string } from 'prop-types';
import Switch from '@material-ui/core/Switch';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const BlueSwitch = withStyles({
  switchBase: {
    color: blue[300],
    '&$checked': {
      color: blue[500],
    },
    '&$checked + $track': {
      backgroundColor: blue[500],
    },
  },
  checked: {},
  track: {},
})(Switch);


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <BlueSwitch color="default" onClick={toggleTheme} checked={!isLight} >
    </BlueSwitch>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;