import React from 'react';
import cntl from 'cntl';

const Header: React.FunctionComponent = () => {
  return (
    <header className={ cntl`
      bg-primary
      text-white
      h-16
      items-center
      flex
      shadow-md
    ` }>
      <h2 className={ cntl`px-6 text-xl font-normal` }>
        プリコネメモピ所持数チェッカー
      </h2>
    </header>
  );
};

export default Header;
