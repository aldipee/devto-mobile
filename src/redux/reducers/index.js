import { combineReducers } from 'redux';
import globalReducer from './Global';

const appReducer = combineReducers({
    globalReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;