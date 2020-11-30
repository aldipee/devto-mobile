export const REQUEST_RECENT_NEWS = 'REQUEST_RECENT_NEWS'
export const RECEIVED_RECENT_NEWS = 'RECEIVED_RECENT_NEWS'
export const FAILED_RECENT_NEWS = 'FAILED_RECENT_NEWS'
export const REQUEST_BLOG_POST = 'REQUEST_BLOG_POST'
export const RECEIVED_BLOG_POST = 'RECEIVED_BLOG_POST'
export const FAILED_BLOG_POST = 'FAILED_BLOG_POST'


export const requestRecentNews = (contentCategory) => {
    // Payload will be catergory
    return {
        type: REQUEST_RECENT_NEWS,
        contentCategory
    }
}
export const receivedRecentNews = (data, savedItems, contentCategory) => {
    return {
        type: RECEIVED_RECENT_NEWS,
        payload: data,
        savedItems,
        contentCategory
    }
}
export const failedRecentNews = () => {
    return {
        type: FAILED_RECENT_NEWS,
    }
}

// Blog Post
export const requestBlogPost = (contentCategory) => {
    // Payload will be catergory
    return {
        type: REQUEST_BLOG_POST,
        contentCategory
    }
}
export const receivedBlogPost = (data, savedItems, contentCategory) => {
    return {
        type: RECEIVED_BLOG_POST,
        payload: data,
        savedItems,
        contentCategory
    }
}
export const failedBlogPost = () => {
    return {
        type: FAILED_BLOG_POST,
    }
}