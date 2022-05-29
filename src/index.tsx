import React from 'react';
import ReactDOM from 'react-dom';
import { Container, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import Boards from './containers/Boards'
import TopBar from './containers/TopBar';

import './index.css';
import theme from './Theme';

const AppContainer = styled(Container)({
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        <AppContainer className='app'>
          <TopBar />
          <Boards />
        </AppContainer>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
