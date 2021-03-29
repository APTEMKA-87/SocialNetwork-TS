import {combineReducers, createStore } from "redux";
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {usersReducer} from './usersReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>



export default store
