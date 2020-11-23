import { all, call, put, takeLatest } from 'redux-saga/effects';
import { get } from 'API';
import { requestRecentNews, receivedRecentNews, failedRecentNews } from 'redux/actions/Home';
import { requestNewsDetail, receivedNewsDetails, failedNewsDetails} from 'redux/actions/Article'
////////////////


export function* getRecentPostWorker() {
    try {
        const result = yield call(get, 'api/get_recent_posts/?count=20&page=1');
        console.log(result, 'result')
        if (result.status == 'ok') {
            console.log('Meonggg')
            yield put(receivedRecentNews(result.posts))
        }
    } catch (error) {

    }
}

export function* getPostDetailWorker({idPost}) {
    console.log(`api/get_post/?post_id=${idPost}`)
    console.log(idPost, 'payloadDataPostDetail')
    try {
        const result = yield call(get, `api/get_post/?post_id=${idPost}`)
        if(result.status =='ok'){
            yield put(receivedNewsDetails(result.post))
        }
        
    } catch (error) {
        console.log(error, 'Error_getPostDetailWorkder')
    }
}

export default function* () {
    yield all([
        takeLatest(requestNewsDetail().type, getPostDetailWorker),
        takeLatest(requestRecentNews().type, getRecentPostWorker)
     
    ]);
}
