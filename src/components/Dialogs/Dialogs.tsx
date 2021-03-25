import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/store';

export type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void,
    dialogsPage: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message id={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs