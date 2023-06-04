'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.svg';
import menuIcon from '../../public/icons/menu.png';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, path }) => (
  <li className='mt-4 sm:mt-0 flex flex-col justify-center'>
    <Link
      className={`
        ${path === href ? 'text-[#4C837A]' : 'text-[#85BAB1]'}
        hover:text-[#4C837A] 
        transition 
        duration-200
      `}
      href={href}
    >
      {children}
    </Link>
  </li>
);

//TODO: Add animation when showing mobile navbar
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const path = usePathname();

  return (
    <nav
      className='
        bg-white 
        fixed
        left-0 
        p-3 
        shadow-black/25 
        shadow-md 
        sm:flex 
        sm:h-[72px]
        sm:px-8 
        top-0 
        w-full
        z-10
      '
    >
      <div className='flex justify-between sm:me-16'>
        <Link href='/' className='w-12'>
          <Image alt='Logo' src={logo} />
        </Link>

        <button
          onClick={() => setShowNavbar(!showNavbar)}
          className='block sm:hidden'
        >
          <Image alt='Menu' src={menuIcon} className='w-10' />
        </button>
      </div>

      <ul
        className={`
          ${showNavbar ? 'block' : 'hidden'} 
          font-bold 
          sm:flex-wrap
          sm:gap-8
          sm:inline-flex 
          text-center
          text-lg 
        `}
      >
        <hr className='border-[1.5px] my-4 border-[#85BAB1] sm:hidden' />
        <NavLink path={path} href='/'>
          About
        </NavLink>
        <NavLink path={path} href='/projects'>
          Projects
        </NavLink>
        <NavLink path={path} href='/contact'>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
