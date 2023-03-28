import React from 'react';

const navData = [
  { href: '/', name: 'home' },
  { href: '/about', name: 'about' },
  { href: '/menu', name: 'menu' },
  { href: '/testimonials', name: 'Reviews' },
  { href: '/reservation', name: 'Reservation' },
  { href: '/team', name: 'Chef' },
];

const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-4'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                className='text-xl capitalize font-bold  hover:text-white transition-all duration-300'
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;