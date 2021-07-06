import {authApi} from '../api/api';

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA'

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

type ActionsType = setUserDataActionType

export const authReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

type DataType = {
    id: number,
    email: string,
    login: string
}

export type setUserDataActionType = {
    type: 'SET_USER_DATA',
    data: DataType,

}

export const setAuthUserData = (id: number, email: string, login: string): setUserDataActionType => ({
    type: 'SET_USER_DATA',
    data: {
        id,
        email,
        login
    }
})

export const getAuthUserData = () => (dispatch: any) => {
    authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}