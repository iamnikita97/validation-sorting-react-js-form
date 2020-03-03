import React from 'react';

const TextInput = props => {

    let formControl = "form-control";
    // let validationError = null;
    let formMessage = "";
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
        formMessage = 'Please enter a valid value!';
    }

    return (
        <div className="form-group">
            <input type="text" className={formControl} {...props} />
            <div className="error-messages">{formMessage}</div>
        </div>
    );
}

export default TextInput;