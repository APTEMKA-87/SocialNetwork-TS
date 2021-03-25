import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {AppStoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';

export type DialogsPropsType = {
    store: AppStoreType
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let dialogsPage = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={dialogsPage}/>
}

export default DialogsContainer