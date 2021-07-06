import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/reduxStore';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {DialogsPageType} from '../../redux/store';
import {Dispatch} from 'redux'
import {Redirect} from 'react-router-dom';
import React from 'react';

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: any                         // fix type
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

let AuthRedirectComponent = (props: any) => {           // fix type
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer