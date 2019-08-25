import React from 'react';
import Button from '@material-ui/core/Button';
import difference from 'lodash-es/difference';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { upgradingRarity, uniqueEquipment } from 'data/data.json';
import { styles, upgradingRarityArray, uniqueEquipmentArray, StyleProps } from 'components/CharactersTable';

interface CharacterRowProps {
  character: Character;
  showExcess: boolean;
}

type RowStyleProps = StyleProps & { isDeficiency: boolean }

const useStyles = makeStyles((theme) => createStyles({
  ...styles,
  name: {
    whiteSpace: 'nowrap',
  },
  textBox: {
    '& input': {
      textAlign: 'center',
      fontSize: '1.2rem',
      '&::-webkit-inner-spin-button': {
        appearance: 'none',
      },
    },
  },
  deficiency: ({ isDeficiency }: RowStyleProps) => ({
    color: isDeficiency ? theme.palette.error.main : theme.palette.primary.main,
    fontSize: '1.2rem',
  }),
}));

const saveStorage = (name: string, data: { [s: string]: string[] | number }): void => {
  const storage = window.localStorage.getItem(name);
  const json = storage === null ? {} : JSON.parse(storage);
  window.localStorage.setItem(name, JSON.stringify({ ...json, ...data }));
};

const CharacterRow: React.FunctionComponent<CharacterRowProps> = ({
  character: {
    initialRarity,
    maxRarity,
    name,
    hasUniqueEquipment,
  },
  showExcess,
}) => {
  const [havingRarity, setHavingRarity] = React.useState<string[]>([]);
  const [havingEquipmentLevel, setHavingEquipmentLevel] = React.useState<string[]>([]);
  const [rarityRequired, setRarityRequired] = React.useState(0);
  const [equipmentRequired, setEquipmentRequired] = React.useState(0);
  const [requiredNumber, setRequiredNumber] = React.useState(0);
  const [possessionPieces, setPossessionPieces] = React.useState(0);
  const deficiency =  requiredNumber - possessionPieces;
  const classes = useStyles({
    borderCells: [
      1,
      1 + upgradingRarityArray.length,
      1 + upgradingRarityArray.length + uniqueEquipmentArray.length,
      1 + upgradingRarityArray.length + uniqueEquipmentArray.length + 1,
    ],
    isDeficiency: deficiency > 0,
  });

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

  if (deficiency <= 0 && !showExcess) {
    return <></>;
  }

  return (
    <TableRow className={ classes.tableRow }>
      <TableCell className={ classes.name } padding="none" align="center">{ name }</TableCell>
      {
        upgradingRarityArray.map(([rarity, number], i) => (
          <TableCell padding="none" align="center" key={ i }>
            {
              initialRarity < Number(rarity)
              && Number(rarity) <= maxRarity
              && <Button
                size="small"
                variant="contained"
                color={ havingRarity.includes(rarity) ? 'primary' : 'default' }
                onClick={ () => handleChangeRarity(rarity) }
              >
                { number }
              </Button>
            }
          </TableCell>
        ))
      }
      {
        uniqueEquipmentArray.map(([level, number], i) => (
          <TableCell padding="none" align="center" key={ i }>
            {
              hasUniqueEquipment
              && <Button
                size="small"
                variant="contained"
                color={ havingEquipmentLevel.includes(level) ? 'primary' : 'default' }
                onClick={ () => handleChangeEquopment(level) }
              >
                { number }
              </Button>
            }
          </TableCell>
        ))
      }
      <TableCell padding="none" align="center">
        <TextField
          className={ classes.textBox }
          value={ possessionPieces }
          onChange={ (e) => handleChangePossessionPieces(e) }
          type="number"
          inputProps={ { min: 0 } }
          onFocus={ (e) => e.target.select() }
        />
        { requiredNumber }
      </TableCell>
      <TableCell
        className={ classes.deficiency }
        padding="none"
        align="center"
      >
        { deficiency }
      </TableCell>
    </TableRow>
  );
};

export default CharacterRow;
