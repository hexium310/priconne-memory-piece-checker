import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { rarities, uniqueEquipments, Character, Rarities, UniqueEquipments } from 'data';
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

const calculateRequired = (
  target: Rarities | UniqueEquipments,
  condition: (key: string) => boolean
): number => Object.keys(target).filter(condition).reduce((sum, key) => sum + target[key], 0);

const handleFocusPossessionPieces = (
  event: React.FocusEvent<HTMLInputElement>
): void => {
  event.target.select();
};

const CharacterCard = React.memo<CharacterCardProps>(({
  character: {
    initialRarity,
    maxRarity,
    name: characterName,
    hasUniqueEquipment,
  },
  showExcess,
}) => {
  const classes = useStyles();
  const [rarity, setRarity] = React.useState(0);
  const [equipmentLevel, setEquipmentLevel] = React.useState(0);
  const [possessionPieces, setPossessionPieces] = React.useState(0);

  const isInRarityRange = (rarity: number): boolean => rarity > initialRarity && rarity <= maxRarity;

  const requiredRarityPieces = calculateRequired(rarities, (v) => Number(v) > rarity && isInRarityRange(Number(v)));
  const requiredEquipmentPieces = calculateRequired(uniqueEquipments, (v) => Number(v) > equipmentLevel);
  const requiredPieces = requiredRarityPieces + requiredEquipmentPieces;
  const deficiency = requiredPieces - possessionPieces;
  const showCharacter = deficiency > 0 || showExcess;

  React.useEffect(() => {
    const data = loadStorage('characters')[characterName];

    setRarity(data.rarity || 0);
    setEquipmentLevel(data.equipment || 0);
    setPossessionPieces(data.possessionPieces || 0);
  }, []);

  const storeState = React.useCallback((
    key: string,
    value: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    const oldData = loadStorage('characters')[characterName];
    const newData: CharacterStateType = { ...oldData, [key]: value };

    saveStorage('characters', { [characterName]: newData });
    setState(value);
  }, []);

  const handleChangeRarity = React.useCallback((
    _: React.ChangeEvent<HTMLInputElement>,
    newRarity: string
  ) => storeState('rarity', Number(newRarity), setRarity), []);

  const handleChangeEquopmentLevel = React.useCallback((
    _: React.ChangeEvent<HTMLInputElement>,
    newEquipmentLevel: string
  ) => storeState('equipment', Number(newEquipmentLevel), setEquipmentLevel), []);

  const handleChangePossessionPieces = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => storeState('possessionPieces', Number(event.target.value), setPossessionPieces), []);

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
            <Grid item>{ characterName }</Grid>
          </Grid>
          <Grid className={ classes.borderRight } item xs={ 9 }>
            <CharacterState
              title="才能開花"
              characterName={ characterName }
              valuePrefix="☆"
              data={ Object.entries(rarities).filter(([rarity]) => isInRarityRange(Number(rarity))) }
              state={ rarity }
              handleChange={ handleChangeRarity }
              displayCondition
            />
            <Divider />
            <CharacterState
              title="専用装備"
              characterName={ characterName }
              valuePrefix="Lv. "
              data={ Object.entries(uniqueEquipments) }
              state={ equipmentLevel }
              handleChange={ handleChangeEquopmentLevel }
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
    rarity,
    equipmentLevel,
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
