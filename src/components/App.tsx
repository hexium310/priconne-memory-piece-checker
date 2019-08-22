import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from 'components/Header';
import Main from 'components/Main';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main />
    </>
  );
};
