import {
    GET_ALL_VIDEOGAMES,
    GET_ALL_GENRES,
    FILTER_GENRE,
    FILTER_ABC,
    FILTER_RATING,
    FILTER_CREATED,
    ADD_TO_FAVORITES,
    DELETE_FAVORITES,
    GET_VIDEOGAME,
    CLEAN_VIDEOGAME,
    SEARCH_VIDEOGAME,
    SWITCH_LOADING,
    SET_VIDEOGAME
} from './actions'

const initialState = {
    videogames:[],
    allVideogames:[],
    videogame:[],
    genres:[],
    favorites:[],
    loading: false
}


export default function rootReducer(state = initialState, {type,payload}){
    switch (type) {
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                videogames: payload,
                allVideogames:payload,
            }
        case GET_ALL_GENRES:
            return{
                ...state,
                genres:payload
            }
        case GET_VIDEOGAME:
            return{
                ...state,
                videogame:payload
            }
        case SET_VIDEOGAME:
            return{
                ...state
            }
        case SEARCH_VIDEOGAME:
            if(payload === ''){
                console.log('vacio')
            }
            return{
                ...state,
                loading: false,
                videogames:payload
            }
        case FILTER_GENRE:
            let genreName = payload
            const searchGame = state.allVideogames.filter((videogame)=>videogame.genres?.includes(genreName))
            if(searchGame.length === 0){
                return{
                    ...state,
                    videogames: state.allVideogames
                }
            }
            return{
                ...state,
                videogames: searchGame
            }
        case FILTER_ABC:
              if(payload === "All"){
                return{
                    ...state,
                    videogames: state.allVideogames
                }
              }
              let auxAbc = 1;
              if(payload === "A-Z"){auxAbc = 1}
              if(payload === "Z-A"){auxAbc = -1}
              return{
                  ...state,
                  videogames: state.videogames.sort((a,b)=>(a.name < b.name) ? -1 : auxAbc)
              }
        case FILTER_RATING:
                let auxRating = 1;
                if(payload === "MAX_RATING"){auxRating = 1}
                if(payload === "MIN_RATING"){auxRating = -1}
                return{
                ...state,
                videogames: state.videogames.sort((a,b)=>(a.rating > b.rating) ? -1 : auxRating)
              }
        case FILTER_CREATED:
            const filterCreated = payload === "db" 
                 ? state.allVideogames.filter((videogame)=>videogame.createdInDb)
                 : state.allVideogames.filter((videogame)=>!videogame.createdInDb)

                 console.log(filterCreated)
              return{
                ...state,
                videogames: [filterCreated]
              }
        case ADD_TO_FAVORITES:
            const {id} = payload
            const repetidos = state.favorites.find((favorite)=>favorite.id === id)
              if(!repetidos){
                return {
                    ...state,
                    favorites:[...state.favorites, payload]
                }
              }
                return{
                    ...state
                }
        case DELETE_FAVORITES:
            return{
                ...state,
                favorites:state.favorites.filter((item)=>item.id !== payload)
            }
        case CLEAN_VIDEOGAME:
            return{
                ...state,
                videogame: payload
            }
        case SWITCH_LOADING:
            return{
                ...state,
                loading: !state.loading
            }    
        default:
            return state
    }
}