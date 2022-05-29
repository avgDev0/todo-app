import React from 'react'
import { Paper as MUIPaper, styled } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import SectionContent from '../components/SectionContent'

const Paper = styled(
  (props) => <MUIPaper {...props} elevation={3} />,
)(({ theme }) => ({
  minWidth: 300,
  height: '90%', //TODO: why can't this be 100%?
}));

export default function Section() {
  return (
    <Paper>
      <SectionHeader title='test' />
      <SectionContent>
        testing
      </SectionContent>
    </Paper>
  )
}
