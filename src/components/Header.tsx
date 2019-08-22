import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header: React.FunctionComponent = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6">
          プリコネメモピ所持数チェッカー
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
