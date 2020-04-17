import ActionTypes from '../data/ActionTypes';
import initialState from '../data/initialState';

const setTimeReducer = (state = initialState.time, actionCreator) => {
    switch (actionCreator.type) {
        case ActionTypes.SET_TIME:
            return actionCreator.payload;
        default:
            return state;
    }
}

export default setTimeReducer;