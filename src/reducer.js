import { TOGGLE_THEME, SEARCH_VALUE, PAGE } from './actions'

export const reducer = (state, action) => {
  // TOGGLE_THEME
  if (action.type === TOGGLE_THEME) {
    const { isDarkTheme } = state
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', !isDarkTheme)
    localStorage.setItem('darkTheme', !isDarkTheme)
    return { ...state, isDarkTheme: !isDarkTheme }
  }
  // SEARCH_VALUE
  if (action.type === SEARCH_VALUE) {
    const search = action.payload.searchValue
    return { ...state, searchValue: search }
  }
  // PAGE
  if (action.type === PAGE) {
    const page = action.payload.page
    if (page) return { ...state, page }
  }
  return { ...state }
}
