/**
 * All the reducers will be imported here.
 * We do it here so that our configureStore file is clutter free.
 */
import setUserAnswerReducer from '../reducers/setUserAnswerReducer';

const reducers = {
    userAnswers: setUserAnswerReducer
};

export default reducers;