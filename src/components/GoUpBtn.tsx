'use client';

import { useEffect, useState } from 'react';

//TODO: Add animations
//TODO: Change colors
const GoUpBtn = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handler = () => {
      if (scrollY > window.innerHeight) return setIsHidden(false);

      setIsHidden(true);
    };

    window.addEventListener('scroll', handler);

    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <button
      onClick={() => scrollTo(0, 0)}
      className={`
        ${isHidden ? 'hidden' : 'fixed'}
        bottom-5
        right-5
        bg-white 
        rounded-full
        w-12 
        h-12
        flex
        justify-center
        items-center
        -rotate-90
        text-3xl
      `}
    >
      -&gt;
    </button>
  );
};

export default GoUpBtn;
