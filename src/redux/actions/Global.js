export const SWITCH_THEME = 'SWITCH_THEME'


export const switchTheme = (darkMode) => {

    return {
        type: SWITCH_THEME,
        payload: darkMode
    }
}