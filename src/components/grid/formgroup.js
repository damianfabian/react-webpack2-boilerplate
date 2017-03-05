import React, { Component, PropTypes } from 'react';
import classnames from 'classnames'

class FormGroup extends Component {
    render () {
        return (
            <div className={classnames('form-group', this.props.className)}>
                {
                    React.Children.map(this.props.children, (child) => {
                        const addClass = child.type === 'input' ? 'form-control' : ''
                        return React.cloneElement(child, {
                            className: `${child.props.className} ${addClass}`
                        })
                    })
                }
            </div>
        )
    }
}

FormGroup.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
};

FormGroup.defaultProps = {
    className: ''
}

export default FormGroup
