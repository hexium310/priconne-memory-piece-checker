import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  clearButton: {
    color: theme.palette.text.hint,
  },
}));

const handleClear = (): void => {
  window.localStorage.clear();
  window.location.reload();
};

const ClearStorage: React.FunctionComponent = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const classes = useStyles();

  const handleClickClearButton = React.useCallback(() => {
    setShowDialog(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setShowDialog(false);
  }, []);

  return (
    <>
      <Button
        className={ classes.clearButton }
        size='small'
        onClick={ handleClickClearButton }
      >
        Clear
      </Button>
      <Dialog
        open={ showDialog }
        onClose={ handleClose }
      >
        <DialogTitle>
          入力されたすべての情報を削除しますか？
        </DialogTitle>
        <DialogActions>
          <Button color="secondary" onClick={ handleClear }>
            削除する
          </Button>
          <Button onClick={ handleClose }>
            削除しない
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ClearStorage;
