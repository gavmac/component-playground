import React from 'react';

import TextField from '../components/inputs/styled-input';
import Button from '../components/buttons/styled-button';


import { useFormik } from 'formik';

const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <TextField
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default SignupForm;