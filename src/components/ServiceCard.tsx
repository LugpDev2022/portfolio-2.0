import Image, { StaticImageData } from 'next/image';

interface Props {
  icon: StaticImageData;
  serviceName: string;
  features: string[];
  includes: string[];
}

const ServiceCard: React.FC<Props> = ({
  icon,
  serviceName,
  features,
  includes,
}) => (
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

    <h4 className='text-[#4C837A] font-bold mb-3 text-lg'>{serviceName}</h4>

    <h5 className='text-[#4C837A] font-semibold text-lg'>Includes</h5>
    <ul className='text-[#67958E] flex flex-col gap-0 list-disc list-inside font-medium text-lg'>
      {includes.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>

    <h5 className='text-[#4C837A] font-semibold text-lg mt-3'>Features</h5>
    <ul className='text-[#67958E] flex flex-col gap-0 list-disc list-inside font-medium text-lg'>
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
