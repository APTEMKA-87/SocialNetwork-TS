import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogType, MessageType} from '../../redux/state';


export type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => <Message id={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs