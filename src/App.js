import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Notification from 'react-notification-system'
import PageBase from 'common/page-base'
import Login from 'views/login'
import Register from 'views/register'
import Dashboard from 'views/dashboard'
import Profile from 'views/profile'
import Auth from 'libs/auth'
import 'fonts/fonts.css'
import './App.css'

class App extends Component {
    render () {
        return (
            <div className='container-fluid app-container'>
                <Router history={hashHistory}>
                    <Route path='/' component={PageBase} onEnter={Auth.redirect}>
                        <IndexRoute component={Dashboard} />
                        <Route path='/profile' component={Profile} />
                    </Route>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Router>
                <Notification ref={ref => window.Notification = ref} />
            </div>
        )
    }
}

export default App
