import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './modules/index'
import myLogger from './middlewares/myLogger'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import {Router} from 'react-router-dom'
import { createBrowserHistory } from 'history'
// const store = createStore(rootReducer,applyMiddleware(myLogger));
const customHistory = createBrowserHistory();
const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk)
      ));

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store} >
      <App />
    </Provider>
  </Router>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
