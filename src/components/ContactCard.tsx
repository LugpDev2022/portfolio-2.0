import Image, { StaticImageData } from 'next/image';

interface Props {
  icon: StaticImageData;
  label: string;
  href: string;
  contact: string;
}

const ContactCard: React.FC<Props> = ({ icon, label, href, contact }) => (
  <div
    className='
        bg-[#C6BF88]
        w-full
        flex
        flex-col
        items-center
        gap-5
        py-2 
        rounded-2xl
        font-semibold
        text-xl
        px-3
      '
  >
    <Image src={icon} alt='Social media icon' width={40} height={40} />

    <div>
      <span className='text-[#4C837A] block w-full text-center'>{label}</span>
      <span className='text-[#67958E] block w-full text-center'>{contact}</span>
    </div>

    <a
      className='text-white'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      Send a message
    </a>
  </div>
);

export default ContactCard;
