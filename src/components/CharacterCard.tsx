import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import max from 'lodash-es/max';

import { rarities, uniqueEquipments, Character } from 'data';
import {
  saveStorage,
  upgradingRarityArray,
  uniqueEquipmentArray,
} from 'components/CharactersList';
import { XOR } from 'src/utils/types';

interface CharacterCardProps {
  character: Character;
  showExcess: boolean;
  showPieceTypes: {
    [type: string]: boolean;
  };
}

type CharacterStateProps = {
  title: string;
  piecesList: [string, number][];
  state: number;
  handleClick: (_: React.MouseEvent<HTMLElement, MouseEvent>, value: string) => void;
} & XOR<{ initialRarity: number; maxRarity: number }, { hasUniqueEquipment: boolean }>

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
  stateButtonContainer: {
    paddingTop: theme.spacing(1),
  },
  stateButton: {
    width: 80,
    textTransform: 'none',
    '&$stateButtonSelected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
  stateButtonSelected: {},
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
  toggleButtonGroup: {
    flexWrap: 'wrap',
  },
}));

const CharacterState: React.FunctionComponent<CharacterStateProps> = ({
  title,
  piecesList,
  state,
  handleClick,
  initialRarity,
  maxRarity,
  hasUniqueEquipment,
}) => {
  const classes = useStyles();
  const valuePrefix = (initialRarity && '☆') || (hasUniqueEquipment && 'Lv. ');

  return (
    <Grid container direction="row" alignItems="center">
      <Grid className={ classes.verticalWriting } item>{ title }</Grid>
      <Grid item xs={ 11 }>
        <CardActions>
          <ToggleButtonGroup
            className={ classes.toggleButtonGroup }
            exclusive
            value={ state.toString() }
            onChange={ handleClick }
          >
            {
              piecesList.map(([value], i) => (
                (
                  hasUniqueEquipment || (
                    initialRarity && maxRarity
                    && Number(value) > initialRarity && Number(value) <= maxRarity
                  )
                ) && <ToggleButton
                  key={ i }
                  className={ classes.stateButton }
                  classes={ { selected: classes.stateButtonSelected } }
                  value={ value }
                >
                  { `${ valuePrefix }${ value }` }
                </ToggleButton>
              ))
            }
          </ToggleButtonGroup>
        </CardActions>
      </Grid>
    </Grid>
  );
};

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
  const classes = useStyles();

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
      .filter((rarity) => rarity > havingRarity && rarity > initialRarity && rarity <= maxRarity);
    const newRequiredNumber = notHavingRarity.map((rarity) => {
      return rarities[rarity.toString() as '2' | '3' | '4' | '5' | '6'];
    }).reduce((sum, value) => sum + value, 0);

    saveStorage(name, { rarity: havingRarity });
    setRarityRequired(newRequiredNumber);
  }, [havingRarity]);

  React.useEffect(() => {
    const notHavingEquipment = Object.keys(uniqueEquipments)
      .map((v) => Number(v))
      .filter((level) => level > havingEquipmentLevel);
    const newRequiredNumber = notHavingEquipment.map((level) => {
      return uniqueEquipments[level.toString() as '30' | '50' | '70' | '90' | '110' | '130' | '140'];
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

  if (!showPieceTypes[pieceType] || deficiency <= 0 && !showExcess) {
    return <></>;
  }

  return (
    <Grid item xs={ 12 }>
      <Card>
        <Grid container alignItems="stretch">
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
              piecesList={ upgradingRarityArray }
              state={ havingRarity }
              handleClick={ handleChangeRarity }
              initialRarity={ initialRarity }
              maxRarity={ maxRarity }
            />
            <Divider />
            <CharacterState
              title="専用装備"
              piecesList={ uniqueEquipmentArray }
              state={ havingEquipmentLevel }
              handleClick={ handleChangeEquopment }
              hasUniqueEquipment={ hasUniqueEquipment }
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
      </Card>
    </Grid>
  );
};

export default CharacterCard;
