import React, {ChangeEvent} from 'react';
import {PostType} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';

type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElement = props.posts.map((p,i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
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