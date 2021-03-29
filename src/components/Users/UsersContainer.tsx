import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {followActionCreator, setUsersActionCreator, unfollowActionCreator, UserType} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    users: Array<UserType>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersActionCreator(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)