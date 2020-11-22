import Config from 'react-native-config';
import { Platform } from 'react-native';
import store from 'redux/store';
import { call, put as putEffect, take, select, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
// import { INTERNET_CONNECTION_CHANGED, INTERNET_LOST } from '../shared/actions/actions_global';
// import { fetch } from 'react-native-ssl-pinning';

const urls = ['http://sehatnegeriku.kemkes.go.id/'];



function getHeaders(headers = {}, endpoint) {
    // Config your headers here
    const allHeaders = {
        Accept: 'application/json',
        'Content-Language': 'en',
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headers,
    };

    // Put your blacklist endpoint here
    const blacklist = [];

    // If your store has access token, use it for request and set it to authorization
    // if (store.access_token) {

    //     // Enable this for drop 2 onwards (item for drop 2)
    //     if (access_token && !blacklist.includes(endpoint)) {
    //         // extra security
    //         // Certain endpoints don't need this bearer token, put them in the blacklist
    //         allHeaders['Authorization'] = 'Bearer ' + access_token;
    //     }
    // }
    return allHeaders;
};

function getErrorMessage() {
    return 'Sedang ada masalah dengan server kami, mohon coba kembali nanti';
};

function logErrorEvent(api_url, response, library, body, headers, status) {
    console.log('===============================');
    console.log('api_url ', api_url);
    console.log('response type ', typeof response);
    console.log('API ERROR! response: ', response);
    console.log('Method: ', library);
    console.log('body: ', body);
    console.log('headers: ', headers);
    console.log('status: ', status);
}

/* REQUEST TO SERVER */
function* request(endpoint, options) {
    // if 'url' === false, endpoint it's full URL
    console.log('=========[LOG DOING REQUEST]=========')
    console.log('ENDPOINT :', endpoint);
    console.log('DATA : ', options);
    try {
        if (Platform.OS === 'ios') {
            const { response } = yield race({
                response: call(doRequest, endpoint, options),
                connectionError: take(INTERNET_LOST),
            });
            if (response) {
                return response;
            }
            return yield call(retryRequest, endpoint, options);
        } else {
            const res = yield call(doRequest, endpoint, options)
            console.log('RESPONSE : ', res);
            return res;
        }
    } catch (error) {
        console.log('=========[ERROR DOING REQUEST]=========')
        console.log('ERROR : ', error);
        console.log('ENDPOINT :', endpoint);
        yield delay(500);
        // const isInternetReached = yield select((state) => state.globalReducer.isInternetReached);
        // if (!isInternetReached) {
        //     return yield call(retryRequest, endpoint, options);
        // } else {
        //     return { error: getErrorMessage() };
        // }
    }
}

function* doRequest(endpoint, { method = 'GET', language, headers, params, url = 0, formData, raw }) {
    // disable the following line once enabling the items for drop 2 (item for drop 2)
    // const allHeaders = getHeaders(language, headers, endpoint);
    console.log('MEONG')
    let currentUrl;
    if (url === false) {
        currentUrl = '';
    } else {
        currentUrl = urls[url];
    }

    // enable this for drop 2 (item for drop 2)
    // If url is empty string, it's not our URL so we don't attach any headers to it.
    const allHeaders = currentUrl === '' ? undefined : getHeaders(language, headers, endpoint);
    let body;
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
        if (params && formData) {
            body = params;
        } else if (params || formData) {
            body = new URLSearchParams(params || formData).toString();
        } else if (raw) {
            body = JSON.stringify(raw);
            allHeaders['Content-Type'] = 'application/json';
        }
    }
    let result = yield fetch(`${currentUrl}${endpoint}`, {
        method,
        headers: { ...allHeaders },
        body,
    })
        .then((res) => {
            return res;
        })
        .catch((error) => {

            logErrorEvent(currentUrl + endpoint, error.bodyString, method, body, allHeaders, error.status);
            return error;
        });


    if (result && result.status === 204) {
        return {
            data: {},
        };
    }

    let response;
    try {
        if (formData || raw || params) {
            if (
                result &&
                result.headers &&
                result.headers['content-type'] &&
                result.headers['content-type'] === 'text/html; charset=utf-8'
            ) {
                console.log(response);
                response = yield result.text();
            } else {
                console.log(response);
                response = yield result.json();
            }
        } else {

            response = yield result.json();
        }
    } catch (error) {
        console.log(result, 'RORRR');
        console.log(error, 'ERROR___');
        if (result.bodyString) {
            return result;
        } else {
            logErrorEvent(currentUrl + endpoint, JSON.parse(result.bodyString), method, body, allHeaders, error.status);
            return { error: getErrorMessage() };
        }
        // if (result.data) return result;
    }
    console.log(response);
    return response;
}

function* retryRequest(endpoint, options) {
    try {
        while (true) {
            const { payload: isInternetReached } = yield take(INTERNET_CONNECTION_CHANGED);
            if (!isInternetReached) continue;
            return yield call(request, endpoint, options);
        }
    } catch (error) {
        return { error: getErrorMessage() };
    }
}

/* REQUEST BY METHOD GET */
export function* get(endpoint, config) {
    return yield request(endpoint, { method: 'GET', ...config });
}

/* REQUEST BY METHOD DELETE */
export function* del(endpoint, config) {
    return yield request(endpoint, { method: 'DELETE', ...config });
}

/* REQUEST BY METHOD POST */
export function* post(endpoint, config) {
    return yield request(endpoint, { method: 'POST', ...config });
}

/* REQUEST BY METHOD PUT */
export function* putData(endpoint, config) {
    return yield request(endpoint, { method: 'PUT', ...config });
}

/* REQUEST BY METHOD PATCH */
export function* patch(endpoint, config) {
    return yield request(endpoint, { method: 'PATCH', ...config });
}
