import ContactCard from '@/components/ContactCard';
import ServiceCard from '@/components/ServiceCard';

import emailIcon from '../../../public/icons/email.png';
import whatsappIcon from '../../../public/icons/whatsapp.png';

const page = () => (
  <div className='animate__animated animate__fadeIn py-12'>
    <h3 className='subtitle text-center block mb-10'>My services</h3>

    <div className='flex justify-evenly flex-wrap'>
      <ServiceCard />
      <ServiceCard />
    </div>

    <h3 className='subtitle text-center block my-12'>Contact Me</h3>
    <div className='flex flex-col gap-5 justify-center items-center'>
      <ContactCard icon={emailIcon} label='Linkedin' href='/' contact='@user' />
      <ContactCard
        icon={emailIcon}
        label='Email'
        href='/'
        contact='lugpdev@gmail.com'
      />
      <ContactCard
        icon={whatsappIcon}
        label='WhatsApp'
        href='/'
        contact='777-895-7110'
      />
    </div>
  </div>
);

export default page;
