import * as React from 'react';
import { styled, Box, InputLabel, MenuItem, FormControl } from '@mui/material';
import MUISelect, { SelectChangeEvent, SelectProps } from '@mui/material/Select';

const Select = styled(
  (props: SelectProps) => (<MUISelect {...props} />),
)(({ theme }) => ({
  '> .Mui-Paper-root': {
    background: theme.content,
  },
}));

export default function BasicSelect() {
  const [board, setBoard] = React.useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setBoard(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 200, paddingTop: 1, paddingBottom: 1, height: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Board</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={board}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
