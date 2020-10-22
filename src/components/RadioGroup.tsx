import React from 'react';
import cntl from 'cntl';

const RadioGroup: React.FC = ({ children }) => {
  return (
    <div
      className={ cntl`
        auto-rows-auto
        grid
        grid-cols-fill
      ` }
      style={ {
        maxWidth: '91.666667%',
        flexBasis: '91.666667%',
      } }
    >
      { children }
    </div>
  );
};

export default RadioGroup;
