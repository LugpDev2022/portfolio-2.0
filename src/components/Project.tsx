import Image, { StaticImageData } from 'next/image';

interface Props {
  githubUrl?: string;
  image: StaticImageData;
  title: string;
  demoUrl: string;
}

const Project: React.FC<Props> = ({ githubUrl, image, title, demoUrl }) => (
  <div
    className='
      bg-[#C6BF88] 
      max-w-[350px]
      p-4
      pt-6
      rounded-tr-[15px] 
      rounded-lb-[15px]
      rounded-tl-[50px]
      rounded-br-[50px]
      hover:shadow-lg
      hover:shadow-gray-500
      transition
    '
  >
    <Image src={image} alt='Project Image' className='rounded-lg' />

    <h4 className='mt-5 mb-7 font-bold text-[#4C837A] text-xl'>{title}</h4>

    <a
      href={demoUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='
        bg-[#4C837A] 
        text-white 
        hover:bg-[#24403B]
        font-semibold 
        me-5
        p-2 
        rounded-lg 
        transition
      '
    >
      Live Demo
    </a>
    {githubUrl && (
      <a
        href={githubUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='
          border-[#24403B] 
          text-[#24403B] 
          hover:border-[#4C837A]
          hover:text-[#4C837A]
          border-2 
          font-semibold 
          p-2 
          rounded-lg
          transition
        '
      >
        Github
      </a>
    )}
  </div>
);

export default Project;
