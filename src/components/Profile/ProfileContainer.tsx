import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {getUserProfile, ProfileType} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router'
import {withAuthRedirect} from '../../hok/withAuthRedirect';

type PathParamsType = {
    userId: string
}

type MapstatePropsType = {
    profile: ProfileType | null,
    isAuth: any                              //fix type
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapstatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect<MapstatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

