import {rerenderEntireTree} from '../render';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    newPostText: string
    posts: PostType[]

}

export type DialogsPageType = {
    messages: MessageType []
    dialogs: DialogType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {
    profilePage: {
        newPostText: '',
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It is my first post', likesCount: 15},
            {id: 3, message: 'Second post', likesCount: 5},
            {id: 4, message: 'Last post', likesCount: 8},
        ]

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your IT'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;