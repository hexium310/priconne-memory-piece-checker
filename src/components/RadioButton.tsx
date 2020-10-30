import React from 'react';
import cntl from 'cntl';

type RadioButtonProps = {
  checked: boolean;
  disabled?: boolean;
  group: string;
  value: string;
  classes?: {
    div?: string;
    input?: string;
    label?: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement>) => void;
};

const RadioButton= React.forwardRef<HTMLDivElement, React.PropsWithChildren<RadioButtonProps>>(({
  checked,
  disabled,
  group,
  handleChange,
  value,
  classes,
  children,
}, ref) => {
  const id = group + value;

  return (
    <div
      className={ cntl`
        bg-transparent
        box-border
        place-items-center
        text-black
        text-opacity-50
        text-sm
        ${classes?.div}
      ` }
      ref={ ref }
    >
      <input
        className={ cntl`
          hidden
          ${classes?.input}
        ` }
        checked={ checked }
        disabled={ disabled }
        id={ id }
        name={ group }
        type="radio"
        value={ value }
        onChange={ handleChange }
      ></input>
      <label
        className={ cntl`
          p-2
          w-full
          ${classes?.label}
        ` }
        htmlFor={ id }
      >
        { children }
      </label>
    </div>
  );
});
RadioButton.displayName = 'RadioButton';

export default RadioButton;
