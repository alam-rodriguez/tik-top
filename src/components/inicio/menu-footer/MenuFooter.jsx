import React from 'react';

// React-icons
import { AiFillHome } from 'react-icons/ai';
import { RiCompass3Line } from 'react-icons/ri';
import { GoPerson } from 'react-icons/go';
import { PiChatCenteredTextLight } from 'react-icons/pi'

// Components
import Iconos from './Iconos';

const MenuFooter = () => {
  return (
    <footer className='position-fixed start-0 bottom-0 bg-black w-100 py-2-' style={{height:'49px'}}>
      <nav className='d-flex justify-content-between- align-items-center'>

        <Iconos
          icon={<AiFillHome className='fs-2 text-white' />}
          text='Inicio'
        />
        <Iconos
          icon={<RiCompass3Line className='fs-2 text-white' />}
          text='Amigos'
        />
        <Iconos
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 49" width="100%" height="100%">
              <path fill="#D8D8D8" stroke="#979797" strokeWidth="0.5" d="M.25.25h74.5v48.5H.25z" opacity="0.01"></path>
              <path fill="#FA2D6C" fillRule="evenodd" d="M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7v-2.4z" clipRule="evenodd"></path>
              <path fill="#20D5EC" fillRule="evenodd" d="M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C16 32.42 16 30.18 16 25.7v-2.4z" clipRule="evenodd"></path>
              <rect width="36" height="28" x="19.5" y="10.5" fill="#fff" rx="8"></rect>
              <path fill="#161823" fillRule="evenodd" d="M36.5 18.25a.5.5 0 00-.5.5v4.75h-4.75a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5H36v4.75a.5.5 0 00.5.5H38a.5.5 0 00.5-.5V26h4.75a.5.5 0 00.5-.5V24a.5.5 0 00-.5-.5H38.5v-4.75a.5.5 0 00-.5-.5h-1.5z" clipRule="evenodd"></path>
            </svg>
          }
        />
        <Iconos
          icon={<PiChatCenteredTextLight className='fs-2 text-white' />}
          text='Bandeja'
        />
        <Iconos
          icon={<GoPerson className='fs-2 text-white' />}
          text='Perfil'
        />

      </nav>
    </footer>
  )
}

export default MenuFooter
