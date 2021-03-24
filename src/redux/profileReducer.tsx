import {ActionsTypes, ProfilePageType} from './store';

export type AddPostActionType = {
    type: 'ADD-POST',
    newText: string
}

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It is my first post', likesCount: 15},
        {id: 3, message: 'Second post', likesCount: 5},
        {id: 4, message: 'Last post', likesCount: 8},
    ]

}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
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