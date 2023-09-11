import React from 'react'

const VideoEstadisticas = ({icon, numero}) => {
  return (
    <div className='d-flex flex-column align-items-center text-white'>
      {icon}
      <p className='m-0'>{numero}</p>
    </div>
  )
}

export default VideoEstadisticas
