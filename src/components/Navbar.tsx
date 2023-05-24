'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
import menuIcon from '../../public/menu.png';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => (
  <li className='mt-4 sm:mt-0 flex flex-col justify-center'>
    <Link className='hover:text-[#4C837A] transition duration-200' href={href}>
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <nav className='bg-white p-3 sm:px-8 fixed w-full top-0 left-0 sm:flex sm:h-[72px]'>
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
          sm:inline-flex
          text-[#85BAB1] 
          font-bold 
          text-lg 
          text-center
          sm:flex-wrap
          sm:gap-8
        `}
      >
        <hr className='border-[1.5px] my-4 border-[#85BAB1] sm:hidden' />
        <NavLink href='/'>About</NavLink>
        <NavLink href='projects'>Projects</NavLink>
        <NavLink href='contact'>Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
