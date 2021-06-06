import React from 'react';
import cntl from 'cntl';

import RadioButton from 'components/RadioButton';

type StateButtonProps = {
  checked: boolean;
  disabled?: boolean;
  group: string;
  value: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement>) => void;
};

const StateButton: React.FC<StateButtonProps> = ({
  checked,
  disabled,
  group,
  handleChange,
  value,
  children,
}) => {
  const div = cntl`
    border
    border-solid
    first:rounded-bl
    first:rounded-tl
    inline-grid
    last:rounded-br
    last:rounded-tr
    leading-7
    not-first:border-l-0
    place-items-center
    w-20
  `;
  const input = cntl`
    checked-label:bg-primary
    checked-label:text-white
    disabled-label:opacity-25
  `;
  const label = cntl`
    ${ disabled ? '' : 'cursor-pointer' }
    rounded-inherit
  `;

  return (
    <RadioButton
      checked={ checked }
      disabled={ disabled }
      group={ group }
      handleChange={ handleChange }
      value={ value }
      classes={ {
        div,
        input,
        label,
      } }
    >
      { children }
    </RadioButton>
  );
};

export default StateButton;
