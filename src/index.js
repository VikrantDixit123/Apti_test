/***** React Dependencies *****/
import React from 'react';
import ReactDOM from 'react-dom';
/***** Other Dependencies *****/
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
/***** Primary Error boundry of application *****/
import ErrorHandler from './components/ErrorHandler';
/***** Styles *****/
import './styles/styles.css';
import './styles/registration.css';
import './styles/adminPortal.css';

/***** Components/Containers *****/
import App from './App';
import Login from './components/Login';
import QuestionContainer from './components/QuestionContainer';
import Registration from './components/Registration';
import Starttest from './components/Starttest'
import Adminportal from './components/Admin/Adminportal';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/*
              * Have added React.StrictMode.
              read more about it: https://reactjs.org/docs/strict-mode.html#gatsby-focus-wrapper 
             */}
            <React.StrictMode>
                <ErrorHandler>
                    <App>
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route exact path='/questions' component={QuestionContainer} />                            
                            <Route exact path='/registration' component={Registration} />
                            <Route exact path='/start' component={Starttest} />
                            <Route exact path='/admin' component={Adminportal} />
                        </Switch>
                    </App>
                </ErrorHandler>
            </React.StrictMode>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
