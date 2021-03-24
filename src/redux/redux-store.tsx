import {combineReducers, createStore } from "redux";
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(rootReducer)
export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

export default store
