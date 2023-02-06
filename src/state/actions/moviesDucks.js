import axios from 'axios'

const token = '0a25116e819cfc3a2c3b306e0967081e'
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${token}`
const imageUrlMedium = 'https://image.tmdb.org/t/p/w300';

// constantes
const dataInicial = {
  dataMovies: [],
  isLoading: false,
}

// types

const GET_LOAD_DATA_MOVIES_SUCCES_ISFETCHING =
  'GET_LOAD_DATA_MOVIES_SUCCES_ISFETCHING'
const GET_LOAD_DATA_MOVIES_SUCCES = 'GET_LOAD_DATA_MOVIES_SUCCES'
const GET_LOAD_DATA_MOVIES_SUCCES_ERROR = 'GET_LOAD_DATA_MOVIES_SUCCES_ERROR'

// reducer
export default function dashboardReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_LOAD_DATA_MOVIES_SUCCES_ISFETCHING:
      return { ...state, isLoading: true }
    case GET_LOAD_DATA_MOVIES_SUCCES:
      return { ...state, dataMovies: action.payload, isLoading: false }
    case GET_LOAD_DATA_MOVIES_SUCCES_ERROR:
      return { ...state, isLoading: false }

    default:
      return state
  }
}

// acciones

export const getMovies = (language) => async (dispatch, getState) => {
  dispatch({
    type: GET_LOAD_DATA_MOVIES_SUCCES_ISFETCHING,
  })
  try {
    const res = await axios.get(`${url}&language=${language}&page=1`)
    dispatch({
      type: GET_LOAD_DATA_MOVIES_SUCCES,
      payload: res.data.results,
    })

    return res
  } catch (error) {
    console.log(error)
    dispatch({
      type: GET_LOAD_DATA_MOVIES_SUCCES_ERROR,
    })
    return error
  }
}


export const getMediumPictureUrl = (path) => {
  return imageUrlMedium + path;
}