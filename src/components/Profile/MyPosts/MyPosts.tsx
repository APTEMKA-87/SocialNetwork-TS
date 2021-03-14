import React, {ChangeEvent} from 'react';
import {ActionsTypes, addPostActionCreator, PostType, updateNewPostTextActionCreator} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElement = props.posts.map((p, i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText)) // хз НьюПостТекст наугад
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}> Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>;
}

export default MyPosts;