import React from 'react'
import { Paper as MUIPaper, styled } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import SectionContent from '../components/SectionContent'
import TodoCard from './TodoCard';
import { TodoStatus } from '../enums';

type SectionProps = {
  name: string;
};

const Paper = styled(
  (props) => <MUIPaper {...props} elevation={3} />,
)(({ theme }) => ({
  minWidth: 400,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export default function Section({ name }: SectionProps) {
  return (
    <Paper>
      <SectionHeader title={name} />
      <SectionContent>
        {['1'].map(d => <TodoCard id={d} status={TodoStatus.DOING} boardId='111' content='testCard' />)}
      </SectionContent>
    </Paper>
  )
}
