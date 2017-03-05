import React, { Component } from 'react'
import { Row, Column, Modal, FormGroup } from 'components/grid'
import RButton from 'components/button'
import Logo from 'images/logo.png'
import Auth from 'libs/auth'
import { hashHistory } from 'react-router'

class Login extends Component {
    constructor (props) {
        super(props)
        this.onLogin = this.onLogin.bind(this)
        if (Auth.loggedIn()) {
            Auth.logout()
        }
    }

    onLogin () {
        const isAuth = Auth.login(this.email.value, this.password.value)
        if (isAuth) {
            const location = this.props.location
            if (location.state && location.state.nextPathname) {
                hashHistory.push(location.state.nextPathname)
            } else {
                hashHistory.push('/')
            }
        } else {
            if (window.Notification) {
                window.Notification.addNotification({
                    title: 'Notification',
                    message: 'Your credentials are wrong',
                    level: 'error'
                });
            }
        }
    }

    render () {
        return (
            <Row className='login'>
                <Column size={12}>
                    <Modal title={<img src={Logo} className='logo' alt='HireWolf' />}>
                        <Row>
                            <FormGroup>
                                <input
                                  ref={(input) => { this.email = input }}
                                  type='text'
                                  name='email'
                                  id='email'
                                  placeholder='Email'
                                />
                            </FormGroup>
                            <FormGroup>
                                <input
                                  ref={(input) => { this.password = input }}
                                  type='password'
                                  name='password'
                                  id='password'
                                  placeholder='Password'
                                />
                                <a href=''>Forgot your password?</a>
                            </FormGroup>
                            <FormGroup>
                                <RButton className='btn-primary btn-block' onClick={this.onLogin}>Sign In</RButton>
                            </FormGroup>
                            <FormGroup className='text-center'>
                                <span> - Or - </span>
                            </FormGroup>
                            <FormGroup>
                                <RButton
                                  className='btn-primary btn-block'
                                  onClick={() => hashHistory.push('/register')}
                                >
                                  Create account
                                </RButton>
                            </FormGroup>
                        </Row>
                    </Modal>
                </Column>
            </Row>
        );
    }
}

Login.propTypes = {
    location: React.PropTypes.any.isRequired
}

export default Login
