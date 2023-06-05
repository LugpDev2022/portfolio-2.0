import Link from 'next/link';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, path }) => {
  const handleClick = () => {
    if (path !== '/') return;

    localStorage.setItem('homeScrollPosition', scrollY.toString());
  };

  return (
    <li
      className='mt-4 sm:mt-0 flex flex-col justify-center'
      onClick={handleClick}
    >
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
};

export default NavLink;
