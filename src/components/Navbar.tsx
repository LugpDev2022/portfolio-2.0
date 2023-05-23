'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
import menuIcon from '../../public/menu.png';
import { useState } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <nav className='bg-white p-3 fixed w-full top-0 left-0'>
      <div className='flex justify-between items-center'>
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
          sm:block
          text-[#85BAB1] 
          font-bold 
          text-lg 
          text-center
        `}
      >
        <hr className='border-[1.5px] my-4 border-[#85BAB1]' />
        <li>
          <Link href='/'>About</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
