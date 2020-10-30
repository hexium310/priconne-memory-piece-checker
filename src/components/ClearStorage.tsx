import React from 'react';
import cntl from 'cntl';

import Modal from 'components/Modal';
import ModalTitle from 'components/ModalTitle';
import ModalFooter from 'components/ModalFooter';

const clear = (): void => {
  window.localStorage.clear();
  window.location.reload();
};

const ClearStorage: React.FunctionComponent = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  const handleClickClearButton = React.useCallback(() => {
    setShowDialog(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setShowDialog(false);
  }, []);

  return (
    <>
      <button
        className={ cntl`hover:bg-black hover:bg-opacity-4 min-w-16 p-1 rounded text-black text-opacity-50 text-sm uppercase` }
        onClick={ handleClickClearButton }
      >
        Clear
      </button>
      <Modal open={ showDialog } onClose={ closeModal }>
        <ModalTitle>入力されたすべての情報を削除しますか？</ModalTitle>
        <ModalFooter>
          <button
            className={ cntl`hover:bg-red-600 hover:bg-opacity-4 p-2 rounded text-red-600` }
            onClick={ clear }
          >
            削除する
          </button>
          <button
            className={ cntl`hover:bg-black hover:bg-opacity-4 p-2 rounded ml-2` }
            onClick={ closeModal }
          >
            削除しない
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ClearStorage;
