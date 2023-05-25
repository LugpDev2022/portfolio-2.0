import Image from 'next/image';

import reactLogo from '../../public/reactLogo.png';
import nextLogo from '../../public/nextLogo.png';
import jsLogo from '../../public/jsLogo.png';
import gitLogo from '../../public/gitLogo.png';
import tailwindLogo from '../../public/tailwindcssLogo.png';
import bootstrapLogo from '../../public/bootstrapLogo.png';
import tsLogo from '../../public/tsLogo.png';

const SkillsetRoulette = () => (
  <div
    className='
        bg-[#e1ddbf]
        rounded-full
        w-[325px]
        h-[325px]
        relative
        overflow-hidden
      '
  >
    <div className='h-full w-full rotate-logos'>
      <Image
        alt='Nextjs'
        src={nextLogo}
        className='
          absolute
          top-1 
          left-1/2 
          transform 
          -translate-x-1/2 
          w-[50px]
        '
      />
      <Image
        alt='JavaScript'
        src={jsLogo}
        className='
          absolute
          bottom-1 
          left-1/2 
          transform 
          -translate-x-1/2 
          w-[45px]
          rotate-180
        '
      />
      <Image
        alt='Git'
        src={gitLogo}
        className='
          absolute
          top-1/4 
          right-3
          transform 
          -translate-x-3
          -translate-y-1/4
          w-[50px]
          rotate-[50deg]
        '
      />
      <Image
        alt='Tailwind CSS'
        src={tailwindLogo}
        className='
          absolute
          top-1/4 
          left-3
          transform 
          translate-x-3
          -translate-y-1/4
          w-[50px]
          -rotate-[50deg]
        '
      />
      <Image
        alt='Bootstrap'
        src={bootstrapLogo}
        className='
          absolute
          bottom-1/4 
          left-3
          transform 
          translate-x-3
          translate-y-1/4
          w-[50px]
          -rotate-[125deg]
        '
      />
      <Image
        alt='Typsecript'
        src={tsLogo}
        className='
          absolute
          bottom-1/4 
          right-3
          transform 
          -translate-x-3
          translate-y-1/4
          w-[45px]
          rotate-[120deg]
        '
      />
    </div>
    <Image
      alt='React'
      src={reactLogo}
      className='
          absolute 
          top-1/2 
          left-1/2 
          transform 
          -translate-x-1/2 
          -translate-y-1/2
        '
    />
  </div>
);

export default SkillsetRoulette;
