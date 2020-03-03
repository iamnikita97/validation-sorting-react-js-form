import React from 'react';

const Select = props => {

    let formControl = "form-control";
    let formMessage = "";
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
        formMessage = 'Please select value';
    }

    return (
        <div className="form-group">
            <select name={props.name} className={formControl} value={props.value} onChange={props.onChange}>
                {props.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            <div className="error-messages">{formMessage}</div>
        </div>
    );
}

export default Select;