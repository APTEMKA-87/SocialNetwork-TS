import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/authReducer';
import {AppStateType} from '../../redux/reduxStore';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
      this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect <MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getAuthUserData}) (HeaderContainer);