import { useCallback, useContext, useRef, FC, ChangeEvent, MouseEvent } from 'react';
import cntl from 'cntl';

import RadioButton from 'components/RadioButton';
import { TabContext } from 'components/Content';

type TabButtonProps = {
  labelValue: string;
  inputValue: string;
}

const TabButton: FC<TabButtonProps> = ({ labelValue, inputValue }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { state: { currentTab }, dispatch } = useContext(TabContext);

  const handleChangeTab = useCallback((event: ChangeEvent<HTMLInputElement> & MouseEvent<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });

    dispatch({
      type: 'CHANGE_TAB',
      payload: event.target.value,
    });
  }, []);

  return (
    <RadioButton
      ref={ ref }
      value={ labelValue }
      group="pieceType"
      checked={ labelValue === currentTab }
      handleChange={ handleChangeTab }
      classes={ {
        div: cntl`
          flex-none
          inline-grid
          leading-7
          max-w-xs
          min-w-[10rem]
          place-items-center
          tab
          mb-1
        `,
        input: cntl`
        `,
        label: cntl`
          relative
          px-3
          pb-0
        `,
      } }
    >
      { inputValue }
    </RadioButton>
  );
};

export default TabButton;
