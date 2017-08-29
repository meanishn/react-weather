import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { AppContainer } from 'react-hot-loader'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  
    <AppContainer>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
      </Provider>
    </AppContainer>
  ,
  document.querySelector('.app')
);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default;
    ReactDOM.render(      
          
            <AppContainer>
              <Provider store={createStoreWithMiddleware(reducers)}>
                <NextApp/>
              </Provider>
            </AppContainer>
          ,
      document.querySelector('.app')
    );
  });
}
// ReactDOM.render(
//   
//   , document.querySelector('.container'));
