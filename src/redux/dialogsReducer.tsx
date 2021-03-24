import {ActionsTypes, DialogsPageType} from './store';

let initialState = {
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
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newText
            break;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            break;
    }
    return state
}

export const updateNewMessageBodyActionCreator = (body: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newText: body
} as const)
export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'} as const)