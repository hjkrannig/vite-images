import { useAppContext } from '../AppContext'

const Pager = () => {
  const { page, setPage } = useAppContext()

  const decreasePage = () => {
    if (page > 1) setPage(page - 1)
  }
  const increasePage = () => {
    setPage(page + 1)
  }
  const firstPage = () => {
    setPage(1)
  }
  const lastPage = () => {
    setPage(-1)
  }

  return (
    <div className="page-container">
      <button disabled={page === 1} className="btn" onClick={firstPage}>
        {'<<'}
      </button>
      <button disabled={page === 1} className="btn" onClick={decreasePage}>
        {'<'}
      </button>
      <button disabled={true}>{page}</button>
      <button className="btn" onClick={increasePage}>
        {'>'}
      </button>
      <button className="btn" onClick={lastPage}>
        {'>>'}
      </button>
    </div>
  )
}

export default Pager
