import React from 'react';
import cntl from 'cntl';

type RowProps<T extends React.ReactNode = React.ReactNode>  = {
  children: [T, T, T, T];
  className?: string;
};

const Row: React.FC<RowProps> = ({ className, children }) => {
  const [Name, State, PossessionAndRequired, Deficiency] = React.Children.toArray(children);

  return (
    <div className={ cntl`
      card
      centering-height-full
      col-span-12
      divide-x
      grid
      grid-cols-12
      ${className}
    ` }>
      <div className={ cntl`col-start-1 col-end-1` }>
        { Name }
      </div>
      <div className={ cntl`col-start-2 col-end-11` }>
        { State }
      </div>
      <div className={ cntl`col-start-11 col-end-11` }>
        { PossessionAndRequired }
      </div>
      <div className={ cntl`col-start-12 col-end-12` }>
        { Deficiency }
      </div>
    </div>
  );
};

export default Row;
