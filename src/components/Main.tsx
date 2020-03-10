import React from 'react';
import Container from '@material-ui/core/Container';

import CharactersList from 'components/CharactersList';

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <Container maxWidth="lg">
        <CharactersList />
      </Container>
    </main>
  );
};

export default Main;
