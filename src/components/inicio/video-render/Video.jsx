import React, { useEffect } from 'react';

// React-icons
import { BsFillBookmarkFill, BsFillChatDotsFill, BsHeartFill, BsMusicNoteBeamed } from 'react-icons/bs'
import { PiShareFatFill } from 'react-icons/pi';
import { HiOutlineMenu, HiOutlinePlusSm } from 'react-icons/hi';
import { LuSearch } from 'react-icons/lu'

// video
// import VideoDePrueba from '../../../assets/videos/video.mp4';

// images
import imageDePrueba from '../../../assets/images/imagenDePrueba.png'

// Componentes
import VideoEstadisticas from './VideoEstadisticas';

import ReactPlayer from 'react-player';
import { AiOutlineMenu } from 'react-icons/ai';
import { CiMenuBurger } from 'react-icons/ci';

import { LuMenu } from 'react-icons/lu'

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
    <div className='position-relative div-reproductor-video h-100' >
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
      

      <div className='position-fixed start-0 d-flex justify-content-between w-100 text-white p-3 pt-2' style={{top:0}}>
        <LuMenu className='display-6' />
        <div className='d-flex gap-3'>
          <p className='m-0' style={{fontSize:17}}>Siguiendo</p>
          <p className='m-0' style={{fontSize:17}}>Para ti</p>
        </div>
        <LuSearch className='display-6' />
      </div>

      <div className='position-absolute w-75 text-white' style={{bottom:15, left:12}}>
        <p className='mb-2' style={{fontSize:16}}>{title}</p>
        <p className='mb-1' style={{fontSize:14}}>{subtitle}</p>
        <div className='d-flex align-items-center gap-2'>
          <BsMusicNoteBeamed className='mt-1' />
          <marquee className='w-50'>{videoAudioName}</marquee>
        </div>
      </div>

      <div className='position-absolute d-flex flex-column align-items-center gap-3' style={{bottom:15, right:12}}>

        {/* <div className='rounded-circle overflow-hidden- mb-5- position-relative border border-5 border-white' style={{width:50}}>
          <img className='rounded-circle w-100 ' src={imgPerfil} />
          <HiOutlinePlusSm className='fs-6 rounded-circle bg-danger position-absolute start-50 translate-middle-x' style={{bottom:-10}} />
        </div> */}
        {/* <div className='divAuthor' style={{backgroundImage:URL(imgPerfil)}}>

        </div> */}
        <div className='divAuthor mb-3' style={{ backgroundImage: `url(${imgPerfil})` }}>
          <HiOutlinePlusSm className='fs-6 rounded-circle bg-danger position-absolute start-50 translate-middle-x text-white' style={{bottom:-10}} />
        </div>
        {/* <div className="matrix-smart-wrapper">
          <div data-e2e="follow-button" class="tiktok-rm2ncs-DivFollowPlus efwayy20" style="position: absolute; left: 50%; bottom: 0px; transform: translate(-50%);">
            <svg width="23" data-e2e height="23" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
        </div> */}

        <VideoEstadisticas 
          icon={<BsHeartFill className='display-6' />}
          numero={likes}
        />
        <VideoEstadisticas 
          icon={<BsFillChatDotsFill className='display-6' />}
          numero={comments}
        />
        {/* <VideoEstadisticas
          icon={<BsFillBookmarkFill className='display-6' />}
          numero={adds}
        /> */}
        <VideoEstadisticas 
          icon={<PiShareFatFill className='display-6' />}
          numero={shares}
        />

        <div className='img-rotating'>
          <img className='rounded-circle object-fit-cover' src={imgAudio} style={{width:35, height:35}} />
        </div>


        {/* <div className="tiktok-18x0pdc-DivMusic e365p2r11">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 49" width="1em" height="1em" className="tiktok-16zhvva-StyledIconAlbum e365p2r12"></svg>
          <div class="tiktok-q48wa9-DivMusicCover e365p2r13" style="background-image: url(&quot;https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d622f26e39c4614a8652c1098285396~c5_100x100.jpeg?x-expires=1694628000&x-signature=BVbFYX%2FDbkD32%2FQzR8kgAiaOAWM%3D&quot;); background-size: cover;"></div>
        </div> */}
        {/* <div className="tiktok-18x0pdc-DivMusic e365p2r11">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 49 49"
    width="1em"
    height="1em"
    className="tiktok-16zhvva-StyledIconAlbum e365p2r12"
  ></svg>
  <div
    className="tiktok-q48wa9-DivMusicCover e365p2r13"
    style={{
      backgroundImage:
        'url("https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d622f26e39c4614a8652c1098285396~c5_100x100.jpeg?x-expires=1694628000&x-signature=BVbFYX%2FDbkD32%2FQzR8kgAiaOAWM%3D")',
      backgroundSize: 'cover',
    }}
  ></div>
</div> */}

        
      </div>
    </div>
  );
}

export default Video;
