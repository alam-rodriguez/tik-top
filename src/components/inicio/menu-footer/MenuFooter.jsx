import React from 'react';

// React-icons
import { AiFillHome } from 'react-icons/ai'

// Components
import Iconos from './Iconos';

const MenuFooter = () => {
  return (
    <footer className='position-fixed start-0 bottom-0 bg-black w-100 py-2' style={{height:'49px'}}>
      <nav className='d-flex justify-content-around'>

        <Iconos
          icon={<AiFillHome className='fs-3 text-white' />}
          text='Inicio'
        />
        <Iconos
          icon={<AiFillHome className='fs-3 text-white' />}
          text='Amigos'
        />
        <Iconos
          icon={<AiFillHome className='fs-3 text-white' />}
          text=''
        />
        <Iconos
          icon={<AiFillHome className='fs-3 text-white' />}
          text='Bandeja'
        />
        <Iconos
          icon={<AiFillHome className='fs-3 text-white' />}
          text='Perfil'
        />

      </nav>
    </footer>
  )
}

export default MenuFooter
