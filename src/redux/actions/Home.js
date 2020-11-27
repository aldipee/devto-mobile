export const REQUEST_RECENT_NEWS = 'REQUEST_RECENT_NEWS'
export const RECEIVED_RECENT_NEWS = 'RECEIVED_RECENT_NEWS'
export const FAILED_RECENT_NEWS = 'FAILED_RECENT_NEWS'


export const requestRecentNews = () => {
    return {
        type: REQUEST_RECENT_NEWS,
    }
}
export const receivedRecentNews = (data, savedItems) => {
    return {
        type: RECEIVED_RECENT_NEWS,
        payload: data,
        savedItems
    }
}
export const failedRecentNews = () => {
    return {
        type: FAILED_RECENT_NEWS,
    }
}