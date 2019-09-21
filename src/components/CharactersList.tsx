import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { characters, pieceTypes } from 'data';
import { saveStorage } from 'src/utils/storage';
import CharacterCard from 'components/CharacterCard';

interface ShowPieceTypes {
  [s: string]: boolean;
}

const useStyles = makeStyles((theme) => createStyles({
  borderRight: {
    borderStyle: 'none solid none none',
    borderWidth: 1,
    borderColor: theme.palette.divider,
  },
  content: {
    marginTop: theme.spacing(2),
  },
  character: {
    margin: theme.spacing(2, 0),
  },
  listHeader: {
    textAlign: 'center',
  },
}));

const PieceTypeCheckbox = React.memo<{
  showPieceTypes: ShowPieceTypes;
  setShowPieceTypes: React.Dispatch<React.SetStateAction<ShowPieceTypes>>;
  pieceType: string;
  name: string;
}>(({ showPieceTypes, setShowPieceTypes, pieceType, name }) => {
  const handleChangeShowPieceTypes = React.useCallback((
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setShowPieceTypes((shows) => {
      const newShows = {
        ...shows,
        [pieceType]: checked,
      };

      return newShows;
    });
  }, []);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={ showPieceTypes[pieceType] }
          onChange={ handleChangeShowPieceTypes }
          color="primary"
        />
      }
      label={ name }
    />
  );
}, (prevProps, nextProps) => {
  return prevProps.showPieceTypes[prevProps.pieceType] === nextProps.showPieceTypes[nextProps.pieceType];
});
PieceTypeCheckbox.displayName = 'PieceTypeCheckbox';

const CharactersList: React.FunctionComponent = () => {
  const [showExcess, setShowExcess] = React.useState(true);
  const [
    showPieceTypes,
    setShowPieceTypes,
  ] = React.useState<ShowPieceTypes>(Object.fromEntries(Object.keys(pieceTypes).map((type) => [type, true])));
  const classes = useStyles();

  React.useEffect(() => {
    const storage = window.localStorage.getItem('showPieceTypes');
    const data = storage === null ? showPieceTypes : JSON.parse(storage);

    setShowPieceTypes(data);
  },[setShowPieceTypes]);

  React.useEffect(() => {
    saveStorage('showPieceTypes', showPieceTypes);
  }, [showPieceTypes]);

  const handleChangeShowExcess = React.useCallback(() => {
    setShowExcess((value) => !value);
  }, []);

  return (
    <div className={ classes.content }>
      <FormControlLabel
        control={
          <Checkbox
            checked={ showExcess }
            onChange={ handleChangeShowExcess }
            color="primary"
          />
        }
        label="必要数持っているキャラクターも表示"
      />
      <FormGroup row>
        {
          Object.entries(pieceTypes).map(([pieceType, name]) => (
            <PieceTypeCheckbox
              key={ pieceType }
              showPieceTypes={ showPieceTypes }
              setShowPieceTypes={ setShowPieceTypes }
              pieceType={ pieceType }
              name={ name }
            />
          ))
        }
      </FormGroup>
      <div className={ classes.content }>
        <Grid container spacing={ 1 }>
          <Grid item xs={ 12 }>
            <Grid component={ Card } className={ classes.listHeader } container>
              <Grid className={ classes.borderRight } item xs={ 1 }>名前</Grid>
              <Grid className={ classes.borderRight } item xs={ 9 }>キャラクターの状態</Grid>
              <Grid className={ classes.borderRight } item xs={ 1 }>所持数/必要数</Grid>
              <Grid item xs={ 1 }>不足数</Grid>
            </Grid>
          </Grid>
          {
            characters.map((character) => (
              <CharacterCard
                key={ character.name }
                character={ character }
                showExcess={ showExcess }
                showPieceTypes={ showPieceTypes }
              />
            ))
          }
        </Grid>
      </div>
    </div>
  );
};

export default CharactersList;
