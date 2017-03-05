import React, { Component } from 'react'
import { Row, Column, Modal, FormGroup } from 'components/grid'
import RButton from 'components/button'
import Logo from 'images/logo.png'
import { hashHistory } from 'react-router'

class Login extends Component {
    constructor (props) {
        super(props)
        this.onCreate = this.onCreate.bind(this)
    }

    onCreate () {
        this.name = 'as'
        // TODO: Notification
    }

    render () {
        return (
            <Row className='register'>
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
                            </FormGroup>
                            <FormGroup>
                                <RButton
                                  className='btn-primary btn-block'
                                  onClick={() => hashHistory.push('/create')}
                                >
                                  Create account
                                </RButton>
                            </FormGroup>
                            <FormGroup className='text-center'>
                                <span> - Or - </span>
                            </FormGroup>
                            <FormGroup>
                                <RButton
                                  className='btn-primary btn-block'
                                  onClick={() => hashHistory.push('/login')}
                                >
                                  Sign In
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
