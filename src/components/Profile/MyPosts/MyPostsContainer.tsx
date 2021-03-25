import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {AppStoreType} from '../../../redux/redux-store';

type PropsType = {
    store: AppStoreType
}

const MyPostsContainer: React.FC<PropsType> = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
    }
    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;