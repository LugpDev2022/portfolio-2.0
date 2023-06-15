import Link from 'next/link';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, path }) => (
  <li className='mt-4 sm:mt-0 flex flex-col justify-center'>
    {path === href ? (
      <span
        className='
          text-[#4C837A]
          hover:text-[#4C837A] 
          transition 
          duration-200
          cursor-pointer
        '
      >
        {children}
      </span>
    ) : (
      <Link
        className='
          text-[#85BAB1]
          hover:text-[#4C837A]
          transition 
          duration-200
        '
        href={href}
      >
        {children}
      </Link>
    )}
  </li>
);

export default NavLink;
