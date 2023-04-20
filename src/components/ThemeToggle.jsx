import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useAppContext } from '../AppContext'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext()
  return (
    <section className="toggle-container">
      <button
        className="dark-toggle"
        onClick={() => toggleDarkTheme(!isDarkTheme)}
      >
        {!isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
