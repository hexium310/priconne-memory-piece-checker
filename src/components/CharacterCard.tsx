import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import difference from 'lodash-es/difference';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { upgradingRarity, uniqueEquipment } from 'data/data.json';
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
  states: string[];
  handleClick: (value: string) => void;
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
  state: {
    padding: theme.spacing(0.5),
  },
  stateButtonContainer: {
    paddingTop: theme.spacing(1),
  },
  stateButton: {
    textTransform: 'none',
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

const CharacterState: React.FunctionComponent<CharacterStateProps> = ({
  title,
  piecesList,
  states,
  handleClick,
  initialRarity,
  maxRarity,
  hasUniqueEquipment,
}) => {
  const classes = useStyles();
  const valuePrefix = (initialRarity && '☆') || (hasUniqueEquipment && 'Lv. ');

  return (
    <Grid className={ classes.state } container direction="row" alignItems="center">
      <Grid className={ classes.verticalWriting } item>{ title }</Grid>
      <Grid item xs={ 11 }>
        <CardActions>
          <Grid container direction="row" spacing={ 1 }>
            {
              piecesList.map(([value, number], i) => (
                <React.Fragment key={ i }>
                  {
                    (
                      hasUniqueEquipment || (
                        initialRarity && maxRarity
                        && Number(value) > initialRarity && Number(value) <= maxRarity
                      )
                    ) && <Grid item>
                      <Grid
                        className={ classes.stateButtonContainer }
                        container
                        direction="column"
                        alignItems="center"
                      >
                        <Button
                          className={ classes.stateButton }
                          size="small"
                          variant="contained"
                          color={ states.includes(value) ? 'primary' : 'default' }
                          onClick={ () => handleClick(value) }
                        >
                          { `${ valuePrefix }${ value }` }
                        </Button>
                        <Typography variant="caption" color="textSecondary">
                          { `${ number }個` }
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                </React.Fragment>
              ))
            }
          </Grid>
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
  const [havingRarity, setHavingRarity] = React.useState<string[]>([]);
  const [havingEquipmentLevel, setHavingEquipmentLevel] = React.useState<string[]>([]);
  const [rarityRequired, setRarityRequired] = React.useState(0);
  const [equipmentRequired, setEquipmentRequired] = React.useState(0);
  const [requiredNumber, setRequiredNumber] = React.useState(0);
  const [possessionPieces, setPossessionPieces] = React.useState(0);
  const deficiency =  requiredNumber - possessionPieces;
  const classes = useStyles();

  React.useEffect(() => {
    const storage = window.localStorage.getItem(name);
    const data = storage === null ? {} : JSON.parse(storage);

    setHavingRarity(data.rarity || []);
    setHavingEquipmentLevel(data.equipment || []);
    setPossessionPieces(data.possessionPieces || 0);
  },[setHavingRarity, setHavingEquipmentLevel, setPossessionPieces]);

  React.useEffect(() => {
    const notHavingRarity =
      difference(Object.keys(upgradingRarity).filter((rarity) => initialRarity < Number(rarity) && Number(rarity) <= maxRarity), havingRarity);
    const newRequiredNumber = notHavingRarity.length === 0 ? 0 : notHavingRarity.map((rarity) => {
      return upgradingRarity[rarity as "2" | "3" | "4" | "5" | "6"];
    }).reduce((sum, value) => sum + value);

    saveStorage(name, { rarity: havingRarity });
    setRarityRequired(newRequiredNumber);
  }, [havingRarity]);

  React.useEffect(() => {
    const notHavingEquipment =
      difference(Object.keys(uniqueEquipment).filter((level) => initialRarity < Number(level)), havingEquipmentLevel);
    const newRequiredNumber = notHavingEquipment.length === 0 ? 0 : notHavingEquipment.map((level) => {
      return uniqueEquipment[level as "30" | "50" | "70" | "90" | "110" | "130" | "140"];
    }).reduce((sum, value) => sum + value);

    saveStorage(name, { equipment: havingEquipmentLevel });
    setEquipmentRequired(newRequiredNumber);
  }, [havingEquipmentLevel]);

  React.useEffect(() => {
    setRequiredNumber(rarityRequired + equipmentRequired);
  }, [rarityRequired, equipmentRequired]);

  const handleChangeRarity = (rarity: string): void => {
    const newHavingRarity = havingRarity.includes(rarity) ?
      havingRarity.filter((r) => r !== rarity) :
      [...havingRarity, rarity];

    setHavingRarity(newHavingRarity);
  };

  const handleChangeEquopment = (level: string): void => {
    const newHavingEquipmentLevel = havingEquipmentLevel.includes(level) ?
      havingEquipmentLevel.filter((l) => l !== level) :
      [...havingEquipmentLevel, level];

    setHavingEquipmentLevel(newHavingEquipmentLevel);
  };

  const handleChangePossessionPieces = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const newPossessionPieces = Number(event.target.value);

    saveStorage(name, { possessionPieces: newPossessionPieces });
    setPossessionPieces(newPossessionPieces);
  };

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
              states={ havingRarity }
              handleClick={ handleChangeRarity }
              initialRarity={ initialRarity }
              maxRarity={ maxRarity }
            />
            <Divider />
            <CharacterState
              title="専用装備"
              piecesList={ uniqueEquipmentArray }
              states={ havingEquipmentLevel }
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
              onChange={ (e) => handleChangePossessionPieces(e) }
              type="number"
              inputProps={ { min: 0 } }
              onFocus={ (e) => e.target.select() }
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
