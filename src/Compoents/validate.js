const validate = (value, rules) => {

    let isValid = true;

    for (let rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(value);
                break;

            case 'minLength':
                isValid = isValid && minLengthValidator(value, rules[rule]);
                break;

            case 'maxLength':
                isValid = isValid && maxLengthValidator(value, rules[rule]);
                break;

            case 'isRequired':
                isValid = isValid && requiredValidator(value);
                break;

            default:
                isValid = true;
        }
    }

    return isValid;
}

/* minLength Val */

const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

/* maxLength Val */

const maxLengthValidator = (value, maxLength) => {
    return value.length <= maxLength;
}

/* Check to confirm that feild is required */

const requiredValidator = value => {
    return value.trim() !== '';
}


/* Email validation */

const emailValidator = value => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

export default validate;