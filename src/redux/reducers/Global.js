import { SWITCH_THEME, SAVE_ITEM, UNSAVED_ITEM } from 'redux/actions/Global';
import { lightTheme, darkTheme } from 'styles/theme';
const initialState = {
    fontColor: '#ccc',
    backgroundColor: '#fff',
    isDarkMode: false,
    savedItems: [],
    theme: darkTheme
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SWITCH_THEME: {
            return {
                ...state,
                theme: payload
            }
        }

        // Save Item on favorite
        case SAVE_ITEM: {
            // change save status to true
            payload.isSaved = true
            return {
                ...state,
                savedItems: [...state.savedItems, payload]
            }
        }

        // Unsaved Item from favorite by item ID
        case UNSAVED_ITEM: {
            const items = state.savedItems.filter((item) => item.id !== payload)
            console.log(items)
            return {
                ...state,
                savedItems: items
            }
        }

        default:
            return state;
    }
};