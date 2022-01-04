/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import reducers from './app/store/reducers';

// 크롬 확장프로그램 내장 함수 혹은 default compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
    applyMiddleware(promiseMiddleware)
))

const appRedux = () => (
    <Provider store={createStoreWithMiddleware}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux);
