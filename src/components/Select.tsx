import * as React from 'react';
import { styled, Box, InputLabel, MenuItem, FormControl } from '@mui/material';
import MUISelect, { SelectChangeEvent, SelectProps } from '@mui/material/Select';

type Props = {
  options: { key: string; value: string; }[];
  onChange: (boardId: string) => void;
  selected?: string;
}

const Select = styled(
  (props: SelectProps) => (<MUISelect {...props} />),
)(({ theme }) => ({
  '> .Mui-Paper-root': {
    background: theme.content,
  },
}));

export default function BasicSelect({ options, selected, onChange }: Props) {
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const newValue = e.target.value as string;
    onChange(newValue);
  };

  return (
    <Box sx={{ minWidth: 200, paddingTop: 1, paddingBottom: 1, height: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Board</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected ?? ''}
          label="Age"
          onChange={handleChange}
          defaultValue={selected}
          disabled={!selected}
        >
          {options.map(o => <MenuItem key={o.value} value={o.value}>{o.key}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
