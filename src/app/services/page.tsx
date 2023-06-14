import ContactCard from '@/components/ContactCard';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';

import emailIcon from '../../../public/icons/email.png';
import whatsappIcon from '../../../public/icons/whatsapp.png';
import linkedinIcon from '../../../public/icons/linkedin.png';

const Services = () => (
  <main className='animate__animated animate__fadeIn py-12'>
    <h3 className='subtitle text-center block mb-10'>My services</h3>

    <div className='flex justify-evenly flex-wrap'>
      <ServiceCard />
      <ServiceCard />
    </div>

    <h3 className='subtitle text-center block my-12'>Contact Me</h3>
    <div
      className='
        gap-12
        grid
        grid-cols-1
        items-center
        max-w-[400px]
        mx-auto
        px-5
        md:grid-cols-3
        md:max-w-5xl
      '
    >
      <div
        className='
          flex
          flex-col 
          gap-5 
          items-center
          justify-center 
        '
      >
        <ContactCard
          icon={linkedinIcon}
          label='Linkedin'
          href='https://www.linkedin.com/in/luiscerv/'
          contact='Luis Cervantes'
        />
        <ContactCard
          icon={emailIcon}
          label='Email'
          href='mailto:lugpdev@gmail.com'
          contact='lugpdev@gmail.com'
        />
        <ContactCard
          icon={whatsappIcon}
          label='WhatsApp'
          href=' https://wa.me/527778957110'
          contact='777-895-7110'
        />
      </div>
      <ContactForm />
    </div>
  </main>
);

export default Services;
