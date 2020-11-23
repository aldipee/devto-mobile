export const REQUEST_NEWS_DETAIL = 'REQUEST_NEWS_DETAILS'
export const RECEIVED_NEWS_DETAIL = 'RECEIVED_NEWS_DETAILS'
export const FAILED_NEWS_DETAIL = 'FAILED_NEWS_DETAIL'



export const requestNewsDetail = (idPost) =>{
    return {
        type : REQUEST_NEWS_DETAIL,
        idPost
    }
}
export const receivedNewsDetails = (data) =>{
    return {
        type : RECEIVED_NEWS_DETAIL,
        payload : data
    }
}
export const failedNewsDetails = () =>{
    return {
        type : FAILED_NEWS_DETAIL
    }
}