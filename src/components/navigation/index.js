import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import './style.css'


class Navigation extends Component {
    static buildLink (link) {
        const childs = link.childs ?
            (<ul className='dropdown-menu'> {
                link.childs.map(child => Navigation.buildLink(child))
            }
            </ul>) : null

        const drdClass = childs ? 'dropdown' : null
        const drdLink = [
            <a
              className='dropdown-toggle'
              data-toggle='dropdown'
              role='button'
              aria-haspopup='true'
              aria-expanded='false'
            >{link.label} <span className='caret' />
            </a>,
            childs
        ]

        return (
            <li key={link.to} className={drdClass}> {
                link.childs ? drdLink :
                <Link to={link.to} activeClassName='active' onlyActiveOnIndex={link.isHome}>{link.label}</Link>
            }
            </li>
        )
    }

    constructor (props) {
        super(props)
        this.closeMenus = this.closeMenus.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.closeMenusOnResize = this.closeMenusOnResize.bind(this)
        this.buildNavigation = this.buildNavigation.bind(this)
    }

    componentDidMount () {
        const self = this
        // Navbar and dropdowns
        this.toggle = this.nav.getElementsByClassName('navbar-toggle')[0]
        this.collapse = this.nav.getElementsByClassName('navbar-collapse')[0]
        this.dropdowns = this.nav.getElementsByClassName('dropdown')

        // Add click handling to dropdowns
        for (let i = 0; i < this.dropdowns.length; i++) {
            this.dropdowns[i].addEventListener('click', function() {
                // this here is dropdown
                if (document.body.clientWidth < 768) {
                    const open = this.classList.contains('open')
                    self.closeMenus()
                    if (!open) {
                        this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
                        this.classList.toggle('open');
                    }
                }
            });
        }

        // Event listeners
        window.addEventListener('resize', this.closeMenusOnResize, false);
        this.toggle.addEventListener('click', this.toggleMenu, false);
    }

    // Toggle if navbar menu is open or closed
    toggleMenu () {
        this.collapse.classList.toggle('collapse');
        this.collapse.classList.toggle('in');
    }

    // Close all dropdown menus
    closeMenus () {
        for (let j = 0; j < this.dropdowns.length; j++) {
            this.dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
            this.dropdowns[j].classList.remove('open');
        }
    }

    // Close dropdowns when screen becomes big enough to switch to open by hover
    closeMenusOnResize () {
        if (document.clientWidth >= 768) {
            this.closeMenus(this.dropdowns)
            this.collapse.classList.add('collapse');
            this.collapse.classList.remove('in');
        }
    }

    buildNavigation () {
        const leftNav = []
        const rightNav = []
        this.props.datas.map((link) => {
            switch (link.side) {
            case 'right':
                rightNav.push(Navigation.buildLink(link))
                break
            case 'left':
            default:
                leftNav.push(Navigation.buildLink(link))
                break
            }
        })

        return [
            <ul className='nav navbar-nav' key='left-nav'>
                {leftNav}
            </ul>,
            <ul className='nav navbar-nav' key='right-nav'>
                {rightNav}
            </ul>
        ]
    }

    render () {
        return (
            <nav className='navbar navbar-default' ref={nav => this.nav = nav}>
                <div className='container-fluid'>

                    <div className='navbar-header'>
                        <a href='javascript:;' type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar' />
                            <span className='icon-bar' />
                            <span className='icon-bar' />
                        </a>
                        <a href='javascript:;' className='navbar-brand'>Brand</a>
                    </div>


                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                        { this.buildNavigation() }
                    </div>
                </div>
            </nav>

        )
    }
}

Navigation.propTypes = {
    datas: PropTypes.any.isRequired
};

export default Navigation;