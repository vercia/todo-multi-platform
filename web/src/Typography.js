import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    typography: {
      htmlFontSize: 11,
    }
  });

export default function SelectedListItem() {

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Typography />
    </ThemeProvider>
    </div>
  );
}