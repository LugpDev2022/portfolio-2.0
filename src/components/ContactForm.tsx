'use client';

import { getFormErrors } from '@/helpers/getFormErrors';
import { useForm } from '@/hooks/useForm';
import { useState } from 'react';

const ContactForm = () => {
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { onInputChange, formState } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const errors = getFormErrors(formState);
    setFormErrors(errors);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-7 justify-around md:col-span-2 h-full'
    >
      <div className='relative'>
        <label className='input-label'>Name</label>
        <input
          type='text'
          className='contact-input'
          placeholder='Your name'
          name='name'
          onChange={onInputChange}
        />
        <span className='absolute right-1 -top-5 text-sm text-red-600 font-semibold'>
          {formErrors.name}
        </span>
      </div>
      <div className='relative'>
        <label className='input-label'>Email</label>
        <input
          type='email'
          className='contact-input'
          placeholder='email@example.com'
          name='email'
          onChange={onInputChange}
        />
        <span className='absolute right-1 -top-5 text-sm text-red-600 font-semibold'>
          {formErrors.email}
        </span>
      </div>
      <div className='relative'>
        <label className='input-label'>Message</label>
        <textarea
          rows={10}
          className='contact-input py-3'
          placeholder='Your message here!!!'
          name='message'
          onChange={onInputChange}
        ></textarea>
        <span className='absolute right-1 -top-5 text-sm text-red-600 font-semibold'>
          {formErrors.message}
        </span>
      </div>

      <button
        className='
          bg-[#4c837a] 
          hover:bg-[#24403b]
          rounded-xl
          h-11
          text-white
          font-bold
          text-center
          w-full
        '
        type='submit'
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
