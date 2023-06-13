'use client';

import { useState } from 'react';
import { Field, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { getFormErrors } from '@/helpers/getFormErrors';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={async (values) => {
        setIsSubmitting(true);
        const serviceId: any = process.env.NEXT_PUBLIC_EMAILJS_GMAIL_ID;
        const templateId: any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userId: any = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
        try {
          await emailjs.send(serviceId, templateId, values, userId);
          alert('Message sent correctly!');
        } catch (e) {
          alert('Unexpected error, try again later');
        }

        setIsSubmitting(false);
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />

            <span className='form-error'>{props.errors.message}</span>
          </div>

          <button className='form-btn' type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
