import { takeEvery, takeLatest, all, put, call } from 'redux-saga/effects'
import { SEARCH_MOVIE, DETAIL_MOVIE } from '../actions/actionTypes'
import { putData } from '../actions/search'
import { movieDetailReceived } from '../actions/detail'
import axios from 'axios'

function searchData(searchText) {
    return axios.get(`http://www.omdbapi.com/?apikey=87203ed4&s=${searchText}`)
    .then(response => response.data.Search)
}

function detailData(movieId) {
    return axios.get(`http://www.omdbapi.com/?apikey=87203ed4&i=${movieId}`)
    .then(response => response.data)
}

export  function* workerSearchData(action) {
    if(action) {
        try {
            const data = yield call(searchData, action.payload)
            yield put(putData(data))
        }catch(e) {
            console.log(e)
        }
     }
}

export function* workerDetailMovie(action) {
    if(action) {
        try {
            const data = yield call(detailData, action.payload)
            yield put(movieDetailReceived(data))
        }catch(e) {
            console.log(e)
        }
    }
}


export function* watchSearchData() {
   yield takeEvery(SEARCH_MOVIE, workerSearchData)
}
export function* watchDetailMovie() {
    yield takeEvery(DETAIL_MOVIE, workerDetailMovie)
}

export function* searchMoviesSaga() {
    yield all([
        workerSearchData(),
        watchSearchData(),
        workerDetailMovie(),
        watchDetailMovie()
    ])
  }