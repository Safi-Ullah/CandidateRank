import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { validateLoginForm } from '../../constants/validations';
import { API_URLS, Enums, ROUTE_URLS, LOGIN_INIT_STATE } from '../../constants';

export const Login = props => {

    const handleLogin = (values, { setSubmitting }) => {
        setSubmitting(true);
        axios.post(API_URLS.login, values).then(response => {
            setSubmitting(false);
            if (response.status === Enums.statusCodes.HTTP_200_OK) {
                localStorage.setItem('token', response.data.token);
                props.history.push(ROUTE_URLS.home);
            }
        });
    };

    return (
        <Formik
            initialValues={LOGIN_INIT_STATE}
            validate={validateLoginForm}
            onSubmit={handleLogin}
        >
            {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            isinvalid={touched.username && errors.username}
                            value={values.username}
                            onChange={handleChange}
                            placeholder="Enter username" />
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            isinvalid={touched.password && errors.password}
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Password" />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-muted">
                        Forgot your password. <Link
                            to={{ pathname: ROUTE_URLS.signup }}
                        > Click here </Link>.
                    </Form.Text>
                </Form>
            )}
        </Formik>
    );
};