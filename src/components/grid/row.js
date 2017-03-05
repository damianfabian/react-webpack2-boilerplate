import React, { Component, PropTypes } from 'react';
import classnames from 'classnames'

class Row extends Component {
    render () {
        return (
            <div className={classnames('row', this.props.className)}>
                { this.props.children }
            </div>
        )
    }
}

Row.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
};

Row.defaultProps = {
    className: ''
}

export default Row
