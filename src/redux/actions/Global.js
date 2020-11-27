export const SWITCH_THEME = 'SWITCH_THEME'
export const SAVE_ITEM = "SAVED_ITEM"
export const UNSAVED_ITEM = 'UNSAVED_ITEM'

export const switchTheme = (darkMode) => {

    return {
        type: SWITCH_THEME,
        payload: darkMode
    }
}

export const saveItem = (item) => {
    // The payload wil be object from array news
    return {
        type: SAVE_ITEM,
        payload: item
    }
}

export const unsavedItem = (itemId) => {
    // The payload will contains itemID 
    return {
        type: UNSAVED_ITEM,
        payload: itemId
    }
}

