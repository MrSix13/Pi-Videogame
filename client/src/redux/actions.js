import axios from 'axios';
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const SEARCH_VIDEOGAME = 'SEARCH_VIDEOGAME';
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_ABC = "FILTER_ABC";
export const FILTER_RATING = "FILTER_RATING";
export const FILTER_CREATED = "FILTER_CREATED";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const CLEAN_VIDEOGAME = "CLEAN_VIDEOGAME";
export const SWITCH_LOADING = "SWITCH_LOADING";
export const SET_VIDEOGAME = "SET_VIDEOGAME";


export const getAllVideogames = () => async(dispatch)=>{
    const {data} = await axios.get(`/videogames`)
    return dispatch({type:GET_ALL_VIDEOGAMES, payload: data})
}

export const getVideogameById = (payload) => async(dispatch)=>{
    const {data} = await axios.get(`/videogames/${payload}`)
    return dispatch({type:GET_VIDEOGAME, payload: data})
}

export const searchVideogame = (payload) => async(dispatch)=>{
    const {data} = await axios.get(`/videogames?name=${payload}`)
    return dispatch({type: SEARCH_VIDEOGAME, payload: data})
}

export const setVideogame = (payload) => async(dispatch)=>{
    const {data} = await axios.post(`/videogames/create`, payload)
    return dispatch({type: SET_VIDEOGAME, payload: data})
}

export const getAllGenres = () => async(dispatch)=>{
    const {data} = await axios.get(`/genress`)
    return dispatch({type:GET_ALL_GENRES, payload:data})
}

export const filterGenres = (payload) => async(dispatch)=>{
    return dispatch({type:FILTER_GENRE, payload})
}

export const filterAbc = (payload) => async(dispatch)=>{
    return dispatch({type:FILTER_ABC, payload})
}

export const filterRating = (payload) => async(dispatch)=>{
    return dispatch({type:FILTER_RATING, payload})
}

export const filterCreated = (payload) => async(dispatch)=>{
    return dispatch({type:FILTER_CREATED, payload})
}

export const addToFavorites = (payload) =>async(dispatch)=>{
    return dispatch({type:ADD_TO_FAVORITES, payload})
}

export const deleteFavorites = (payload) => async(dispatch)=>{
    return dispatch({type: DELETE_FAVORITES, payload})
}

export const cleanVideogame = () => async(dispatch)=>{
    return dispatch({type: CLEAN_VIDEOGAME, payload: []})
}

export const switchLoading = () => async(dispatch)=>{
    return dispatch({type:SWITCH_LOADING})
}