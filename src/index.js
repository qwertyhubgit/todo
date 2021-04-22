import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './sagaWatcher'
import { rootReducer } from './redux/rootReducer'
import './index.css';
import App from './App';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(thunk, saga)))

saga.run(sagaWatcher)

const app = (
  <Provider store={ store }>
    <App />
  </Provider>
)

ReactDOM.render(app,document.getElementById('root'));

