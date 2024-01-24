import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const FormAdd = ({ getData }) => {
    async function AddMenu(values) {
        const res = await axios.post("http://localhost:3000/nars", values)
        getData()

    }
    return (
        <Formik
            initialValues={{ image: '', title: '', text: '', price: "" }}
            validationSchema={Yup.object({
                image: Yup.string()
                    .required('Required'),
                title: Yup.string().matches(/^[a-zA-Z ]+?$/, "Must be only digits")
                    .required('Required'),
                text: Yup.string()
                    .required('Required'),
                    price: Yup.number().positive("price must be higher than 0")
                    .required('Required')

            })}
            onSubmit={(values, { resetForm }) => {
                AddMenu(values)
                resetForm()
            }}
        >
            <Form>
                <label htmlFor="image">Image</label>
                <Field name="image" type="text" />
                <ErrorMessage name="image" />

                <label htmlFor="title">Title</label>
                <Field name="title" type="text" />
                <ErrorMessage name="title" />


                <label htmlFor="text">Text</label>
                <Field name="text" type="text" />
                <ErrorMessage name="text" />

                <label htmlFor="price">Price</label>
                <Field name="price" type="text" />
                <ErrorMessage name="price" />

                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
};
export default FormAdd