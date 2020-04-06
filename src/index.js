import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/***** Components *****/
import Counter from './Counter';
/***** Styles *****/
/**
 * NOTE: Importing styles.css in index.js. 
 * so the css written in styles.css will be available in all components
*/
import './styles.css';

import { Provider } from 'react-redux';
import configureStore from './config/configureStore';
const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <Counter startCount={10} />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
