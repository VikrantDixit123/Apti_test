import ActionTypes from '../data/ActionTypes';
import initialState from '../data/initialState';

const setUserAnswerReducer = (state = initialState.userAnswers, actionCreator) => {
    switch (actionCreator.type) {
        case ActionTypes.SET_ANSWER:
            return { ...state, [actionCreator.questionId]: actionCreator.payload };
        default:
            return state;
    }
}

export default setUserAnswerReducer;