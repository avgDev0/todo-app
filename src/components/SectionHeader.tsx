import React from 'react'
import { Divider, Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';

type SectionHeaderProps = {
  title: string;
};

const Typography = styled(MUITypography)(({ theme }) => ({
  fontSize: '1.5rem',
  width: '100%',
  minHeight: '50px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  padding: theme.spacing(1),
}));

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  console.log({ title });
  return (
    <>
      <Typography>
        {title}
      </Typography>
      <Divider />
    </>
  )
}

export default SectionHeader;
