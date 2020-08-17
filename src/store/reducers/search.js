import {PUT_DATA, SEARCH_MOVIE} from '../actions/actionTypes'

const initialState = {
    text: '',
    data: []
}

export default function searchReducer(state = initialState, action) {
   // console.log(action)
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
        default: 
            return state
    }
}