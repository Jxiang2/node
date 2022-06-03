import React, { useState } from 'react'
import { useQuery, useLazyQuery, gql } from "@apollo/client"

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
      yearOfPublication 
    }
  }
`

const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`

export default function DisplayData () {
  const [movieSearched, setMovieSearched] = useState("")

  const { data: userData, loading: userLoading, error: userError } = useQuery(QUERY_ALL_USERS)
  const { data: movieData, loading: movieLoading } = useQuery(QUERY_ALL_MOVIES)
  const [fetchMovie, { data: movieSearchData, error: movieFetchError }] = useLazyQuery(GET_MOVIE_BY_NAME)

  console.log(movieSearchData, movieFetchError)

  if (userLoading) {
    return <h1>User Data is loading...</h1>
  }

  if (movieLoading) {
    return <h1>Movie Data is loading...</h1>
  }

  if (userError) {
    console.log(userError)
  }

  if (movieFetchError) {
    console.log(movieFetchError)
  }

  return (
    <div>
      <h1>DisplayData</h1>
      {userData && userData.users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Name: {user.age}</h1>
          <h1>Name: {user.username}</h1>
          <h1>Name: {user.nationality}</h1>
          <h1>############################</h1>
        </div>
      ))}

      {movieData && movieData.movies.map((mo) => (
        <div key={mo.id}>
          <h1>Name: {mo.name}</h1>
          <h1>Name: {mo.yearOfPublication}</h1>
          <h1>############################</h1>
        </div>
      ))}

      <div>
        <input
          type="text"
          placeholder="Interstellar..."
          onChange={(e) => { setMovieSearched(e.target.value) }}
          value={movieSearched}
        />
      </div>

      <button onClick={(e) => fetchMovie(
        { variables: { name: movieSearched } }
      )}>
        Fetch Data
      </button>

      <div>
        {movieSearchData &&
          <div>
            <h1>Movie name: {movieSearchData.movie?.name}</h1>
            <h1>Year of Publication: {movieSearchData.movie?.yearOfPublication}</h1>
          </div>
        }
      </div>

      {movieFetchError && <h1>There was a error fetching the movie</h1>}
    </div>
  )
}