import axios from '../../axios/axios-swagger'
import {SEARCH_MOVIE} from './actionTypes'

export const search = () => {
    return {
        type: SEARCH_MOVIE
    }
}