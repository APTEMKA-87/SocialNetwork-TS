import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageActionCreator, StoreType, updateNewMessageBodyActionCreator} from '../../redux/state';


export type DialogsPropsType = {
    store: StoreType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState()

    let dialogsElement = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>); // удалить пропсы, сразу подсвечивает красным
    let messagesElement = state.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>);
    let newMessageBody = state.dialogsPage.newMessageBody; // почему в видосе строка 15 16 через state?

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
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