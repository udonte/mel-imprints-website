import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';
import Whatsapp from '../../assets/whatsapp.png';
import Nigeria from '../../assets/nigeria.png';

const TopBar = () => {
  return (
    <div className='flex justify-center items-center px-4 py-2'>
      <div className='flex items-center'>
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={Twitter} alt="Twitter" />
      </div>
      <div>
        <AiOutlineClockCircle />
        <p>9AM - 5AM</p>
      </div>
      <div>
        <AiFillPhone />
        <p>+234 814 166 7571</p>
      </div>
      <div>
        <img className='w-12 h-12 object-contain' src={Whatsapp} alt="Whatsapp" />
          <div>
          <img className='w-4 h-4 object-contain' src={Nigeria} alt="nigeria" />
          <p>Nigeria</p>
        </div>
      </div>
    </div>
  )
}

export default TopBar;


//#f7f6f4