import axios from '../../axios/axios-swagger'
import {SEARCH_MOVIE, PUT_DATA} from './actionTypes'

export const search = () => {
    return {
        type: SEARCH_MOVIE,
    }
}

export const putData = (dataFromServer) => {
    return {
        type: PUT_DATA,
        payload: dataFromServer
    }
}