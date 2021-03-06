import React, { useState } from 'react';
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type TodoInputProps = {
  onAddClick: (todo: string) => void;
};

export default function TodoInput({ onAddClick }: TodoInputProps) {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const handleAddClik = () => {
    onAddClick(value);
    setValue('');
  }

  return (
    <div className="todo-input">
      <FormControl sx={{ width: '100%' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">I need to...</InputLabel>
        <OutlinedInput
          fullWidth
          label='I need to...'
          value={value}
          onChange={handleInputChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleAddClik}
                edge="end"
              >
                <AddCircleIcon color='primary' fontSize='large' />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div >
  );
}
