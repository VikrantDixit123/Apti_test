import ActionTypes from '../data/ActionTypes';

/******************** Action Creators *********************/
const DISPATCH_SET_TIME = (time) => ({
    type: ActionTypes.SET_TIME,
    payload: time
});

/******************** Actions *********************/

export const setTime = (time) => (dispatch, getState) => {
    dispatch(DISPATCH_SET_TIME(time));
} 
    