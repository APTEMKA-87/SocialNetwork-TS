import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {AppStateType} from '../../../redux/reduxStore';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {PostType} from '../../../redux/store';

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts, // пост массив
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;