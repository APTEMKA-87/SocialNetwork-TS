import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/reduxStore';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {DialogsPageType} from '../../redux/store';
import {Dispatch} from 'redux'

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer