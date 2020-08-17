import { all, fork } from 'redux-saga/effects';
import { searchMoviesSaga } from './searchMovie';

export function* rootSaga() {
    yield all([
        fork(searchMoviesSaga)
    ]);
}