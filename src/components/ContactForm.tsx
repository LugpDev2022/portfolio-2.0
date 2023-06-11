'use client';

import { getFormErrors } from '@/helpers/getFormErrors';
import { useForm } from '@/hooks/useForm';

const ContactForm = () => {
  const { onInputChange, onResetForm, formState } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const errors = getFormErrors(formState);

    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-7 justify-around md:col-span-2 h-full'
    >
      <input
        type='text'
        className='contact-input'
        placeholder='Full Name'
        name='name'
        onChange={onInputChange}
      />
      <input
        type='email'
        className='contact-input'
        placeholder='Email'
        name='email'
        onChange={onInputChange}
      />
      <textarea
        rows={10}
        className='contact-input py-2'
        placeholder='Your Message'
        name='message'
        onChange={onInputChange}
      ></textarea>

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
