'use client';

import { Field, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { getFormErrors } from '@/helpers/getFormErrors';

const ContactForm = () => {
  const handleBlur = (formValues: any) => {
    localStorage.setItem('formValues', JSON.stringify(formValues));
  };

  const localStorageFormValues = localStorage.getItem('formValues');

  const initialValues = localStorageFormValues
    ? JSON.parse(localStorageFormValues)
    : {
        name: '',
        email: '',
        message: '',
      };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        const serviceId: any = process.env.NEXT_PUBLIC_EMAILJS_GMAIL_ID;
        const templateId: any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userId: any = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

        // const response = await emailjs.send(
        //   serviceId,
        //   templateId,
        //   values,
        //   userId
        // );
      }}
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
              onBlur={() => handleBlur(props.values)}
            />
            {props.errors.name && (
              <span className='form-error'>{String(props.errors.name)}</span>
            )}
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
              onBlur={() => handleBlur(props.values)}
            />
            {props.errors.email && (
              <span className='form-error'>{String(props.errors.email)}</span>
            )}
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
              onBlur={() => handleBlur(props.values)}
            />
            {props.errors.message && (
              <span className='form-error'>{String(props.errors.message)}</span>
            )}
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
