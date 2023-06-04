import Image, { StaticImageData } from 'next/image';

import githubIcon from '../../public/icons/github-mark.svg';
import linkIcon from '../../public/icons/url.png';

interface Props {
  githubUrl?: string;
  image: StaticImageData;
  isHidden?: boolean;
  title: string;
  url: string;
}

const Project: React.FC<Props> = ({
  githubUrl,
  image,
  isHidden,
  title,
  url,
}) => (
  <div
    className={`
      ${isHidden ? 'hidden' : ''}
      relative 
      overflow-hidden 
      rounded-lg 
      max-w-xl
    `}
  >
    <a href={url} target='_blank'>
      <Image src={image} alt='Project Screenshot' />
    </a>

    <div
      className='
      absolute
      bg-[#C6BF88] 
      bottom-0
      left-0
      w-full 
      font-bold
      flex
      justify-center
      items-center
      py-1
      sm:justify-between
      sm:px-4
      sm:py-2
    '
    >
      <a href={url} target='_blank' className='text-[#4C837A]'>
        {title}
      </a>

      <div className='hidden sm:flex gap-4 '>
        {githubUrl && (
          <a href={githubUrl} className='w-6' target='_blank'>
            <Image src={githubIcon} alt='github' />
          </a>
        )}

        <a href={url} className='w-6' target='_blank'>
          <Image src={linkIcon} alt='link' />
        </a>
      </div>
    </div>
  </div>
);

export default Project;
