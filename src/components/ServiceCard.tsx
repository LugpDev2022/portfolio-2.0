import Image, { StaticImageData } from 'next/image';

interface Props {
  icon: StaticImageData;
  serviceName: string;
  features: string[];
}

const ServiceCard: React.FC<Props> = ({ icon, serviceName, features }) => (
  <div
    className='
        bg-[#C6BF88]
        relative
        rounded-tr-[15px] 
        rounded-bl-[15px]
        rounded-tl-[50px]
        rounded-br-[50px]
        px-6
        pb-3
        pt-9
     
      '
  >
    <div
      className='
          bg-[#4C837A]
          absolute
          w-[60px]
          h-[60px]
          -top-7
          right-5
          flex
          justify-center
          items-center
          rounded-lg
          p-2
        '
    >
      <Image src={icon} alt='Service Icon' />
    </div>

    <h4 className='text-[#4C837A] font-bold mb-2'>{serviceName}</h4>

    <ul className='text-[#67958E] flex flex-col gap-0 list-disc list-inside'>
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
