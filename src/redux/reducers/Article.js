import { 
    REQUEST_NEWS_DETAIL,
    FAILED_NEWS_DETAIL,
    RECEIVED_NEWS_DETAIL
    } from 'redux/actions/Article';
    const initialState = {

        loading: false,
        currentPost : {}
    }
    
    export default (state = initialState, { type, payload }) => {
        switch (type) {
            case REQUEST_NEWS_DETAIL: {
                return {
                    ...state,
                    loading: true
                }
            }
            case RECEIVED_NEWS_DETAIL: {
                return {
                    ...state,
                    currentPost : payload,
                    loading : false
                }
            }
            case FAILED_NEWS_DETAIL: {
                return {
                    ...state,
                    loading : false
                }
            }
    
            default:
                return state;
        }
    };