import React from 'react';

const TextArea = props => {

    let formControl = "form-control";
    let formMessage = "";
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
        formMessage = 'Please enter address';
    }

    return (
        <div className="form-group">
            <textarea {...props} className={formControl} />
            <div className="error-messages">{formMessage}</div>
        </div>
    );
}

export default TextArea;