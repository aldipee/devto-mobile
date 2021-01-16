import {
  all,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import {get} from 'API';
import {
  requestRecentNews,
  receivedRecentNews,
  failedRecentNews,
  requestBlogPost,
  receivedBlogPost,
} from 'redux/actions/Home';
import {
  requestNewsDetail,
  receivedNewsDetails,
  failedNewsDetails,
} from 'redux/actions/Article';
////////////////

export function* getRecentPostWorker({contentCategory}) {
  try {
    const result = yield call(get, `/api/articles`);
    console.log(result, 'result');
    if (result) {
      console.log('Meonggg');
      const savedItems = yield select(
        (state) => state.globalReducer.savedItems,
      );
      yield put(receivedRecentNews(result, savedItems, contentCategory));
    }
  } catch (error) {}
}

export function* getPostDetailWorker({idPost}) {
  console.log(`api/get_post/?post_id=${idPost}`);
  console.log(idPost, 'payloadDataPostDetail');
  try {
    const result = yield call(get, `api/get_post/?post_id=${idPost}`);
    if (result.status == 'ok') {
      yield put(receivedNewsDetails(result.post));
    }
  } catch (error) {
    console.log(error, 'Error_getPostDetailWorkder');
  }
}

export default function* () {
  yield all([
    takeLatest(requestNewsDetail().type, getPostDetailWorker),
    takeEvery(requestRecentNews().type, getRecentPostWorker),
  ]);
}
