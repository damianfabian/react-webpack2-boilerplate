import React, { Component, PropTypes } from 'react';
import classnames from 'classnames'

const CLASSES = ['lg', 'md', 'sm']

class Column extends Component {
    render () {
        const colClass = CLASSES.map(i => `col-${i}-${this.props.size}`)
        return (
            <div className={classnames(colClass, 'col-xs-12', this.props.className)}>
                { this.props.children }
            </div>
        )
    }
}

Column.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

Column.defaultProps = {
    className: '',
    size: 12
}

export default Column
