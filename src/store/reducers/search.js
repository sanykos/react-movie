import {PUT_DATA} from '../actions/actionTypes'

const initialState = {
    data: []
}

export default function searchReducer(state = initialState, action) {
    switch(action.type) {
        case PUT_DATA: {
           // console.log(action.payload)
            return {
                ...state,
                data: action.payload
            }
        }
        default: 
            return state
    }
}