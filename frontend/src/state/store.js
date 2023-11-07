import { applyMiddleware, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    userReducer
})

export default configureStore(
    { reducer: rootReducer },
    {},
    applyMiddleware(thunk)
)