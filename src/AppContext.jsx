import { createContext, useContext, useReducer, useEffect } from 'react'
import { reducer } from './reducer'
import { SEARCH_VALUE, TOGGLE_THEME, PAGE, MAX_PAGE } from './actions'

const userThemePreferenceDark = localStorage.getItem('darkTheme') === 'true'

const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)')
    .matches
  console.log(prefersDarkMode)
  return prefersDarkMode
}

const initialState = {
  greeting: 'Hello everybody',
  isDarkTheme: userThemePreferenceDark,
  searchValue: 'cat',
  page: 1,
}

const AppContextProvider = ({ children }) => {
  // ...cave MUST be an Array like []=useState()! Otherwise it's an ugly bug!
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [isDarkTheme, setIsDarkTheme] = useState(false)
  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', userThemePreferenceDark)

    return () => {
      'cleanup'
    }
  }, [])

  const toggleDarkTheme = () => {
    dispatch({ type: TOGGLE_THEME })
  }
  const setSearchValue = (search) => {
    dispatch({ type: SEARCH_VALUE, payload: { searchValue: search } })
  }
  const setPage = (page) => {
    dispatch({ type: PAGE, payload: { page } })
  }

  return (
    <AppContext.Provider
      value={{ ...state, toggleDarkTheme, setSearchValue, setPage }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppContextProvider
export const useAppContext = () => useContext(AppContext)
