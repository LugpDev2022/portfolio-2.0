import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const useNavbarControl = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    window.addEventListener('pagehide', () => {
      localStorage.removeItem('homeScrollPosition');
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowNavbar(false);
    });
  }, []);

  useEffect(() => {
    const position = localStorage.getItem('homeScrollPosition');

    if (!position || path !== '/') return;

    scrollTo(0, Number(position));
  }, [path]);

  useEffect(() => {
    setShowNavbar(false);
  }, [path]);

  return { setShowNavbar, showNavbar, path };
};

export default useNavbarControl;
