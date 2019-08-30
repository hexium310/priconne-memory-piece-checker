import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { characters, pieceTypes, upgradingRarity, uniqueEquipment } from 'data/data.json';
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

export const saveStorage = (
  name: string,
  data: { [s: string]: string[] | number | boolean }
): void => {
  const storage = window.localStorage.getItem(name);
  const json = storage === null ? {} : JSON.parse(storage);
  window.localStorage.setItem(name, JSON.stringify({ ...json, ...data }));
};

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
  const [
    showPieceTypes,
    setShowPieceTypes,
  ] = React.useState(Object.fromEntries(Object.keys(pieceTypes).map((type) => [type, true])));
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

  React.useEffect(() => {
    const storage = window.localStorage.getItem('showPieceTypes');
    const data = storage === null ? {} : JSON.parse(storage);

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
                <CharacterRow
                  key={ index }
                  character={ character as Character }
                  showExcess={ showExcess }
                  showPieceTypes={ showPieceTypes }
                />
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default CharactersTable;
