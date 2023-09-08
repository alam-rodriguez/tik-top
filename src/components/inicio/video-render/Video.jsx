import React, { useEffect } from 'react';

// React-icons
import { BsFillBookmarkFill, BsFillChatDotsFill, BsHeartFill, BsMusicNoteBeamed } from 'react-icons/bs'
import { PiShareFatFill } from 'react-icons/pi';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { LuSearch } from 'react-icons/lu'

// video
// import VideoDePrueba from '../../../assets/videos/video.mp4';

// images
import imageDePrueba from '../../../assets/images/imagenDePrueba.png'

// Componentes
import VideoEstadisticas from './VideoEstadisticas';

const Video = ({id, video, title, subtitle, videoAudioName, likes, comments, adds, shares, imgPerfil, imgAudio}) => {

  useEffect( () => {
    const callback = (e) => {
      const videoIsView = e[0];
      // console.log(videoIsView);
      if(videoIsView.isIntersecting){
        // console.log('reproducir')
        // video.play()
        // video.muted = false;
      }else{
        video.pause();
      }
    }
    let observer = new IntersectionObserver(callback, {});
    const video = document.querySelector(`.reproductor-video-${id}`);
    observer.observe(video);
  }, [] );

  const handleVideoClick = () => {
    const video = document.querySelector(`.reproductor-video-${id}`);
    if(video.paused) {
      video.play();
      // video.muted = false;
    }
    else video.pause();
  }

  return (
    <div className='div-reproductor-video position-relative'>
      <video className={`reproductor-video reproductor-video-${id} w-100 object-fit-cover`} autoPlay={true} muted playsInline preload='false' onClick={handleVideoClick} >
        <source src={video} type="video/mp4" />
        Tu navegador no admite la reproducción de videos.
      </video>

      <div className='position-absolute d-flex justify-content-between w-100' style={{top:30}}>
        <div></div>
        <div className='d-flex gap-3'>
          <p className='m-0 fs-6'>Siguiendo</p>
          <p className='m-0 fs-6'>Para ti</p>
        </div>
        <LuSearch className='display-6 me-3' />
      </div>

      <div className='position-absolute w-75' style={{bottom:15, left:12}}>
        <p className='mb-2' style={{fontSize:16}}>{title}</p>
        <p className='mb-1' style={{fontSize:14}}>{subtitle}</p>
        <div className='d-flex align-items-center gap-2'>
          <BsMusicNoteBeamed className='mt-1' />
          <marquee className='w-50'>{videoAudioName}</marquee>
        </div>
      </div>

      <div className='position-absolute d-flex flex-column align-items-center gap-4' style={{bottom:15, right:12}}>

        <div className='rounded-circle overflow-hidden- mb-5- position-relative border border-5 border-white' style={{width:50}}>
          <img className='rounded-circle w-100 ' src={imgPerfil} />
          <HiOutlinePlusSm className='fs-6 rounded-circle bg-danger position-absolute start-50 translate-middle-x' style={{bottom:-10}} />
        </div>
        
        <VideoEstadisticas 
          icon={<BsHeartFill className='display-6' />}
          numero={likes}
        />
        <VideoEstadisticas 
          icon={<BsFillChatDotsFill className='display-6' />}
          numero={comments}
        />
        <VideoEstadisticas
          icon={<BsFillBookmarkFill className='display-6' />}
          numero={adds}
        />
        <VideoEstadisticas 
          icon={<PiShareFatFill className='display-6' />}
          numero={shares}
        />

        <img className='rounded-circle' src={imgAudio} style={{width:35}} />
        
      </div>
    </div>
  );
}

export default Video;
