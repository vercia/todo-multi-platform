import React, { useContext } from 'react';
import { languageOptions } from './languages';
import { LanguageContext } from './Language';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

export default function LanguageSelector() {
  const languageContext = useContext(LanguageContext);
  const classes = useStyles();

  const handleLanguageChange = (event) => {
    const selectedLanguage = languageOptions.find(
      (item) => item.id === event.target.value
    );
    languageContext.setLanguage(selectedLanguage);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Options</InputLabel>
      <NativeSelect
        onChange={handleLanguageChange}
        value={languageContext.language.id}
        input={<BootstrapInput />}
      >
        {languageOptions.map((item) => (
          <option key={item.id} value={item.id}>
            {item.text}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    border: '1px solid #ced4da',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: 0,
    margin: 'auto',
    minWidth: 90
  }
}));
