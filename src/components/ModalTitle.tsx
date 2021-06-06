import { FC } from 'react';
import cntl from 'cntl';

const ModalTitle: FC = ({ children }) => {
  return (
    <div className={ cntl`text-xl py-4 px-5` }>
      <h2>{ children }</h2>
    </div>
  );
};

export default ModalTitle;
