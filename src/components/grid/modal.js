import React, { Component, PropTypes } from 'react';
import classnames from 'classnames'

class Modal extends Component {
    render () {
        const title = this.props.title ? (<div className='modal-header'>
            <h1 className='text-center'>{this.props.title}</h1>
        </div>) : null
        return (
            <div className={classnames('modal-dialog', this.props.className)}>
                <div className='modal-content'>
                    {title}
                    <div className='modal-body'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    title: PropTypes.string
};

Modal.defaultProps = {
    className: '',
    title: ''
}

export default Modal