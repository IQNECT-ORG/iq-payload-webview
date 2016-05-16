import React from 'react';
import ReactDOM from 'react-dom';
import { createAppStore, sagaMiddleware } from './store';
import saga from './sagas';
import { Provider } from 'react-redux';
import App from './containers/App';
import Home from './scenes/Home';

// Store
const store = createAppStore();
sagaMiddleware.run(saga);

ReactDOM.render((
  <Provider store={store}>
    <App>
      <Home/>
    </App>
  </Provider>
), document.getElementById('app'));