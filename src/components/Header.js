import React from 'react';
import { useState, useEffect } from 'react';
//import data
import { header } from '../data';
//import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
//import components
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav'


const Header = () => {
  //Mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  //header state
  const [isActive, setIsActive] = useState(false);
  //destructure header data
  const { logo, btnText } = header;
  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10 border-b-2 border-light-100`}>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href="#/" data-aos='fade-down' data-aos-delay='1000'>
          <img src={logo} alt="" />
        </a>
        {/* nav - initially hidden, show on desktop mode */}
        <div className='hidden lg:flex' data-aos='fade-down' data-aos-delay='1200'>
          <Nav />
        </div>
        {/* cta button - initially hidden, show on desktop */}
        <a href="tel:2348141667571">
          <button className='btn btn-sm btn-outline hidden lg:flex' data-aos='fade-down' data-aos-delay='1400'>{btnText}</button>
          </a>
        {/* mobile nav trigger btn -hidden on desktop */}

        <button
          className='lg:hidden'
          onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? <HiOutlineX className='text-3xl text-accent' /> : <HiMenuAlt4 className='text-3xl text-accent' />}
          </button>
        {/* mobile nav, hidden on desktop */}
        <div
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          } fixed top-0 bottom-[50%] w-[50vw] lg:hidden transition-all rounded-br-[10px]`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
