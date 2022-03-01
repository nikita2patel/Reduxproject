import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './Redux/reducer/reducer';
import thunk from 'redux-thunk';
import { getData } from './Redux/action/myaction';


const store = createStore(reducer,applyMiddleware(thunk));
// console.log("333",store)
ReactDOM.render(
  <>
  <Provider store={store}>
    <App/>
    </Provider>
    
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
