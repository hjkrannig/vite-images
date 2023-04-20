import axios from 'axios'
import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useAppContext } from '../AppContext'

const searchURL = import.meta.env.VITE_SEARCH_API
const apiKey = import.meta.env.VITE_API_KEY

const Gallery = () => {
  const { searchValue, page, setPage } = useAppContext()

  const maxPage = page === -1

  const url = `${searchURL}?client_id=${apiKey}&query=${searchValue}&page=${page}`
  // change of query-key in second value triggers a new query
  // see also useQueryClient in react-query-tutorial
  const response = useQuery({
    queryKey: ['images', searchValue, page],
    queryFn: async () => {
      const data = await axios.get(url)
      return data.data
    },
  })

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    )
  }
  if (maxPage || page > response.data.total_pages) {
    setPage(response.data.total_pages)
  }

  const results = response.data.results
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        )
      })}
    </section>
  )
}

export default Gallery
