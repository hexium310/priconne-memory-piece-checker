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
  const [havingRarity, setHavingRarity] = React.useState(0);
  const [havingEquipmentLevel, setHavingEquipmentLevel] = React.useState(0);
  const [rarityRequired, setRarityRequired] = React.useState(0);
  const [equipmentRequired, setEquipmentRequired] = React.useState(0);
  const [requiredNumber, setRequiredNumber] = React.useState(0);
  const [possessionPieces, setPossessionPieces] = React.useState(0);
  const deficiency =  React.useMemo(() => (
    requiredNumber - possessionPieces
  ), [requiredNumber, possessionPieces]);
  const showCharacter = React.useMemo(() => (
    showPieceTypes[pieceType] && (deficiency > 0 || showExcess)
  ), [showPieceTypes, pieceType, deficiency, showExcess]);
  const classes = useStyles();

  const isInRarityRange = React.useCallback((rarity: number) => (
    rarity > initialRarity && rarity <= maxRarity
  ), []);

  React.useEffect(() => {
    const storage = window.localStorage.getItem(name);
    const data = storage === null ? {} : JSON.parse(storage);
    const rarity = Array.isArray(data.rarity)
      ? max(data.rarity.map((n: string) => Number(n))) || 0
      : data.rarity || 0;
    const equipment = Array.isArray(data.equipment)
      ? max(data.equipment.map((n: string) => Number(n))) || 0
      : data.equipment || 0;

    setHavingRarity(rarity);
    setHavingEquipmentLevel(equipment);
    setPossessionPieces(data.possessionPieces || 0);
  },[setHavingRarity, setHavingEquipmentLevel, setPossessionPieces]);

  React.useEffect(() => {
    const notHavingRarity = Object.keys(rarities)
      .map((v) => Number(v))
      .filter((rarity) => rarity > havingRarity && isInRarityRange(rarity));
    const newRequiredNumber = notHavingRarity.map((rarity) => {
      return rarities[rarity];
    }).reduce((sum, value) => sum + value, 0);

    saveStorage(name, { rarity: havingRarity });
    setRarityRequired(newRequiredNumber);
  }, [havingRarity]);

  React.useEffect(() => {
    const notHavingEquipment = Object.keys(uniqueEquipments)
      .map((v) => Number(v))
      .filter((level) => level > havingEquipmentLevel);
    const newRequiredNumber = notHavingEquipment.map((level) => {
      return uniqueEquipments[level];
    }).reduce((sum, value) => sum + value, 0);

    saveStorage(name, { equipment: havingEquipmentLevel });
    setEquipmentRequired(newRequiredNumber);
  }, [havingEquipmentLevel]);

  React.useEffect(() => {
    setRequiredNumber(rarityRequired + equipmentRequired);
  }, [rarityRequired, equipmentRequired]);

  const handleChangeRarity = React.useCallback((
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    rarity: string
  ) => {
    setHavingRarity(Number(rarity));
  }, []);

  const handleChangeEquopment = React.useCallback((
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    level: string
  ) => {
    setHavingEquipmentLevel(Number(level));
  }, []);

  const handleChangePossessionPieces = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const newPossessionPieces = Number(event.target.value);

    saveStorage(name, { possessionPieces: newPossessionPieces });
    setPossessionPieces(newPossessionPieces);
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
              state={ havingRarity }
              handleButtonClick={ handleChangeRarity }
              displayCondition
            />
            <Divider />
            <CharacterState
              title="専用装備"
              valuePrefix="Lv. "
              data={ uniqueEquipmentArray }
              state={ havingEquipmentLevel }
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
            <Typography className={ classes.required }>{ requiredNumber }</Typography>
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
    havingRarity,
    havingEquipmentLevel,
    deficiency,
    requiredNumber,
    possessionPieces,
    showCharacter,
  ]);

  return Character;
};

export default CharacterCard;
