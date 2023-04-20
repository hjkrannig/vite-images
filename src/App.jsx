import Gallery from './components/Gallery'
import ThemeToggle from './components/ThemeToggle'
import SearchForm from './components/SearchForm'
import { Fragment } from 'react'
import { useAppContext } from './AppContext'

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
}
export default App
