import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './store/reducers/rootReducer'
import { rootSaga } from './store/saga'
import App from './components/App';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
//console.log(store.getState())
const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(
    app, 
    document.getElementById("app")
    )