import React from 'react'
import { Paper as MUIPaper, styled } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import SectionContent from '../components/SectionContent'
import TodoCard from './TodoCard';
import { TodoStatus } from '../enums';

const Paper = styled(
  (props) => <MUIPaper {...props} elevation={3} />,
)(({ theme }) => ({
  minWidth: 300,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export default function Section() {
  return (
    <Paper>
      <SectionHeader title='test' />
      <SectionContent>
        {['1'].map(d => <TodoCard id={d} status={TodoStatus.DOING} boardId='111' content='testCard' />)}
      </SectionContent>
    </Paper>
  )
}
