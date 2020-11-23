import { all } from 'redux-saga/effects';
import SagaHome from 'redux/saga/sagaHome';


export function* watcherSaga() {
    try {
        yield all([
            SagaHome(),
        ]);
    } catch (e) {
        if (e) {
            yield watcherSaga();
        }
    }
}
