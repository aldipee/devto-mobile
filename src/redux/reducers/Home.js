import { RECEIVED_RECENT_NEWS, FAILED_RECENT_NEWS, REQUEST_RECENT_NEWS } from 'redux/actions/Home';
const initialState = {
    news: [],
    headLine: [],
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_RECENT_NEWS: {
            return {
                ...state,
                loading: true
            }
        }
        case RECEIVED_RECENT_NEWS: {
            // Since we only need 3 data for headeline, we get 3 lastest data from payload
            const news = payload.length && payload.map(item => ({ ...item, isSaved: true }))
            return {
                ...state,
                news,
                headLine: payload.length ? payload.slice(0, 3) : [],
                loading: false
            }
        }
        case FAILED_RECENT_NEWS: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
};