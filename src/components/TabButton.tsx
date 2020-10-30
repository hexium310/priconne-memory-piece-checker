import React from 'react';
import cntl from 'cntl';

import RadioButton from 'components/RadioButton';

type TabButtonProps = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  labelValue: string;
  inputValue: string;
}

const TabButton: React.FC<TabButtonProps> = ({ currentTab, setCurrentTab, labelValue, inputValue }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleChangeTab = React.useCallback((event: React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });

    setCurrentTab(event.target.value);
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
        min-w-40
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
