import React from 'react'

const Iconos = ({icon, text}) => {
  return (
    <div className='d-flex flex-column justify-content-around align-items-center' style={{width:'20%'}}>
      {icon}
      <p className='m-0 text-center' style={{fontSize:9}}>{text}</p>
    </div>
  );
}

export default Iconos
