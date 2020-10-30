import React from 'react';
import cntl from 'cntl';

import { pieceTypes } from 'data';
import TabButton from 'components/TabButton';
import ScrollButton from 'components/ScrollButton';

type TabProps = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const directions = {
  left: -1,
  right: 1,
};

const Tab: React.FC<TabProps> = ({ currentTab, setCurrentTab }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right'): () => void => {
    return (): void => {
      ref.current?.scrollBy(directions[direction] * ref.current?.clientWidth, 0);
    };
  };

  return (
    <div className={ cntl`
      bg-white
      border
      border-solid
      box-border
      divide-y
      flex
      left-auto
      mt-2
      right-0
      rounded
      shadow
      sticky
      text-center
      top-0
      z-50
    ` }>
      <ScrollButton direction="left" scroll={ scroll } />
      <div ref={ ref } className={ cntl`
        flex
        overflow-y-scroll
        scrollbar:hidden
        h-10
        whitespace-no-wrap
        transition-all
        duration-500
        scroll-smooth
        relative
        h-fit
      ` }>
        {
          Object.entries(pieceTypes).concat([['all', 'すべて']]).map(([pieceType, name]) => (
            <TabButton
              key={ pieceType }
              labelValue={ pieceType }
              inputValue={ name }
              currentTab={ currentTab }
              setCurrentTab={ setCurrentTab }
            />
          ))
        }
      </div>
      <ScrollButton direction="right" scroll={ scroll } />
    </div>
  );
};

export default Tab;
