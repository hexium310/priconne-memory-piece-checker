import React from 'react';
import cntl from 'cntl';

import StateButton from 'components/StateButton';

type CharacterStateProps = {
  characterName: string;
  title: string;
  valuePrefix: string;
  data: [string, number][];
  state: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement>) => void;
  displayCondition: boolean;
}

const CharacterState: React.FunctionComponent<CharacterStateProps> = ({
  title,
  valuePrefix,
  data,
  state,
  characterName,
  handleChange,
  displayCondition,
}) => {
  return (
    <div className={ cntl`flex items-center` }>
      <div className={ cntl`vertical-writing py-2 pr-2` }>{ title }</div>
      <div className={ cntl`auto-rows-auto py-2 grid grid-cols-[repeat(auto-fill,80px)] h-[fit-content] w-full` }>
        {
          data.map(([value]) => (
            <StateButton
              key={ value }
              group={ characterName + title }
              value={ value }
              checked={ value === state.toString() }
              disabled={ !displayCondition }
              handleChange={ handleChange }
            >
              { `${ valuePrefix }${ value }` }
            </StateButton>
          ))
        }
      </div>
    </div>
  );
};

export default CharacterState;
