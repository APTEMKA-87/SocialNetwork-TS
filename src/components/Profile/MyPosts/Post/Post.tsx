import React from 'react';
import s from './Post.module.css'

type MessageType = {
    message: string
    likesCount: number
}

const Post: React.FC<MessageType> = (props) => {
    return <div>
        <div className={s.item}>
            <img
                src="https://images11.popmeh.ru/upload/img_cache/571/571d2c1f21aa3bef07dff8382a2c8982_ce_1080x1080x96x0_cropped_800x800.jpeg"/>
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    </div>;
}

export default Post;