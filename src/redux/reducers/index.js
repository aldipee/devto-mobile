import { combineReducers } from 'redux';
import globalReducer from './Global';
import homeReducer from './Home';

const appReducer = combineReducers({
    globalReducer,
    homeReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;