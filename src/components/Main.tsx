import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import CharactersTable from 'components/CharactersTable';

const useStyles = makeStyles((theme) => createStyles({
  content: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(4),
  },
}));

const Main: React.FunctionComponent = () => {
  const classes = useStyles();

  const clearButton = (): void => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <main>
      <div className={ classes.content }>
        <Container maxWidth="lg">
          <Button
            color="primary"
            variant="outlined"
            onClick={ () => clearButton() }
          >
            clear
          </Button>
        </Container>
        <Container maxWidth="lg">
          <CharactersTable />
        </Container>
      </div>
    </main>
  );
};

export default Main;
