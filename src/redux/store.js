import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import logger from 'redux-logger';
import rootReducer from './reducers';
import watcherSaga from './watcherSaga';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['articleReducer', 'homeReducer'],
};
const persistRootReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistRootReducer,
  applyMiddleware(logger, sagaMiddleware),
);

export const persistor = persistStore(store);
// Run all sagass
sagaMiddleware.run(watcherSaga);
export default store;
