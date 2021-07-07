import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/reduxStore';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {DialogsPageType} from '../../redux/store';
import {compose, Dispatch} from 'redux'
import React, {ComponentType} from 'react';
import {withAuthRedirect} from '../../hok/withAuthRedirect';

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

export default compose<ComponentType> (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)