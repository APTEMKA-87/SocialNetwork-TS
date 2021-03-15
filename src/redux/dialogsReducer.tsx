import {ActionsTypes, DialogsPageType} from './state';

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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