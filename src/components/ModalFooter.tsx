import React from 'react';
import cntl from 'cntl';

const ModalFooter: React.FC = ({ children }) => {
  return (
    <div className={ cntl`flex justify-end items-center p-1` }>
      { children }
    </div>
  );
};

export default ModalFooter;
