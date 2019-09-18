import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import max from 'lodash-es/max';

import { rarities, uniqueEquipments, Character } from 'data';
import CharacterState from 'components/CharacterState';
import {
  saveStorage,
  upgradingRarityArray,
  uniqueEquipmentArray,
} from 'components/CharactersList';

interface CharacterCardProps {
  character: Character;
  showExcess: boolean;
  showPieceTypes: {
    [type: string]: boolean;
  };
}

const useStyles = makeStyles((theme) => createStyles({
  textBox: {
    '& input': {
      textAlign: 'center',
      fontSize: '1.2rem',
      '&::-webkit-inner-spin-button': {
        appearance: 'none',
      },
    },
  },
  deficiency: {
    fontSize: '1.2rem',
  },
  borderRight: {
    borderStyle: 'none solid none none',
    borderWidth: 1,
    borderColor: theme.palette.divider,
  },
  verticalWriting: {
    writingMode: 'vertical-rl',
  },
  requiredAndPossession: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  required: {
    paddingTop: 7,
    fontSize: '1.2rem',
  },
}));

const restore = (data: { [key: string]: string[] | number }, key: string): number => (
  Array.isArray(data[key])
    ? max((data[key] as string[]).map((n) => Number(n))) || 0
    : (data[key] as number) || 0
);

const extractDispossession = (
  object: { [key: number]: number },
  condition: (value: number) => boolean
): number => Object.keys(object).map((value) => (
  Number(value)
)).filter((value) => condition(value)).map((value) => (
  object[value]
)).reduce((sum, value) => sum+ value, 0);

const CharacterCard: React.FunctionComponent<CharacterCardProps> = ({
  character: {
    initialRarity,
    maxRarity,
    name,
    hasUniqueEquipment,
    pieceType,
  },
  showExcess,
  showPieceTypes,
}) => {
  const classes = useStyles();
  const [possessionRarity, setPossessionRarity] = React.useState(0);
  const [possessionEquipmentLevel, setPossessionEquipmentLevel] = React.useState(0);
  const [possessionPieces, setPossessionPieces] = React.useState(0);

  const isInRarityRange = (rarity: number): boolean => rarity > initialRarity && rarity <= maxRarity;

  const requiredRarityPieces = extractDispossession(rarities, (v) => (
    v > possessionRarity && isInRarityRange(v)
  ));
  const requiredEquipmentPieces = extractDispossession(uniqueEquipments, (v) => (
    v > possessionEquipmentLevel
  ));
  const requiredPieces = requiredRarityPieces + requiredEquipmentPieces;
  const deficiency = requiredPieces - possessionPieces;
  const showCharacter = showPieceTypes[pieceType] && (deficiency > 0 || showExcess);

  React.useEffect(() => {
    const storage = window.localStorage.getItem(name);
    const data = storage === null ? {} : JSON.parse(storage);

    setPossessionRarity(restore(data, 'rarity'));
    setPossessionEquipmentLevel(restore(data, 'equipment'));
    setPossessionPieces(restore(data, 'possessionPieces'));
  },[setPossessionRarity, setPossessionEquipmentLevel, setPossessionPieces]);

  const handleChangeState = React.useCallback((
    value: string, key: string, setState: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    const newValue = Number(value);

    saveStorage(name, { [key]: newValue });
    setState(newValue);
  }, []);

  const handleChangeRarity = React.useCallback((
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    rarity: string
  ) => {
    handleChangeState(rarity, 'rarity', setPossessionRarity);
  }, []);

  const handleChangeEquopment = React.useCallback((
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    equipmentLevel: string
  ) => {
    handleChangeState(equipmentLevel, 'equipment', setPossessionEquipmentLevel);
  }, []);

  const handleChangePossessionPieces = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleChangeState(event.target.value, 'possessionPieces', setPossessionPieces);
  }, []);

  const handleFocusPossessionPieces = React.useCallback((
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    event.target.select();
  }, []);

  const Character = React.useMemo(() => {
    return showCharacter ? (
      <Grid item xs={ 12 }>
        <Grid component={ Card } container alignItems="stretch">
          <Grid
            className={ classes.borderRight }
            alignItems="center"
            justify="center"
            container
            item
            xs={ 1 }
          >
            <Grid item>{ name }</Grid>
          </Grid>
          <Grid className={ classes.borderRight } item xs={ 9 }>
            <CharacterState
              title="才能開花"
              valuePrefix="☆"
              data={ upgradingRarityArray.filter(([rarity]) => isInRarityRange(Number(rarity))) }
              state={ possessionRarity }
              handleButtonClick={ handleChangeRarity }
              displayCondition
            />
            <Divider />
            <CharacterState
              title="専用装備"
              valuePrefix="Lv. "
              data={ uniqueEquipmentArray }
              state={ possessionEquipmentLevel }
              handleButtonClick={ handleChangeEquopment }
              displayCondition={ hasUniqueEquipment }
            />
          </Grid>
          <Grid
            className={ classes.borderRight }
            container
            item
            xs={ 1 }
            direction="column"
            alignItems="center"
            justify="center"
          >
            <TextField
              className={ classes.textBox }
              value={ possessionPieces }
              onChange={ handleChangePossessionPieces }
              type="number"
              inputProps={ { min: 0 } }
              onFocus={ handleFocusPossessionPieces }
            />
            <Typography className={ classes.required }>{ requiredPieces }</Typography>
          </Grid>
          <Grid
            container
            item
            xs={ 1 }
            alignItems="center"
            justify="center"
          >
            <Typography className={ classes.deficiency } color={ deficiency > 0 ? 'error' : 'primary' }>
              { deficiency }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    ) : null;
  }, [
    possessionRarity,
    possessionEquipmentLevel,
    deficiency,
    requiredPieces,
    possessionPieces,
    showCharacter,
  ]);

  return Character;
};

export default CharacterCard;
