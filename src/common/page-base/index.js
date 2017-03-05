import React, { Component } from 'react'
import Navigation from 'components/navigation'

// TODO: Replace this with an Ajax or JSON file
const NAV_MENU = [
    {
        label: 'Dashboard',
        to: '/',
        isHome: true
    },
    {
        label: 'Profile',
        to: '/profile'
    },
    {
        label: 'Account',
        childs: [
            {
                label: 'Logout',
                to: '/login'
            }
        ]
    }
]

class PageBase extends Component {
    render () {
        return (
            <div className='container'>
                <Navigation datas={NAV_MENU} />
                <div className='row'>
                    <div className='col-xs-12'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default PageBase

PageBase.propTypes = {
    children: React.PropTypes.object.isRequired
}
