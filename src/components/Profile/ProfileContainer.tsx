import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {getUserProfile, ProfileType} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router'
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null,
    isAuth: boolean
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
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
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
)(ProfileContainer)


