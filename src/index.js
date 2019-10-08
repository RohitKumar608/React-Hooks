import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,combineReducers} from  'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

import rootSaga from "./store/reducers/saga/http-fetch-saga"
import incrementReducer from './store/reducers/increment-reducer';
import HttpReducer from './store/reducers/api-call';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const reducer = combineReducers({countReducer:incrementReducer,httpReducer:HttpReducer})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(thunk,sagaMiddleware));
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
