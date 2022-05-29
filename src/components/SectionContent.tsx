import React from 'react'
import { Box, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  height: '100%',
  background: theme.palette.secondary.main,
}));

const SectionContent: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default SectionContent;
