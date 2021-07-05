import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {getUserProfile, ProfileType} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router'

type PathParamsType = {
    userId: string
}

type MapstatePropsType = {
    profile: ProfileType | null,
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

type OwnPropsType = MapstatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(+userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapstatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapstatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

