import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { reducers } from './reducers';
import { configStore } from './store';
import App from './App.js';
import createMiddlewares from './store/middlewares';

const store = configStore(reducers, createMiddlewares());

const RootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));
