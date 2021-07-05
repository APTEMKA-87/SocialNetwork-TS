import {combineReducers, applyMiddleware, createStore } from "redux";
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>



export default store
