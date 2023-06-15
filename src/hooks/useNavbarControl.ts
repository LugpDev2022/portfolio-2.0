import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const useNavbarControl = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowNavbar(false);
    });
  }, []);

  useEffect(() => {
    setShowNavbar(false);
  }, [path]);

  return { setShowNavbar, showNavbar, path };
};

export default useNavbarControl;
