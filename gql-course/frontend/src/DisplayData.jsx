import React, { useState } from 'react'
import { useQuery, useLazyQuery, gql } from "@apollo/client"
import { useMutation } from "@apollo/client"

// const useQuery = (query, variables) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(async () => {
//     try {
//       setLoading(true)
//       const data = await GraphQL.request(query, variables)
//       setData(data)
//     } catch (ex) {
//       setError(ex)
//     } finally {
//       setLoading(false)
//     }
//   }, [])

//   return { data, loading, error }
// }

// const MyComponent = () => {
//   const { data, loading, error } = useQuery(getBookQuery)

//   if (loading) return <p>Loading....</p>
//   if (error) return <p>Ops! Something went wrong</p>

//   return (
//     <>
//       <ul>
//         {data.books.map(book => (
//           <li key={book.name}>{book.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// };

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      ... on UsersSuccessfulResult {
        data {
          id
          name
          username
          age
          nationality
        }
      }
      ... on UsersErrorResult {
        error
      }
    }
  }
`

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      ... on MoviesSuccessfulResult {
        data {
          id
          name
          yearOfPublication
          isInTheaters
        }
      }
      ... on MoviesErrorResult {
        error
      }
    }
  }
`

const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      ... on MovieSuccessfulResult {
        data {
          name
          yearOfPublication
          isInTheaters
        }
      }
      ... on MovieErrorResult {
        error
      }
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
  const { data: userData, loading: userLoading, refetch: refetchUsers } = useQuery(QUERY_ALL_USERS)
  const { data: movieData, loading: movieLoading } = useQuery(QUERY_ALL_MOVIES)
  const [fetchMovie, { data: movieSearchData, error: movieFetchError }] = useLazyQuery(GET_MOVIE_BY_NAME)

  // mutations
  const [createUser] = useMutation(CREATE_USER)

  console.log("rendered")

  return (
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
        createUser({
          variables: { createUserinput: { name, username, age: Number(age), nationality } }
        })
        setName("")
        setUsername("")
        setAge(0)
        setNationality("")
        refetchUsers()
      }}>
        Create User
      </button>

      <h1>Display Data</h1>
      {userData && userData.users.data.map((user) => (
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

      {movieData && movieData.movies.data.map((mo) => (
        <div key={mo.id}>
          <h1>Name: {mo.name}</h1>
          <h1>Name: {mo.yearOfPublication}</h1>
          <h1>############################</h1>
        </div>
      ))}

      <input
        type="text"
        placeholder="Interstellar..."
        onChange={(e) => { setMovieSearched(e.target.value) }}
        value={movieSearched}
      />

      <button onClick={(e) => fetchMovie(
        { variables: { name: movieSearched } }
      )}>
        Fetch Data
      </button>

      {((movieSearchData) && (movieSearchData.movie.data)) &&
        <div>
          <h1>Movie name: {movieSearchData.movie.data.name}</h1>
          <h1>Year of Publication: {movieSearchData.movie.data.yearOfPublication}</h1>
        </div>
      }

      {((movieSearchData) && (movieSearchData.movie.error)) &&
        <div>
          <h1>{movieSearchData.movie.error}</h1>
        </div>
      }

      {movieFetchError && <h1>There was a error fetching the movie</h1>}
    </div >
  )
}