import { Field, ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';

export default function() {
    const [text2, setText2] = useState('');
    return (
        <div>
            <h1>Form</h1>
            <Formik
                initialValues={{
                    text: ''
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    setText2(values.text);
                    setSubmitting(false);
                }}
                validate={values => {
                    let errors = {};
                    if (!values.text) {
                        errors.text = 'Required';
                    }
                    return errors;
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="text" />
                        <ErrorMessage name="text" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <h1>{text2}</h1>
        </div>
    );
}