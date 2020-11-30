import { RECEIVED_RECENT_NEWS, FAILED_RECENT_NEWS, REQUEST_RECENT_NEWS, RECEIVED_BLOG_POST } from 'redux/actions/Home';
import { SAVE_ITEM, UNSAVED_ITEM } from 'redux/actions/Global'


const initialState = {
    news: {},
    headLine: [],
    blog: [],
    loading: false
}

export default (state = initialState, { type, payload, savedItems, contentCategory }) => {


    switch (type) {
        case REQUEST_RECENT_NEWS: {
            state.news[contentCategory] = []
            return {
                ...state,
                loading: true,

            }
        }
        case RECEIVED_RECENT_NEWS: {
            // Since we only need 3 data for headeline, we get 3 lastest data from payload

            // Get array of id Post that saved
            const savedId = savedItems.map(({ id }) => id)

            // Filter paylod and make new array without savedItem
            const unSavedNews = payload.filter((item) => !savedId.includes(item.id)).map((obj) => ({ ...obj, isSaved: false }))
            const savedNews = payload.filter((item) => savedId.includes(item.id)).map((obj) => ({ ...obj, isSaved: true }))
            const news = [...unSavedNews, ...savedNews].length && [...unSavedNews, ...savedNews].sort((a, b) => (a.id > b.id) ? -1 : ((b.id > a.id) ? 0 : 1))


            // const SubNewsData = Object.fromEntries([contentCategory].map(category => [category, news]));

            return {
                ...state,
                news: news,
                headLine: payload.length ? payload.slice(0, 3) : [],
                loading: false
            }
        }
        case RECEIVED_BLOG_POST: {
            // Since we only need 3 data for headeline, we get 3 lastest data from payload

            // Get array of id Post that saved
            const savedId = savedItems.map(({ id }) => id)

            // Filter paylod and make new array without savedItem
            const unSavedNews = payload.filter((item) => !savedId.includes(item.id)).map((obj) => ({ ...obj, isSaved: false }))
            const savedNews = payload.filter((item) => savedId.includes(item.id)).map((obj) => ({ ...obj, isSaved: true }))
            const news = [...unSavedNews, ...savedNews].length && [...unSavedNews, ...savedNews].sort((a, b) => (a.id > b.id) ? -1 : ((b.id > a.id) ? 0 : 1))


            // const SubNewsData = Object.fromEntries([contentCategory].map(category => [category, news]));

            return {
                ...state,
                blog: payload,
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

        // Case for update news State when user click save icon
        case SAVE_ITEM: {
            const updateSelectedItem = state.news.filter((item) => item.id === payload.id).map((obj) => ({ ...obj, isSaved: true }))
            const notUpdatedData = state.news.filter((item) => item.id !== payload.id)
            const newNewsData = [...notUpdatedData, ...updateSelectedItem].length && [...notUpdatedData, ...updateSelectedItem].sort((a, b) => (a.id > b.id) ? -1 : ((b.id > a.id) ? 0 : 1))
            return {
                ...state,
                news: newNewsData
            }
        }

        case UNSAVED_ITEM: {
            const updateSelectedItem = state.news.filter((item) => item.id === payload).map((obj) => ({ ...obj, isSaved: false }))
            const notUpdatedData = state.news.filter((item) => item.id !== payload)
            const newNewsData = [...notUpdatedData, ...updateSelectedItem].length && [...notUpdatedData, ...updateSelectedItem].sort((a, b) => (a.id > b.id) ? -1 : ((b.id > a.id) ? 0 : 1))
            return {
                ...state,
                news: newNewsData
            }
        }
        default:
            return state;
    }
};