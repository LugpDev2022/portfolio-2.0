const ContactForm = () => {
  return (
    <form className='flex flex-col gap-7 justify-around md:col-span-2 h-full'>
      <input type='text' className='contact-input' placeholder='Full Name' />
      <input type='email' className='contact-input' placeholder='Email' />
      <textarea
        rows={10}
        className='contact-input py-2'
        placeholder='Your Message'
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
