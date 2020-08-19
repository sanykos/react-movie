import {DETAIL_MOVIE, DETAIL_MOVIE_RECEIVED} from './actionTypes'

export function movieDetail(movieId) {
    return {
        type: DETAIL_MOVIE,
        payload: movieId
    }
}

export function movieDetailReceived(dataFromServer) {
    return {
        type: DETAIL_MOVIE_RECEIVED,
        payload: dataFromServer
    }
}