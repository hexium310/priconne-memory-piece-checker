import { useCallback, useState, FC } from 'react';
import cntl from 'cntl';

import Modal from 'components/Modal';
import ModalTitle from 'components/ModalTitle';
import ModalFooter from 'components/ModalFooter';

const clear = (): void => {
  window.localStorage.clear();
  window.location.reload();
};

const ClearStorage: FC = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClickClearButton = useCallback(() => {
    setShowDialog(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowDialog(false);
  }, []);

  return (
    <>
      <button
        className={ cntl`hover:bg-black hover:bg-opacity-[0.04] min-w-[4rem] p-1 rounded text-black text-opacity-50 text-sm uppercase` }
        onClick={ handleClickClearButton }
      >
        Clear
      </button>
      <Modal open={ showDialog } onClose={ closeModal }>
        <ModalTitle>入力されたすべての情報を削除しますか？</ModalTitle>
        <ModalFooter>
          <button
            className={ cntl`hover:bg-red-600 hover:bg-opacity-[0.04] p-2 rounded text-red-600` }
            onClick={ clear }
          >
            削除する
          </button>
          <button
            className={ cntl`hover:bg-black hover:bg-opacity-[0.04] p-2 rounded ml-2` }
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
