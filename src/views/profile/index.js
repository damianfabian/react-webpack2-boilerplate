import React, { Component } from 'react';

class Profile extends Component {
    render () {
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Your Profile</h1>
                    <p>
                        All the information about your profile
                    </p>
                    <p><a className='btn btn-primary btn-lg' href='javascript:;' role='button'>Learn more</a></p>
                </div>
            </div>
        );
    }
}

export default Profile;