import React from 'react';
//import data
import { nav } from '../data';


const Nav = () => {
  return <nav>
    <ul className='flex gap-x-10'>
      {nav.map((item, index) => {
      //destruture item
        const {name, href} = item;
        return (
          <li key={{index}}>
            <a className='text-[#541e8f] font-bold hover:text-accent transition' href={href}>{name}</a>
          </li>
        )
      })}
    </ul>
  </nav>
};

export default Nav;
