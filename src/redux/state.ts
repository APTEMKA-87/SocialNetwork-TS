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

export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    rerenderEntireTree: () => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

const store: StoreType = {
    _state: {
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
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    rerenderEntireTree() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText
            this.rerenderEntireTree()
        }
    }
}

export const addPostActionCreator = (newText: string) => {
    return {
        type: 'ADD-POST',
        newText: newText
    }
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-POST', newText: text}
}

export default store;