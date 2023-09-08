import React from 'react';

// React-icons
import { AiFillHome } from 'react-icons/ai'

// Components
import Iconos from './Iconos';

const MenuFooter = () => {
  return (
    <footer className='position-fixed start-0 bottom-0 bg-dark w-100 py-2' style={{height:55}}>
      <nav className='d-flex justify-content-around'>

        <Iconos
          icon={<AiFillHome className='display-5' />}
          text='Inicio'
        />
        <Iconos
          icon={<AiFillHome className='display-5' />}
          text='Amigos'
        />
        <Iconos
          icon={<AiFillHome className='display-5' />}
          text=''
        />
        <Iconos
          icon={<AiFillHome className='display-5' />}
          text='Bandeja de entrada'
        />
        <Iconos
          icon={<AiFillHome className='display-5' />}
          text='Perfil'
        />

      </nav>
    </footer>
  )
}

export default MenuFooter
