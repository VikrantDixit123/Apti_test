/**
 * All the reducers will be imported here.
 * We do it here so that our configureStore file is clutter free.
 */
import setUserAnswerReducer from '../reducers/setUserAnswerReducer';
import setTimeReducer from '../reducers/setTimeReducer'

const reducers = {
    userAnswers: setUserAnswerReducer,
    time: setTimeReducer
};

export default reducers;