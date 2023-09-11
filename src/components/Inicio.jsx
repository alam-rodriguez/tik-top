import React, { useEffect, useState } from 'react'

// componets
import MenuFooter from './inicio/menu-footer/MenuFooter';
import Video from './inicio/video-render/Video';

import img from '../assets/images/imagenDePrueba.png';

// images
import imageDePrueba from '../assets/images/imagenDePrueba.png'

// videos
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import video5 from '../assets/videos/video5.mp4';
import video6 from '../assets/videos/video6.mp4';
import video7 from '../assets/videos/video7.mp4';
import video8 from '../assets/videos/video8.mp4';

// import TikTokAPI from 'tiktok-api';

// import { Player } from 'video-react';

import ReactPlayer from 'react-player';

const videoUrl = 'https://download-video.akamaized.net/v2-1/playback/ce9c2096-cd0c-48fb-a222-47aa7cfb4d06/656cbc0e-d45cae72?__token__=st=1694390097~exp=1694404497~acl=%2Fv2-1%2Fplayback%2Fce9c2096-cd0c-48fb-a222-47aa7cfb4d06%2F656cbc0e-d45cae72%2A~hmac=3efa75e83a9fcc02d4061bb45061dd7e0d22a3222de1cd49e17e5f5e70d08be4&r=dXMtd2VzdDE%3D'

import useDeviceHeight from '../hooks/useDeviceHeight';

const Inicio = () => {

  const deviceHeight = useDeviceHeight();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight((deviceHeight * 90) / 100);
  }, [] );

  // useEffect( () => {
  //   const barraDeNavegacion = document.querySelector('.barra-de-navegacion');
  //   if(barraDeNavegacion == null) return;
  //   barraDeNavegacion.style.top = '-100px';
  // }, [] );

  // const [videos, setVideos] = useState([]);
  // const tiktokApi = new TikTokAPI();

  // useEffect(() => {
  //   // Configura las credenciales de la API de TikTok
  //   tiktokApi
  //     .login({
  //       client_id: '7271021540014524421',
  //       client_secret: 'YrfKSJLIrPzvcVshlFDGpnDJUgkKu9wi',
  //     })
  //     .then(() => {
  //       // Realiza una búsqueda de videos en TikTok
  //       return tiktokApi.searchV2({
  //         keyword: 'cats', // Palabra clave para buscar videos
  //         count: 10, // Cantidad de resultados
  //       });
  //     })
  //     .then((response) => {
  //       // Establece los resultados en el estado
  //       setVideos(response.items);
  //     })
  //     .catch((error) => {
  //       console.error('Error al obtener videos de TikTok:', error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://www.tiktok.com/embed.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Limpia el script al desmontar el componente
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className='App'>
      <main className='inicio container p-0 bg-dark text-white position-relative' style={{height:height}}>


<section style={{height:'100%'}}>
  {/* <Player>
  <source src="https://www.youtube.com/watch?v=RB5tR_nqUEw" />
</Player> */}

{/* <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@samuelgomezdp/video/7266506854824545542" data-video-id="7266506854824545542" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@samuelgomezdp" href="https://www.tiktok.com/@samuelgomezdp?refer=embed">@samuelgomezdp</a> Tu eres como rarita verdad , Yo captando indirectas:  <a title="risa" target="_blank" href="https://www.tiktok.com/tag/risa?refer=embed">#risa</a> <a title="pena" target="_blank" href="https://www.tiktok.com/tag/pena?refer=embed">#pena</a> <a title="cita" target="_blank" href="https://www.tiktok.com/tag/cita?refer=embed">#cita</a> <a target="_blank" title="♬ sonido original - Thomas" href="https://www.tiktok.com/music/sonido-original-7167754491520879366?refer=embed">♬ sonido original - Thomas</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script> */}
{/* <div className="tiktok-embed" style={{ height: '100vh', width: '100%' }}>
  <section>
    <a
      target="_blank"
      title="@samuelgomezdp"
      href="https://www.tiktok.com/@samuelgomezdp?refer=embed"
    >
      @samuelgomezdp
    </a>
    Tu eres como rarita verdad, Yo captando indirectas:
    <a title="risa" target="_blank" href="https://www.tiktok.com/tag/risa?refer=embed">
      #risa
    </a>
    <a title="pena" target="_blank" href="https://www.tiktok.com/tag/pena?refer=embed">
      #pena
    </a>
    <a title="cita" target="_blank" href="https://www.tiktok.com/tag/cita?refer=embed">
      #cita
    </a>
    <a
      target="_blank"
      title="♬ sonido original - Thomas"
      href="https://www.tiktok.com/music/sonido-original-7167754491520879366?refer=embed"
    >
      ♬ sonido original - Thomas
    </a>
  </section>
</div> */}

{/* <div className="tiktok-embed" style={{ maxWidth: '605px', minWidth: '325px' }}>
  <section>
    <a
      target="_blank"
      title="@romolovi.ch1"
      href="https://www.tiktok.com/@romolovi.ch1?refer=embed"
    >
      @romolovi.ch1
    </a>
    ESE ROÑA 😭💗 |
    <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">
      #fyp
    </a>
    <a
      title="chiquititas"
      target="_blank"
      href="https://www.tiktok.com/tag/chiquititas?refer=embed"
    >
      #chiquititas
    </a>
    <a
      title="tiktokponteenparati"
      target="_blank"
      href="https://www.tiktok.com/tag/tiktokponteenparati?refer=embed"
    >
      #tiktokponteenparati
    </a>
    <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">
      #viral
    </a>
    <a title="romolovi" target="_blank" href="https://www.tiktok.com/tag/romolovi?refer=embed">
      #romolovi
    </a>
    <a
      title="saveddgene"
      target="_blank"
      href="https://www.tiktok.com/tag/saveddgene?refer=embed"
    >
      #saveddgene
    </a>
    <a
      title="gnexluks"
      target="_blank"
      href="https://www.tiktok.com/tag/gnexluks?refer=embed"
    >
      #gnexluks
    </a>
    <a
      target="_blank"
      title="♬ sonido original - romolovi"
      href="https://www.tiktok.com/music/sonido-original-7267300852813073158?refer=embed"
    >
      ♬ sonido original - romolovi
    </a>
  </section>
</div> */}

  {/* <Video
    id={1} 
    video={video1}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={2} 
    video={video2}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={3} 
    video={video3}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  /> */}
  <Video
    id={0} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={1} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={2} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={3} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={4} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={5} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={6} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={7} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={8} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={9} 
    video={videoUrl}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  /> 
  
   {/* <Video
    id={6} 
    video={video6}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={7} 
    video={video7}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />
  <Video
    id={8} 
    video={video8}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  /> */}
</section>


  

  <MenuFooter />
  

  {/* <div className='padre d-flex flex-column overflow-x-scroll gap-4 p-5'>

    <div className='hijo bg-danger'>
      <img src={img} alt="" />
    </div>

    <div className='hijo bg-danger'>
      <img src={img} alt="" />
    </div>

    <div className='hijo bg-danger'>
      <img src={img} alt="" />
    </div>

    <div className='hijo bg-danger'>
      <img src={img} alt="" />
    </div>

    <div className='hijo bg-danger'>
      <img src={img} alt="" />
    </div>

    <div className='hijo bg-danger'>
      <img src={img} alt="" />
    </div>

  </div> */}

</main>
    </div>
  )
}

export default Inicio;
