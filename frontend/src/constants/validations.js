import { ErrorMessages } from "./messages";

export const validateLoginForm = values => {
    let errors = {};

    if (!values.username)
        errors.username = ErrorMessages.fieldRequired;
    if (!values.password)
        errors.password = ErrorMessages.fieldRequired;

    return errors;
};

export const validateSignupForm = values => {
    let errors = {};

    if (!values.username)
        errors.username = ErrorMessages.fieldRequired;
    if (!values.password)
        errors.password = ErrorMessages.fieldRequired;
    if (!values.first_name)
        errors.first_name = ErrorMessages.fieldRequired;
    if (!values.last_name)
        errors.last_name = ErrorMessages.fieldRequired;
    if (!values.email)
        errors.email = ErrorMessages.fieldRequired;
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        errors.email = ErrorMessages.emailInvalid;

    return errors;
};