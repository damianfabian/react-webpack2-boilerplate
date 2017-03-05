import React, { Component, PropTypes } from 'react';
import classnames from 'classnames'
import _ from 'lodash'

class Button extends Component {
    render () {
        const props = _.omit(this.props, ['className', 'children'])
        return (
            <button className={classnames('btn btn-hirewolf', this.props.className)} {...props}>
                {this.props.children}
            </button>
        )
    }
}

Button.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
}

Button.defaultProps = {
    className: 'btn-primary'
}

export default Button
