import {takeEvery} from 'redux-saga/effects'
import {SEARCH_MOVIE} from './actions/actionTypes'



export default function* workerSearchData() {
    console.log('It is working')
}

export function* watchSearchData() {
   yield takeEvery(SEARCH_MOVIE, workerSearchData)
}