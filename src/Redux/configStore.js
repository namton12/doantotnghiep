import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {UserManageReducer} from "./Reducers/UserManageReducer";
import { FilmManageReducer } from "./Reducers/FilmManageReducer";
import {TicketManageReducer} from "./Reducers/TicketManageReducer"
const RootReducers= combineReducers({
  UserManageReducer,
  FilmManageReducer,
  TicketManageReducer
})

export const store = createStore(RootReducers,applyMiddleware(thunk))
