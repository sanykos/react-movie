import { takeEverym, put, call } from 'redux-saga/effects'
import { SEARCH_MOVIE } from './actions/actionTypes'
import { putData } from './actions/search'
import axios from 'axios'

function searchData() {
    return axios.get('http://www.omdbapi.com/?apikey=87203ed4&s=Batman')
    .then(response => response.data.Search)
}

export default function* workerSearchData() {
    const data = yield call(searchData)
    yield put(putData(data))
}

export function* watchSearchData() {
   yield takeEvery(SEARCH_MOVIE, workerSearchData)
}