import { createStore, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer from './reducer/AuthReducer'

const rootReducers = combineReducers({
    AuthReducer,
})

const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store