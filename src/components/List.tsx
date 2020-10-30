import React from 'react';
import cntl from 'cntl';

const List: React.FunctionComponent = ({ children }) => {
  return (
    <div className={ cntl`
      grid
      pt-4
      grid-rows-1
    ` }>
      <div className={ cntl`
        bg-white
        border
        border-solid
        box-border
        centering-height-full
        col-span-12
        divide-x
        grid
        grid-cols-12
        rounded
        shadow
        sticky
        text-center
        top-12
        z-50
      ` }>
        <div className={ cntl`col-start-1 col-end-1` }>
          <p>名前</p>
        </div>
        <div className={ cntl`col-start-2 col-end-11` }>
          <p>キャラクターの状態</p>
        </div>
        <div className={ cntl`col-start-11 col-end-11` }>
          <div className={ cntl`divide-black divide-dashed divide-y` }>
            <p>所持数</p><p>必要数</p>
          </div>
        </div>
        <div className={ cntl`col-start-12 col-end-12` }>
          <p>不足数</p>
        </div>
      </div>
      { children }
    </div>
  );
};

export default List;
