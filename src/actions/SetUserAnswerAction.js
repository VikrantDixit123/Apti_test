import ActionTypes from '../data/ActionTypes';

/******************** Action Creators *********************/
const DISPATCH_SET_USER_ANSWER = (questionId, selectedOptions) => ({
    type: ActionTypes.SET_ANSWER,
    payload: selectedOptions,
    questionId
});

/******************** Actions *********************/

export const setUserAnswer = (questionId, selectedOptions) => (dispatch, getState) => {
    dispatch(DISPATCH_SET_USER_ANSWER(questionId, selectedOptions));
}    