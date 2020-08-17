import {SEARCH_MOVIE, PUT_DATA} from './actionTypes'

export const search = (searchText) => {
    //console.log(searchText)
    return {
        type: SEARCH_MOVIE,
        payload: searchText
    }
}

export const putData = (dataFromServer) => {
    return {
        type: PUT_DATA,
        payload: dataFromServer
    }
}