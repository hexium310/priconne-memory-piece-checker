import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { characters, upgradingRarity, uniqueEquipment } from 'data/data.json';
import CharacterRow from 'components/CharacterRow';

export interface StyleProps {
  borderCells?: number[];
}

export const upgradingRarityArray = Object.entries(upgradingRarity);
export const uniqueEquipmentArray = Object.entries(uniqueEquipment);

export const styles = {
  tableRow: ({ borderCells }: StyleProps) => {
    if (borderCells === undefined) {
      return {};
    }

    const nthChild = borderCells.map((n) => `:nth-child(${ n })`).join(', ');

    return ({
      [`& > ${ nthChild }`]: {
        borderRight: '1px solid rgba(224, 224, 224, 1)',
      },
    });
  },
};

const useStyles = makeStyles((theme) => createStyles({
  ...styles,
  content: {
    marginTop: theme.spacing(2),
  },
}));

const buildRarityOrLevelCell = (
  [rarityOrLevel]: [keyof UpgradingRarities | keyof UniqueEquipment, number],
  index: number,
): React.ReactElement => {
  return (
    <TableCell
      padding="checkbox"
      align="center"
      key={ index }
    >
      { rarityOrLevel }
    </TableCell>
  );
};

const CharactersTable: React.FunctionComponent = () => {
  const [showExcess, setShowExcess] = React.useState(true);
  const nameClasses = useStyles({
    borderCells: [1, 2, 3, 4],
  });

  const numberClasses = useStyles({
    borderCells: [
      1,
      1 + upgradingRarityArray.length,
      1 + upgradingRarityArray.length + uniqueEquipmentArray.length,
      1 + upgradingRarityArray.length + uniqueEquipmentArray.length + 1,
    ],
  });

  const handleChangeShowExcess = (): void => {
    setShowExcess((value) => !value);
  };

  return (
    <div className={ nameClasses.content }>
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
      <Table>
        <TableHead>
          <TableRow className={ nameClasses.tableRow }>
            <TableCell padding="checkbox" align="center">
              名前
            </TableCell>
            <TableCell
              padding="checkbox"
              align="center"
              colSpan={ upgradingRarityArray.length }
            >
              才能開花
            </TableCell>
            <TableCell
              padding="checkbox"
              align="center"
              colSpan={ uniqueEquipmentArray.length }
            >
              専用装備
            </TableCell>
            <TableCell padding="checkbox" align="center">
              所持数/必要数
            </TableCell>
            <TableCell padding="checkbox" align="center">
              不足数
            </TableCell>
          </TableRow>
          <TableRow className={ numberClasses.tableRow }>
            <TableCell />
            { upgradingRarityArray.map(buildRarityOrLevelCell) }
            { uniqueEquipmentArray.map(buildRarityOrLevelCell) }
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {
            characters.map((character, index) => {
              return (
                <CharacterRow key={ index } character={ character as Character } showExcess={ showExcess } />
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default CharactersTable;
