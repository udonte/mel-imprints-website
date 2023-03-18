import React from 'react';
//import data
import { copyright } from '../data';

const Copyright = () => {
  //destructure copyright data
  const { link1, link2, copyText, social} = copyright;
  return (
    <div className='flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between' data-aos='fade-up' data-aos-offset='0' data-aos-delay='200'>
      {/* links */}
      <div className='flex gap-x-6'>
        <a href={link1.href} className='hover:text-accent transition'>{link1.name}</a>
        <a href={link2.href} className='hover:text-accent transition'>{link2.name}</a>
      </div>
      {/* copyright text */}
      <div>{copyText}</div>
      {/* social icons */}
      <ul className='flex gap-x-[12px]'>
        {social.map((socialIcon, index) => {
          //destructure icon
          const { href, icon } = socialIcon;
          return (
            <li key={index}>
              <a href={href}>
                <img src={icon} alt="" />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Copyright;
