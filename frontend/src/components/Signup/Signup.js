import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateSignupForm } from '../../constants/validations';
import { API_URLS, Enums, ROUTE_URLS, SIGNUP_INIT_STATE } from '../../constants';

export const Signup = props => {

    const handleSignup = (values, { setSubmitting }) => {
        setSubmitting(true);
        axios.post(API_URLS.signup, values).then(response => {
            setSubmitting(false);
            if (response.status === Enums.statusCodes.HTTP_201_CREATED) {
                localStorage.setItem('token', response.data.token);
                props.history.push(ROUTE_URLS.home);
            }
        });
    };

    return (
        <Formik
            initialValues={SIGNUP_INIT_STATE}
            validate={validateSignupForm}
            onSubmit={handleSignup}
        >
            {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            name="first_name"
                            isinvalid={touched.first_name && errors.first_name}
                            value={values.first_name}
                            onChange={handleChange}
                            placeholder="First Name" />
                        <Form.Control.Feedback type="invalid">
                            {errors.first_name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            name="last_name"
                            isinvalid={touched.last_name && errors.last_name}
                            value={values.last_name}
                            onChange={handleChange}
                            placeholder="Last Name" />
                        <Form.Control.Feedback type="invalid">
                            {errors.last_name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            isinvalid={touched.email && errors.email}
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email" />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
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
                            isinvalid={touched.username && errors.username}
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
                </Form>
            )}
        </Formik>
    );
};