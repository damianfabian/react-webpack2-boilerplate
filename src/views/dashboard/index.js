import React, { Component } from 'react';

class Dashboard extends Component {
    render () {
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Welcome Back!</h1>
                    <p>
                        This page is only for register users.
                    </p>
                    <p><a className='btn btn-primary btn-lg' href='javascript:;' role='button'>Learn more</a></p>
                </div>
            </div>
        );
    }
}

export default Dashboard;