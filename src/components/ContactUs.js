import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

  input,
  textarea {
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      dateOfBirth: '',
      bio: '',
      profileImage: '',
      bannerImage: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      address: Yup.string().required('Required'),
      dateOfBirth: Yup.date().required('Required'),
      bio: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Header title="Contact Us" />
      {/* <h2>Contact Us</h2> */}
      <Form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div> : null}

        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dateOfBirth}
        />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <div>{formik.errors.dateOfBirth}</div> : null}

        <textarea
          name="bio"
          placeholder="Bio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bio}
        />
        {formik.touched.bio && formik.errors.bio ? <div>{formik.errors.bio}</div> : null}

        <input
          type="file"
          name="profileImage"
          onChange={(event) => formik.setFieldValue('profileImage', event.currentTarget.files[0])}
        />
        <input
          type="file"
          name="bannerImage"
          onChange={(event) => formik.setFieldValue('bannerImage', event.currentTarget.files[0])}
        />

        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

export default ContactUs;