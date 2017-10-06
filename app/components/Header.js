import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { bindActionCreators } from 'redux';
import constants from '../utils/constant';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    onUserLogout() {
        this.props.actions.logoutUser();
    }

    render() {
        const showHeaderCls = (this.props.authenticated && this.props.authenticated.authenticated);
        return (
            <section className={'header col-12' + (showHeaderCls ? ' show-header' : '')}>
                <div className="form-element col-12">
                    <span>{constants.WELCOME} : {this.props.userName} | </span>
                    <a href="/" onClick={ (event) => this.onUserLogout(event) }>{constants.LOGOUT}</a>
                </div>
            </section>
        );
    }
}

Header.propTypes = {
    userName: React.PropTypes.string,
    authenticated: React.PropTypes.object,
    actions: React.PropTypes.object
};

Header.defaultProps = {
    userName: localStorage.getItem('userName')
};

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            logoutUser
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
