import React from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type CharacterStateProps = {
  title: string;
  valuePrefix: string;
  data: [string, number][];
  state: number;
  handleButtonClick: (_: React.MouseEvent<HTMLElement, MouseEvent>, value: string) => void;
  displayCondition: boolean;
}

const useStyles = makeStyles((theme) => createStyles({
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
  characterCard: {
    '& > div': {
      padding: theme.spacing(1, 0),
      '&:first-child': {
        paddingRight: theme.spacing(1),
      },
    },
  },
  toggleButtonGroup: {
    flexWrap: 'wrap',
  },
}));

const CharacterState: React.FunctionComponent<CharacterStateProps> = ({
  title,
  valuePrefix,
  data,
  state,
  handleButtonClick,
  displayCondition,
}) => {
  const classes = useStyles();

  return (
    <Grid className={ classes.characterCard } container direction="row" alignItems="center">
      <Grid className={ classes.verticalWriting } item>{ title }</Grid>
      {
        <Grid item xs={ 11 }>
          <ToggleButtonGroup
            className={ classes.toggleButtonGroup }
            exclusive
            value={ state.toString() }
            onChange={ handleButtonClick }
          >
            {
              data.map(([value]) => (
                <ToggleButton
                  key={ value }
                  className={ classes.stateButton }
                  classes={ { selected: classes.stateButtonSelected } }
                  value={ value }
                  disabled={ !displayCondition }
                  disableRipple
                >
                  { `${ valuePrefix }${ value }` }
                </ToggleButton>
              ))
            }
          </ToggleButtonGroup>
        </Grid>
      }
    </Grid>
  );
};

export default CharacterState;
