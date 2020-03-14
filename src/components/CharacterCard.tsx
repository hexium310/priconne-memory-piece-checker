import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { rarities, uniqueEquipments, Character } from 'data';
import { saveStorage, loadStorage, CharacterState as CharacterStateType } from 'utils/storage/v2';
import CharacterState from 'components/CharacterState';

interface CharacterCardProps {
  character: Character;
  showExcess: boolean;
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

const extractDispossession = (
  object: { [key: number]: number },
  condition: (value: number) => boolean
): number => Object.keys(object).map((value) => (
  Number(value)
)).filter((value) => condition(value)).map((value) => (
  object[value]
)).reduce((sum, value) => sum+ value, 0);

const CharacterCard = React.memo<CharacterCardProps>(({
  character: {
    initialRarity,
    maxRarity,
    name,
    hasUniqueEquipment,
  },
  showExcess,
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
  const showCharacter = deficiency > 0 || showExcess;

  React.useEffect(() => {
    const data = loadStorage('characters')[name];

    setPossessionRarity(data.rarity || 0);
    setPossessionEquipmentLevel(data.equipment || 0);
    setPossessionPieces(data.possessionPieces || 0);
  }, []);

  const handleChangeState = React.useCallback((
    key: string,
    value: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    const oldData = loadStorage('characters')[name];
    const newData: CharacterStateType = { ...oldData, [key]: value };

    saveStorage('characters', { [name]: newData });
    setState(value);
  }, []);

  const handleChangeRarity = React.useCallback((
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    rarity: string
  ) => {
    handleChangeState('rarity', Number(rarity), setPossessionRarity);
  }, []);

  const handleChangeEquopment = React.useCallback((
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    equipmentLevel: string
  ) => {
    handleChangeState('equipment', Number(equipmentLevel), setPossessionEquipmentLevel);
  }, []);

  const handleChangePossessionPieces = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleChangeState('possessionPieces', Number(event.target.value), setPossessionPieces);
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
              data={ Object.entries(rarities).filter(([rarity]) => isInRarityRange(Number(rarity))) }
              state={ possessionRarity }
              handleButtonClick={ handleChangeRarity }
              displayCondition
            />
            <Divider />
            <CharacterState
              title="専用装備"
              valuePrefix="Lv. "
              data={ Object.entries(uniqueEquipments) }
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
}, (prevProps, nextProps) => {
  return prevProps.showExcess === nextProps.showExcess;
});
CharacterCard.displayName = 'CharacterCard';

export default CharacterCard;
