import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import Main from 'components/Main';

const useStyles = makeStyles(() => createStyles({
  focusVisible: {
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  },
}));

export const App: React.FunctionComponent = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
        focusVisibleClassName: classes.focusVisible,
      },
    },
  });

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <Header />
      <Main />
    </MuiThemeProvider>
  );
};
