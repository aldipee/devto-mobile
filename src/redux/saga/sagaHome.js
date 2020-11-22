import { all, call, put, takeLatest } from 'redux-saga/effects';
import { get } from 'API';
import { requestRecentNews, receivedRecentNews, failedRecentNews } from 'redux/actions/Home';
////////////////


export function* getRecentPostWorker() {
    try {
        const result = yield call(get, 'api/get_recent_posts/?count=5&page=1');
        console.log(result, 'result')
        if (result.status == 'ok') {
            console.log('Meonggg')
            yield put(receivedRecentNews(result.posts))
        }
    } catch (error) {

    }
}

export default function* () {
    yield all([takeLatest(requestRecentNews().type, getRecentPostWorker)]);
}
