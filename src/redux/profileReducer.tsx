import {ActionsTypes, ProfilePageType} from './state';

export type AddPostActionType = {
    type: 'ADD-POST',
    newText: string
}

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST':
            state.newPostText = action.newText
            break;
    }
    return state
}

export const addPostActionCreator = (newText: string) => ({
    type: 'ADD-POST',
    newText: newText
} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: 'UPDATE-NEW-POST', newText: text} as const)