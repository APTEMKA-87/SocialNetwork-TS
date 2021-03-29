type UsersLocation = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocation
}

export type InitialStateType = {
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: InitialStateType = {
    users: [
        {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT03-9KI-FAAGe6qPJCzkQ9Lv7GH7hgmgzg&usqp=CAU', followed: false, fullName: 'Dmitry', status: 'Boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT03-9KI-FAAGe6qPJCzkQ9Lv7GH7hgmgzg&usqp=CAU',followed: true, fullName: 'Sasha', status: 'Boss', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT03-9KI-FAAGe6qPJCzkQ9Lv7GH7hgmgzg&usqp=CAU',followed: false, fullName: 'Andrew', status: 'Boss', location: {city: 'Kiev', country: 'Ukraine'}},
    ]
}

type ActionsType = FollowActionType | UnfollowActionType | SetUsersActionType

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
            return {...state, users: [...state.users, ...action.users]}
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

export const followActionCreator = (userId: number): FollowActionType => ({type: 'FOLLOW',userId} as const)
export const unfollowActionCreator = (userId: number): UnfollowActionType => ({type: 'UNFOLLOW',userId} as const)
export const setUsersActionCreator = (users: UserType[]): SetUsersActionType => ({type: 'SET_USERS',users} as const)