import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, resetValidationMessage } from '../actions';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import constants from '../utils/constant';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        // this.props.actions.resetValidationMessage();
    }

    onUserLogin(event) {
        event.preventDefault();
        const refs = this.refs;
        const credentials = {
            email: refs.email.value,
            password: refs.password.value
        };
        this.props.actions.loginUser(credentials, this.props.history);
    }

    renderAlertMessage() {
        let successMsg;
        let errorMsg;

        if(!this.props.authenticated.authenticated) {
            errorMsg = this.props.errorMessage.validationError;
        }

        const alertMessage = errorMsg;
        const alertCls = classNames('alert', { 'alert-success': successMsg, 'alert-danger': errorMsg });

        return (<div className={alertCls} role="alert">{ alertMessage }</div>);
    }

    render() {
        return (
            <section className="login">
                <section className="login-form-wrapper col-md-8">
                    <form className="login-form col-12" onSubmit={ (event) => this.onUserLogin(event) }>
                        <div className="getting-started">
                            <h5>{constants.ENTER_DETAILS}</h5>
                        </div>
                        {this.renderAlertMessage()}
                        <div className="form-element col-12">
                            <label htmlFor="email">{constants.EMAIL}</label>
                            <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="name@domain.com" required autoFocus ref="email"/>
                        </div>
                        <div className="form-element col-12">
                            <label htmlFor="password">{constants.PASSWORD}</label>
                            <input type="password" className="form-control form-control-lg" id="password" name="password" placeholder="Enter your password" required ref="password"/>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-primary" type="submit">{constants.SIGN_IN}</button>
                        </div>
                    </form>
                </section>
            </section>
        );
    }
}

Login.propTypes = {
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    errorMessage: React.PropTypes.object,
    authenticated: React.PropTypes.object,
    history: React.PropTypes.object,
    actions: React.PropTypes.object
};

Login.defaultProps = {
    email: '',
    password: '',
    errorMessage: null
};

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loginUser,
            resetValidationMessage
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
