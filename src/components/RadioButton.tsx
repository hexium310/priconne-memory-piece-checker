import React from 'react';
import cntl from 'cntl';

type RadioButtonProps = {
  checked: boolean;
  disabled: boolean;
  group: string;
  value: string;
  handleChange: (_: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  disabled,
  group,
  handleChange,
  value,
  children,
}) => {
  const id = group + value;

  return (
    <div
      className={ cntl`
        bg-transparent
        border
        border-solid
        box-border
        first:rounded-bl
        first:rounded-tl
        inline-grid
        last:rounded-br
        last:rounded-tr
        leading-7
        not-first:border-l-0
        place-items-center
        text-black
        text-opacity-50
        text-sm
        w-20
      ` }
    >
      <input
        className={ cntl`
          checked-label:bg-primary
          checked-label:text-white
          disabled-label:opacity-25
          hidden
        ` }
        checked={ checked }
        disabled={ disabled }
        id={ id }
        name={ group }
        type="radio"
        value={ value }
        onChange={ (e) => handleChange(e, e.target.value) }
      ></input>
      <label
        className={ cntl`
          ${ disabled ? '' : 'cursor-pointer' }
          p-2
          rounded-inherit
          w-full
        ` }
        htmlFor={ id }
      >
        { children }
      </label>
    </div>
  );
};

export default RadioButton;
