import React, { useState } from 'react'
import { useQuery, useLazyQuery, gql } from "@apollo/client"
import { useMutation } from "@apollo/client"

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

const CREATE_USER = gql`
  mutation CreateUSer($createUserinput: CreateUserInput!) {
    createUser(createUserinput: $createUserinput) {
      id
      name
      username
      age
      nationality
    }
  }
`

export default function DisplayData () {
  const [movieSearched, setMovieSearched] = useState("")

  // create user states
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [age, setAge] = useState(0)
  const [nationality, setNationality] = useState("")

  // queries
  const { data: userData, loading: userLoading, error: userError, refetch: refetchUsers } = useQuery(QUERY_ALL_USERS)
  const { data: movieData, loading: movieLoading } = useQuery(QUERY_ALL_MOVIES)
  const [fetchMovie, { data: movieSearchData, error: movieFetchError }] = useLazyQuery(GET_MOVIE_BY_NAME)

  // mutations
  const [createUser] = useMutation(CREATE_USER)

  return (
    <div>
      <div>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} value={username} />
        <input type="number" placeholder="age" onChange={(e) => setAge(e.target.value)} value={age} />
        <input
          type="text"
          placeholder="nationality"
          onChange={(e) => setNationality(e.target.value.toLocaleUpperCase())}
          value={nationality}
        />

        <button onClick={(e) => {
          e.preventDefault()
          createUser({
            variables: { createUserinput: { name, username, age: Number(age), nationality } }
          })
          refetchUsers()
        }}>
          Create User
        </button>
      </div>

      <h1>Display Peop</h1>
      {userData && userData.users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Name: {user.age}</h1>
          <h1>Name: {user.username}</h1>
          <h1>Name: {user.nationality}</h1>
          <h1>############################</h1>
        </div>
      ))}

      <h1>############################</h1>
      <h1>############################</h1>

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
    </div >
  )
}