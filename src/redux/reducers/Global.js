import { SWITCH_THEME } from 'redux/actions/Global';
const initialState = {
    fontColor: '#ccc',
    backgroundColor: '#fff',
    isDarkMode: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SWITCH_THEME: {
            return {
                ...state,
                fontColor: payload.fontColor,
                backgroundColor: payload.backgroundColor,
                isDarkMode: payload
            }
        }
        default:
            return state;
    }
};