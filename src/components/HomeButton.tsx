'use client';

import { useRouter } from 'next/navigation';

interface Props {
  children: React.ReactNode;
  href: string;
}

const HomeButton: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    localStorage.setItem('homeScrollPosition', scrollY.toString());
  };

  return (
    <button className='btn-primary' onClick={handleClick}>
      {children}
    </button>
  );
};

export default HomeButton;
