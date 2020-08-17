import { takeEvery, takeLatest, all, put, call } from 'redux-saga/effects'
import { SEARCH_MOVIE } from '../actions/actionTypes'
import { putData } from '../actions/search'
import axios from 'axios'

function searchData(searchText) {
    return axios.get(`http://www.omdbapi.com/?apikey=87203ed4&s=${searchText}`)
    .then(response => response.data.Search)
}

export  function* workerSearchData(action) {
   yield console.log(action)
    // try {
    //   //  console.log(action)
    //     const data = yield call(searchData)
    //    // console.log(data)
    //     yield put(putData(data))
    // } catch(e) {
    //     console.log(e)
    // }
}

export function* watchSearchData() {
   yield takeLatest(SEARCH_MOVIE, workerSearchData)
}

export function* searchMoviesSaga() {
    yield all([
        workerSearchData(),
        watchSearchData()
    ])
  }