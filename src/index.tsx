import React from 'react';
import ReactDOM from 'react-dom';
import { Container, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import Board from './containers/Board'

import './index.css';
import theme from './theme';

const AppContainer = styled(Container)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-evenly',
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        <AppContainer className='app'>
          <Board />
        </AppContainer>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
