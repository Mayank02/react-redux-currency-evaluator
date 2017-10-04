import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, resetValidationMessage } from '../actions';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.actions.resetValidationMessage();
    }

    onUserLogin(event) {
        event.preventDefault();
        const refs = this.refs;
        const credentials = {
            email: refs.email.value,
            password: refs.password.value
        };
        this.props.actions.loginUser(credentials);
    }

    renderAlertMessage() {
        let successMsg;
        let errorMsg;

        if(this.props.validationError) {
            errorMsg = this.props.validationError.message;
        }

        const alertMessage = errorMsg;
        const alertCls = classNames('alert', { 'alert-success': successMsg, 'alert-danger': errorMsg });

        return (<div className={alertCls} role="alert">{ alertMessage }</div>);
    }

    render() {
        return (
            <section className="main-container">
                <section className="login-form-wrapper">
                    <form className="login-form" onSubmit={ (event) => this.onUserLogin(event) }>
                        <div className="getting-started">
                            <h6>Enter your details below.</h6>
                        </div>

                        {
                            this.renderAlertMessage()
                        }

                        <label htmlFor="email">email address</label>
                        <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="name@domain.com" required autoFocus ref="email"/>

                        <label htmlFor="password">password</label>
                        <input type="password" className="form-control form-control-lg" id="password" name="password" placeholder="Enter your password" required ref="password"/>

                        <div className="buttons">
                            <button className="btn btn-primary" type="submit">Sign in</button>
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
    validationError: React.PropTypes.object,
    actions: React.PropTypes.object
};

Login.defaultProps = {
    email: '',
    password: '',
    validationError: null
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
