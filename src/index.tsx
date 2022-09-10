import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import store from './store';
import AppBar from './containers/AppBar';
import './index.css';
import Boards from './containers/Boards';

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{
          width: '100%',
          height: '100vh',
          display: 'grid',
          gridTemplateRows: 'auto 1fr'
        }}
          className="app-container">
          <AppBar />
          <Boards />
        </Container>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

