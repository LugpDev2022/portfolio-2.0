import AboutSectionContainer from '@/components/AboutSectionContainer';
import SkillsetRoulette from '@/components/SkillsetRoulette';
import Image from 'next/image';

import profilePhoto from '../../public/assets/profile.png';
import aboutImage from '../../public/assets/about.png';
import languagesImage from '../../public/assets/languages.png';
import HomeButton from '@/components/HomeButton';

export default function Home() {
  return (
    <div className='animate__animated animate__fadeIn'>
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

      <AboutSectionContainer
        background='#C6BF88'
        subtitle='About Me'
        asset={{ type: 'image', content: aboutImage }}
      >
        Hi! I&apos;m Luis, a frontend developer born in Mexico. Since I was in
        elementary school, I knew I wanted to dedicate my life to technology. My
        dream is to someday work for a big tech company, so I&apos;m actively
        working towards it. I would also be grateful to help you fulfill your
        dream.
      </AboutSectionContainer>

      <AboutSectionContainer
        subtitle='Languages'
        asset={{ type: 'image', content: languagesImage }}
        side='right'
      >
        I&apos;m Mexican, so Spanish is my native language. However, I have been
        studying English for over 10 years and started taking French classes 3
        years ago, so I have an intermediate level in that language. My next
        objective is to learn Japanese because I am a big fan of anime.
      </AboutSectionContainer>

      <AboutSectionContainer
        background='#C6BF88'
        subtitle='Skillset'
        asset={{ type: 'html', content: <SkillsetRoulette /> }}
      >
        As I mentioned, I&apos;m a frontend web developer. That means I
        specialize in the client-side environment and have knowledge of
        libraries and frameworks like React, Next.js, Bootstrap, and Tailwind
        CSS. These technologies allow me to create a great user experience in a
        short amount of time.
      </AboutSectionContainer>

      <div
        className='
          p-5
          py-6  
          sm:px-10
          sm:py-12
          md:px-14
          lg:px-24
          xl:px-36
        '
      >
        <h2 className='subtitle block text-center'>What&apos;s next?</h2>

        <div
          className='
            flex
            flex-wrap
            justify-center
            gap-5
            md:gap-10
          '
        >
          <HomeButton href='/portfolio'>Check out my work</HomeButton>

          <HomeButton href='/services'>Let&apos;s get in touch</HomeButton>
        </div>
      </div>
    </div>
  );
}
