import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';


export type ProfilePropsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;