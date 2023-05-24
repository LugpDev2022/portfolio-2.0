import AboutSectionContainer from '@/components/AboutSectionContainer';
import Image from 'next/image';
import profilePhoto from '../../public/profile.png';
import aboutImage from '../../public/about.png';

export default function Home() {
  return (
    <>
      <div
        className='
          flex
          flex-col
          gap-12
          items-center
          justify-center
          py-6
          sm:flex-row
          sm:py-12
        '
      >
        <div className='bg-[#C6BF88] rounded-full overflow-hidden h-[250px] w-[250px]'>
          <Image alt='Photo' src={profilePhoto} />
        </div>
        <div className='flex flex-col gap-2 text-[#4C837A] text-center sm:text-left font-bold'>
          <span className='text-2xl'>Hello World!</span>
          <span className='text-xl'>It&apos;s me</span>
          <h1 className='text-3xl'>
            Luis Alberto <br /> Cervantes García
          </h1>
          <h2 className='text-xl'>Fronted Web Developer</h2>
        </div>
      </div>

      <AboutSectionContainer background='#C6BF88'>
        <div className='sm:basis-2/3 md:basis-3/5 xl:basis-1/2 2xl:basis-1/3'>
          <h2 className='subtitle'>About Me</h2>
          <p className='text-white'>
            Hi! I&apos;m Luis, a frontend developer born in Mexico. Since I was
            in elementary school, I knew I wanted to dedicate my life to
            technology. My dream is to someday work for a big tech company, so
            I&apos;m actively working towards it. I would also be grateful to
            help you fulfill your dream.
          </p>
        </div>
        <div>
          <Image src={aboutImage} alt='About Image' />
        </div>
      </AboutSectionContainer>
    </>
  );
}
