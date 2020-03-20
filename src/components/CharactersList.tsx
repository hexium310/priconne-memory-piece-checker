import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { characters, pieceTypes, PieceType } from 'data';
import CharacterCard from 'components/CharacterCard';
import TabPanel from 'components/TabPanel';
import ClearStorage from 'components/ClearStorage';

const useStyles = makeStyles((theme) => createStyles({
  borderRight: {
    borderStyle: 'none solid none none',
    borderWidth: 1,
    borderColor: theme.palette.divider,
  },
  content: {
    marginTop: theme.spacing(2),
  },
  tabBar: {
    position: 'sticky',
    top: 0,
    left: 'auto',
    right: 0,
    zIndex: 1000,
  },
  listHeader: {
    textAlign: 'center',
    position: 'sticky',
    top: theme.spacing(6),
    left: 'auto',
    right: 0,
    zIndex: 1000,
  },
}));

const CharactersList: React.FunctionComponent = () => {
  const [showExcess, setShowExcess] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState('hard');
  const classes = useStyles();

  const handleChangeShowExcess = React.useCallback(() => {
    setShowExcess((value) => !value);
  }, []);

  const handleChange = React.useCallback((_: React.ChangeEvent<{}>, newTab: string) => {
    setCurrentTab(newTab);
  }, []);

  return (
    <div className={ classes.content }>
      <Box display='flex' justifyContent='space-between'>
        <FormControlLabel
          control={
            <Checkbox
              checked={ showExcess }
              onChange={ handleChangeShowExcess }
              color="primary"
            />
          }
          label="必要数持っているキャラクターも表示"
        />
        <ClearStorage></ClearStorage>
      </Box>
      <Paper className={ classes.tabBar }>
        <Tabs
          value={ currentTab }
          variant='scrollable'
          indicatorColor='primary'
          textColor='primary'
          onChange={ handleChange }
        >
          {
            Object.entries(pieceTypes).map(([pieceType, name]) => (
              <Tab
                key={ pieceType }
                value={ pieceType }
                label={ name }
                id={ `tab-${pieceType}` }
              />
            ))
          }
          <Tab
            key='all'
            value='all'
            label='すべて'
            id='tab-all'
          />
        </Tabs>
      </Paper>
      <div className={ classes.content }>
        <Grid container spacing={ 1 }>
          <Grid item xs={ 12 } className={ classes.listHeader }>
            <Grid component={ Card } container>
              <Grid className={ classes.borderRight } item xs={ 1 }>名前</Grid>
              <Grid className={ classes.borderRight } item xs={ 9 }>キャラクターの状態</Grid>
              <Grid className={ classes.borderRight } item xs={ 1 }>所持数/必要数</Grid>
              <Grid item xs={ 1 }>不足数</Grid>
            </Grid>
          </Grid>
          {
            Object.entries(pieceTypes)
              .filter(([pieceType]) => pieceType === currentTab || currentTab === 'all')
              .map(([pieceType]) => (
                <TabPanel key={ pieceType } index={ pieceType }>
                  {
                    characters
                      .filter((character) => (
                        character.pieceType === currentTab ||
                          character.pieceType.includes(currentTab as PieceType) ||
                          currentTab === 'all' &&
                          (character.pieceType === pieceType || character.pieceType.includes(pieceType as PieceType))
                      ))
                      .map((character) => (
                        <CharacterCard
                          key={ character.name }
                          character={ character }
                          showExcess={ showExcess }
                        />
                      ))
                  }
                </TabPanel>
              ))
          }
        </Grid>
      </div>
    </div>
  );
};

export default CharactersList;
