import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
const RootReducers= combineReducers({

})
export const store = createStore(RootReducers,applyMiddleware(thunk))