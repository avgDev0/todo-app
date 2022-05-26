import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './containers/Todos/store';
import Todos from './containers/Todos';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todos />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

