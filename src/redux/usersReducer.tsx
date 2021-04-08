type UsersLocation = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: UsersLocation
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING= 'TOGGLE_IS_FETCHING'

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

type ActionsType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | setCurrentPageActionType
    | setUsersTotalCountActionType
    | toggleIsFetchingActionType

export const usersReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USER_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetUsersActionType = {
    type: 'SET_USERS'
    users: UserType[]
}
export type setCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type setUsersTotalCountActionType = {
    type: 'SET_TOTAL_USER_COUNT'
    totalUsersCount: number
}
export type toggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}


export const followActionCreator = (userId: number): FollowActionType => ({type: 'FOLLOW',userId} as const)
export const unfollowActionCreator = (userId: number): UnfollowActionType => ({type: 'UNFOLLOW',userId} as const)
export const setUsersActionCreator = (users: UserType[]): SetUsersActionType => ({type: 'SET_USERS',users} as const)
export const setCurrentPageActionCreator = (currentPage: number): setCurrentPageActionType => ({type: 'SET_CURRENT_PAGE',currentPage} as const)
export const setUsersTotalCountActionCreator = (totalUsersCount: number): setUsersTotalCountActionType => ({type: 'SET_TOTAL_USER_COUNT',totalUsersCount} as const)
export const toggleIsFetchingActionCreator = (isFetching: boolean): toggleIsFetchingActionType => ({type: 'TOGGLE_IS_FETCHING',isFetching} as const)