import { TOGGLE_THEME, SEARCH_VALUE } from './actions'

export const reducer = (state, action) => {
  if (action.type === TOGGLE_THEME) {
    const { isDarkTheme } = state
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', !isDarkTheme)
    localStorage.setItem('darkTheme', !isDarkTheme)
    return { ...state, isDarkTheme: !isDarkTheme }
  }
  if (action.type === SEARCH_VALUE) {
    const search = action.payload.searchValue
    return { ...state, searchValue: search }
  }
  return { ...state }
}