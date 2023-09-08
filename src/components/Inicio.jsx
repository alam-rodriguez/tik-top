import React from 'react'

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


const Inicio = () => {
  return (
    <main className='inicio container p-0 bg-dark text-white'>

      <Video
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
      />
      <Video
        id={4} 
        video={video4}
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
        video={video5}
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
      />

    
      
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
  )
}

export default Inicio;
