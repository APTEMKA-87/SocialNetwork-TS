import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import {ProfileType, setUserProfile} from '../../redux/profileReducer';

type PropsType = {
    profile: ProfileType | null,
    setUserProfile: (profile: ProfileType) => void
}
class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);