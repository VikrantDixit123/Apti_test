import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import initialState from '../data/initialState';

/**
 * Here we are configuring the store which we will import in our App.js and will provide it to Provider.
 */
const configureStore = () => {
    const store = createStore(combineReducers(reducers), initialState, applyMiddleware(thunk));
    return store;
}

export default configureStore;