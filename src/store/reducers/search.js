import {SEARCH_MOVIE} from '../actions/actionTypes'

const initialState = {
    data: []
}

export default function searchReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_MOVIE: {
            return {
                ...state,
                data: action.data
            }
        }
        default: 
            return state
    }
}