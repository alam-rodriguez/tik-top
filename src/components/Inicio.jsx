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

const videoUrl = 'https://pin.it/22uetq0'

import useDeviceHeight from '../hooks/useDeviceHeight';

const imgPerfil = 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d622f26e39c4614a8652c1098285396~c5_100x100.jpeg?x-expires=1694628000&x-signature=BVbFYX%2FDbkD32%2FQzR8kgAiaOAWM%3D';

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
      <main className=''>


<section className='inicio '>
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
    id={1} 
    video='https://firebasestorage.googleapis.com/v0/b/counter-app-6c82a.appspot.com/o/video1.mp4?alt=media&token=3c42ad3c-46b5-4aaf-953b-dd6784da7b75'
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imgPerfil}
    imgAudio={imageDePrueba}
  />
  <Video
    id={2} 
    video='https://firebasestorage.googleapis.com/v0/b/counter-app-6c82a.appspot.com/o/video2.mp4?alt=media&token=9ba496c7-4e63-4efe-8ae2-a131ac55f701'
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imgPerfil}
    imgAudio={imageDePrueba}
  />
  <Video
    id={3} 
    video='https://firebasestorage.googleapis.com/v0/b/counter-app-6c82a.appspot.com/o/video3.mp4?alt=media&token=314f8fac-3d61-4f8f-87da-4e525b84f810'
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imgPerfil}
    imgAudio={imageDePrueba}
  />
  <Video
    id={4} 
    video='https://firebasestorage.googleapis.com/v0/b/counter-app-6c82a.appspot.com/o/video4.mp4?alt=media&token=0ddb97bb-4f55-4f0b-acae-c87e2915be33'
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imgPerfil}
    imgAudio={imageDePrueba}
  />
  <Video
    id={5} 
    video='https://firebasestorage.googleapis.com/v0/b/counter-app-6c82a.appspot.com/o/video5.mp4?alt=media&token=888bf739-bc9a-4a05-a303-b91a3d88c904'
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imgPerfil}
    imgAudio={imageDePrueba}
  />
  <Video
    id={6} 
    video='https://firebasestorage.googleapis.com/v0/b/counter-app-6c82a.appspot.com/o/video6.mp4?alt=media&token=22939648-a978-4265-b564-00fb426294a5'
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imgPerfil}
    imgAudio={imageDePrueba}
  />
  <Video
    id={7} 
    video='https://firebasestorage.googleapis.com/v0/b/counter-app-6c82a.appspot.com/o/video7.mp4?alt=media&token=3881cef0-7ea9-45fb-8131-adbb15a6ec87'
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imgPerfil}
    imgAudio={imageDePrueba}
  />
  <Video
    id={8} 
    video='https://firebasestorage.googleapis.com/v0/b/counter-app-6c82a.appspot.com/o/video8.mp4?alt=media&token=6a1ac880-6148-4722-9241-c429e5cb2c77'
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imgPerfil}
    imgAudio={imageDePrueba}
  />
  {/* <Video
    id={9} 
    video={video9}
    title='Sex_Lyric...'
    subtitle='Donde esta mi amor #zacariasferreira #letrasdecanciones #Dedicar'
    videoAudioName='Este es un texto en movimiento horizontal.'
    likes='46.0K'
    comments='126'
    adds='126'
    shares='126'
    imgPerfil={imageDePrueba}
    imgAudio={imageDePrueba}
  />  */}
  
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

    <MenuFooter />
</main>
    </div>
  )
}

export default Inicio;
