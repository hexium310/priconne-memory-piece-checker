import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import CharactersList from 'components/CharactersList';

const useStyles = makeStyles((theme) => createStyles({
  content: {
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
          <CharactersList />
        </Container>
      </div>
    </main>
  );
};

export default Main;
