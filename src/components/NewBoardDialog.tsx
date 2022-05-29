import React from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { actions } from '../store/reducer';

type NewBoardDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function NewBoardDialog({ open, onClose }: NewBoardDialogProps) {
  const dispatch = useDispatch();
  const [boardName, setBoardName] = React.useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = e;
    setBoardName(value);
  };

  const handleSubmit = (e: React.MouseEvent<unknown>) => {
    e.stopPropagation();
    dispatch(actions.addBoard(boardName));
    setBoardName('');
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle>Create new board</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="boardName"
          label="Board name"
          type="text"
          fullWidth
          variant="standard"
          value={boardName}
          onChange={handleNameChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Create new board</Button>
      </DialogActions>
    </Dialog>
  )
}