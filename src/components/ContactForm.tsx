'use client';

import { getFormErrors } from '@/helpers/getFormErrors';
import { Field, Formik } from 'formik';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={(values) => console.log(values)}
      validate={getFormErrors}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(props) => (
        <form
          className='flex flex-col gap-7 justify-around md:col-span-2 h-full'
          onSubmit={props.handleSubmit}
        >
          <div className='relative'>
            <label className='input-label'>Name</label>
            <Field
              name='name'
              type='text'
              placeholder='Your name'
              value={props.values.name}
              className='contact-input'
              onChange={props.handleChange}
            />
            <span className='form-error'>{props.errors.name}</span>
          </div>
          <div className='relative'>
            <label className='input-label'>Email</label>
            <Field
              name='email'
              type='email'
              placeholder='email@example.com'
              value={props.values.email}
              className='contact-input'
              onChange={props.handleChange}
            />
            <span className='form-error'>{props.errors.email}</span>
          </div>
          <div className='relative'>
            <label className='input-label'>Message</label>
            <Field
              as='textarea'
              rows={10}
              name='message'
              placeholder='Your message here!!!'
              value={props.values.message}
              className='contact-input py-3'
              onChange={props.handleChange}
            />

            <span className='form-error'>{props.errors.message}</span>
          </div>

          <button className='form-btn' type='submit'>
            Send Message
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
