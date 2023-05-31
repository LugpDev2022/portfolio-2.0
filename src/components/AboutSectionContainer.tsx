import Image, { StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  className?: string;
  background?: string;
  side?: 'left' | 'right';
  asset: {
    type: 'image' | 'html';
    content: any;
  };
  subtitle: string;
}

const AboutSectionContainer: React.FC<Props> = ({
  children,
  className = '',
  background,
  side = 'left',
  asset,
  subtitle,
}) => {
  return (
    <div
      className={`
      ${className}
      ${background ? `bg-[${background}]` : ''}
      ${side === 'left' ? 'sm:text-left' : 'sm:text-right'}
      flex
      flex-col
      gap-5
      items-center
      justify-between
      p-5
      py-6
      text-center
      text-xl
      sm:flex-row
      sm:px-10
      sm:py-12
      md:px-14
      lg:px-24
      xl:px-36
      2xl:justify-around
      
    `}
    >
      <div
        className={`
        ${side === 'left' ? 'sm:order-0' : 'sm:order-1'}
        sm:basis-2/3 
        md:basis-3/5 
        xl:basis-1/2 
        2xl:basis-1/3
      `}
      >
        <h2 className='subtitle'>{subtitle}</h2>
        {children}
      </div>
      <div>
        {asset.type === 'image' ? (
          <Image src={asset.content} alt='Image' />
        ) : (
          asset.content
        )}
      </div>
    </div>
  );
};

export default AboutSectionContainer;
