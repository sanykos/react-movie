import {PUT_DATA, SEARCH_MOVIE, DETAIL_MOVIE_RECEIVED} from '../actions/actionTypes'

const initialState = {
    text: '',
    data: [],
    movie: []
}

export default function searchReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_MOVIE: {
            return {
                ...state,
                text: action.payload
            }
        }
        case PUT_DATA: {
            return {
                ...state,
                data: action.payload
            }
        }
        case DETAIL_MOVIE_RECEIVED: {
            return {
                ...state,
                movie: action.payload
            }
        }
        default: 
            return state
    }
}