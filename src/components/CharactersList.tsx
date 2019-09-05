import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { characters, pieceTypes, rarities, uniqueEquipments, Character } from 'data';
import CharacterCard from 'components/CharacterCard';

export const upgradingRarityArray = Object.entries(rarities);
export const uniqueEquipmentArray = Object.entries(uniqueEquipments);

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

export const saveStorage = (
  name: string,
  data: { [s: string]: string[] | number | boolean }
): void => {
  const storage = window.localStorage.getItem(name);
  const json = storage === null ? {} : JSON.parse(storage);
  window.localStorage.setItem(name, JSON.stringify({ ...json, ...data }));
};

const CharactersList: React.FunctionComponent = () => {
  const [showExcess, setShowExcess] = React.useState(true);
  const [
    showPieceTypes,
    setShowPieceTypes,
  ] = React.useState(Object.fromEntries(Object.keys(pieceTypes).map((type) => [type, true])));
  const classes = useStyles({
    borderCells: [1, 2, 3, 4],
  });

  React.useEffect(() => {
    const storage = window.localStorage.getItem('showPieceTypes');
    const data = storage === null ? showPieceTypes : JSON.parse(storage);

    setShowPieceTypes(data);
  },[setShowPieceTypes]);

  React.useEffect(() => {
    saveStorage('showPieceTypes', showPieceTypes);
  }, [showPieceTypes]);

  const handleChangeShowExcess = (): void => {
    setShowExcess((value) => !value);
  };

  const handleChangeShowPieceTypes = (type: string, checked: boolean): void => {
    setShowPieceTypes({
      ...showPieceTypes,
      [type]: checked,
    });
  };

  return (
    <div className={ classes.content }>
      <FormControlLabel
        control={
          <Checkbox
            checked={ showExcess }
            onChange={ () => handleChangeShowExcess() }
            color="primary"
          />
        }
        label="必要数持っているキャラクターも表示"
      />
      <FormGroup row>
        {
          Object.entries(pieceTypes).map(([type, name]) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={ showPieceTypes[type] }
                  onChange={ (_, checked) => handleChangeShowPieceTypes(type, checked) }
                  color="primary"
                />
              }
              label={ name }
              key={ type }
            />
          ))
        }
      </FormGroup>
      <div className={ classes.content }>
        <Grid container spacing={ 1 }>
          <Grid item xs={ 12 }>
            <Card>
              <Grid className={ classes.listHeader } container>
                <Grid className={ classes.borderRight } item xs={ 1 }>名前</Grid>
                <Grid className={ classes.borderRight } item xs={ 9 }>キャラクターの状態</Grid>
                <Grid className={ classes.borderRight } item xs={ 1 }>所持数/必要数</Grid>
                <Grid item xs={ 1 }>不足数</Grid>
              </Grid>
            </Card>
          </Grid>
          {
            characters.map((character, index) => (
              <CharacterCard
                key={ index }
                character={ character as Character }
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
