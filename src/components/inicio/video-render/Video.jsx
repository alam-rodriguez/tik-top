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

import ReactPlayer from 'react-player';

// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

// const video = 'https://download-video.akamaized.net/v2-1/playback/ce9c2096-cd0c-48fb-a222-47aa7cfb4d06/656cbc0e-d45cae72?__token__=st=1694369904~exp=1694384304~acl=%2Fv2-1%2Fplayback%2Fce9c2096-cd0c-48fb-a222-47aa7cfb4d06%2F656cbc0e-d45cae72%2A~hmac=a1215004044fccfa1be9c5bc83d32194d664564c44e1691400445bf0264dd35a&r=dXMtd2VzdDE%3D';

const Video = ({id, video, title, subtitle, videoAudioName, likes, comments, adds, shares, imgPerfil, imgAudio}) => {

  // useEffect(() => {
  //   // Configura el reproductor de video
  //   const videoPlayer = videojs('video-player', {
  //     controls: true,
  //     sources: [
  //       {
  //         src: videoUrl,
  //         type: 'video/mp4',
  //       },
  //     ],
  //   });

  //   return () => {
  //     // Limpia el reproductor cuando el componente se desmonta
  //     if (videoPlayer) {
  //       videoPlayer.dispose();
  //     }
  //   };
  // }, [videoUrl]);

  useEffect( () => {
    const callback = (e) => {
      const videoIsView = e[0];
      // console.log(videoIsView);
      if(videoIsView.isIntersecting){
        // console.log('reproducir')
        video.play()
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
      video.muted = false;
    }
    else video.pause();
  }

  // const reproducirVideo = () => {
  //   const tiktokIframe = document.getElementById('tiktok-iframe');
  //   tiktokIframe.contentWindow.postMessage(
  //     '{"event":"command","func":"playVideo","args":""}',
  //     '*'
  //   );
  // };

  // const iframeRef = useRef(null);

  // Función para reproducir el video
  // const reproducirVideo = () => {
  //   if (iframeRef.current) {
  //     // Envia un mensaje al iframe para reproducir el video
  //     iframeRef.current.contentWindow.postMessage('play', '*');
  //   }
  // };

  return (
    <div className='position-relative div-reproductor-video h-100'>
      <video className={`h-100 reproductor-video reproductor-video-${id} w-100 object-fit-cover`} muted autoPlay playsInline loop onClick={handleVideoClick}  >
        <source src={video} type="video/mp4" />
        Tu navegador no admite la reproducción de videos.
      </video>

{/* <div>
      <video
        id="video-player" // Usa un ID en lugar de ref
        className="video-js vjs-default-skin"
        controls
        width="640"
        height="360"
      ></video>
    </div> */}

{/* <div>
      <h1>Reproducir Video en Iframe</h1>
      <iframe
        ref={iframeRef}
        width="560"
        height="315"
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/owbREEhX4uIC7heKP3BBILfWQA8VBkAly1nJqD~tplv-photomode-zoomcover:720:720.avif?x-expires=1694386800&x-signature=sl7chRbdqR6uTK3PWoZOMDKUU0c%3D"
        frameBorder="0"
        allowFullScreen
        title="Video en Iframe"
      ></iframe>
      <button onClick={reproducirVideo}>Reproducir Video</button>
    </div> */}

{/* <ReactPlayer url={video} /> */}


    {/* <div>
      <h1>Video de TikTok</h1>
      <iframe
        id="tiktok-iframe"
        width="560"
        height="315"
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/owbREEhX4uIC7heKP3BBILfWQA8VBkAly1nJqD~tplv-photomode-zoomcover:720:720.avif?x-expires=1694386800&x-signature=sl7chRbdqR6uTK3PWoZOMDKUU0c%3D"
        frameBorder="0"
        allowFullScreen
        title="Video de TikTok"
      ></iframe>
      <button onClick={reproducirVideo}>Reproducir Video</button>
    </div> */}

{/* <iframe className={`reproductor-video reproductor-video-${id}`} width="560" height="315" src='https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/owbREEhX4uIC7heKP3BBILfWQA8VBkAly1nJqD~tplv-photomode-zoomcover:720:720.avif?x-expires=1694386800&x-signature=sl7chRbdqR6uTK3PWoZOMDKUU0c%3D' frameBorder="0" allowFullScreen></iframe> */}
      

      <div className='position-absolute d-flex justify-content-between w-100' style={{top:30}}>
        <div></div>
        <div className='d-flex gap-3'>
          <p className='m-0 fs-6'>Siguiendo</p>
          <p className='m-0 fs-6'>Para ti</p>
        </div>
        <LuSearch className='display-6 me-3' />
      </div>

      <div className='position-absolute w-75' style={{bottom:95, left:12}}>
        <p className='mb-2' style={{fontSize:16}}>{title}</p>
        <p className='mb-1' style={{fontSize:14}}>{subtitle}</p>
        <div className='d-flex align-items-center gap-2'>
          <BsMusicNoteBeamed className='mt-1' />
          <marquee className='w-50'>{videoAudioName}</marquee>
        </div>
      </div>

      <div className='position-absolute d-flex flex-column align-items-center gap-4' style={{bottom:95, right:12}}>

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
