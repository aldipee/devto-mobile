import { all } from 'redux-saga/effects';
import { getRecentPostWorker } from 'redux/saga/sagaHome';


export function* watcherSaga() {
    try {
        yield all([
            getRecentPostWorker(),
        ]);
    } catch (e) {
        if (e) {
            yield watcherSaga();
        }
    }
}
