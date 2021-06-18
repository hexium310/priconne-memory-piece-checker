import { forwardRef, ChangeEvent, MouseEvent, PropsWithChildren } from 'react';
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
  handleChange?: (event: ChangeEvent<HTMLInputElement> & MouseEvent<HTMLInputElement>) => void;
};

const RadioButton= forwardRef<HTMLDivElement, PropsWithChildren<RadioButtonProps>>(({
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
        text-black/50
        text-sm
        ${classes?.div}
      ` }
      ref={ ref }
    >
      <input
        className={ cntl`
          hidden
          ${classes?.input}
          peer
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
