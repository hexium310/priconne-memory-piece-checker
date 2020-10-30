import React from 'react';
import ReactDOM from 'react-dom';
import cntl from 'cntl';

type ModalProps = {
  open: boolean;
  onClose: (event: unknown) => void;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  onClose;
  const modal = open ? (
    <div className={ cntl`
        fixed
        inset-0
        z-1000
        h-full
        flex
        items-center
        justify-center
    ` }>
      <div className={ cntl`-z-1 bg-black bg-opacity-50 fixed inset-0` } onClick={ onClose }></div>
      <div className={ cntl`
        bg-white
        max-w-xl
        rounded
        border
        m-8
        flex
        flex-col
        shadow-xl
      ` }>
        { children }
      </div>
    </div>
  ) : null;

  return ReactDOM.createPortal(modal, document.body);
};

export default Modal;
