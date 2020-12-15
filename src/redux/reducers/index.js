import {combineReducers} from 'redux';
import globalReducer from './Global';
import homeReducer from './Home';
import articleReducer from './Article';
const appReducer = combineReducers({
  globalReducer,
  homeReducer,
  articleReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
