import {ActionsTypes, PostType} from './store';
import {usersApi} from '../api/api';

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It is my first post', likesCount: 15},
        {id: 3, message: 'Second post', likesCount: 5},
        {id: 4, message: 'Last post', likesCount: 8},
    ] ,
    profile: null ,
    status: 'STATUS'
}

type InitialType = {
    newPostText: string
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

export type ProfileType = {
    "aboutMe": string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": null | string
    "fullName": string
    "userId": number
    "photos": {
        "small": null | string
        "large": null | string
    }
}

export const profileReducer = (state: InitialType = initialState, action: ActionsTypes): InitialType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
    }
    return state
}

export const addPostActionCreator = () => ({type: 'ADD-POST',} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: 'UPDATE-NEW-POST', newText: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE',profile} as const)
export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

