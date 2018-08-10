import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import appReducers from './Reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

ReactDOM.render(
    
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    
    
, document.getElementById('root'));
registerServiceWorker();
