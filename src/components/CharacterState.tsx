import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import RadioGroup from 'components/RadioGroup';
import RadioButton from 'components/RadioButton';

type CharacterStateProps = {
  characterName: string;
  title: string;
  valuePrefix: string;
  data: [string, number][];
  state: number;
  handleChange: (_: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  displayCondition: boolean;
}

const useStyles = makeStyles((theme) => createStyles({
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
}));

const CharacterState: React.FunctionComponent<CharacterStateProps> = ({
  title,
  valuePrefix,
  data,
  state,
  characterName,
  handleChange,
  displayCondition,
}) => {
  const classes = useStyles();

  return (
    <Grid className={ classes.characterCard } container direction="row" alignItems="center">
      <Grid className={ classes.verticalWriting } item>{ title }</Grid>
      {
        <Grid item xs={ 11 }>
          <RadioGroup>
            {
              data.map(([value]) => (
                <RadioButton
                  key={ value }
                  group={ characterName + title }
                  value={ value }
                  checked={ value === state.toString() }
                  disabled={ !displayCondition }
                  handleChange={ handleChange }
                >
                  { `${ valuePrefix }${ value }` }
                </RadioButton>
              ))
            }
          </RadioGroup>
        </Grid>
      }
    </Grid>
  );
};

export default CharacterState;
