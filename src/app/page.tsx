import Image from 'next/image';
import profilePhoto from '../../public/profile.png';

export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center flex-col sm:flex-row py-6 gap-12'>
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
    </>
  );
}
