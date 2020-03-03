import React from 'react';

const Email = props => {

    
    let formControl = "form-control";
    let formMessage = "";
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
        formMessage = 'Please enter correct email';
    }

    return (
        <div className="form-group">
            <input type="email" className={formControl} {...props} />
            <div className="error-messages">{formMessage}</div>
        </div>
    );
}

export default Email;