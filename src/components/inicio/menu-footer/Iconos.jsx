import React from 'react'

const Iconos = ({icon, text}) => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-between' style={{width:'20%'}}>
      {icon}
      <p className='m-0 text-center text-white' style={{fontSize:'10px'}}>{text}</p>
    </div>
  );
}

export default Iconos
