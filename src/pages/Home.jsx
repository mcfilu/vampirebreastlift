import React from 'react'
import BookNow from '../components/BookNow'
import HomeSlider from '../components/HomeSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Awards from '../components/Awards'
import Sherif from '../components/Sherif'
import BreastLift from '../components/BreastLift'
import FaceLift from '../components/FaceLift'
import Media from '../components/Media'
import OtherServices from '../components/OtherServices'
import WelcomeAnimation from '../components/WelcomeAnimation'
import { intro2 } from '../assets'
import styles from '../style'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Home = () => {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    // useEffect(() => {

    // })
    // const videoRef = useRef(null);

    // useEffect(() => {
    //     // Access the video element using the ref after it has been mounted to the DOM
    //     const videoElement = videoRef.current;
    //     if (videoElement) {
    //     // Do something with the video element, such as setting its source or playback controls
    //     videoElement.play();
    //     }
    // }, []);
    // useEffect(() => { 
    //     window.addEventListener('scroll', handleScroll)

    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])
    // // var video = document.getElementsByTagName('video')[0];

    // 
    
      
    // useEffect(() => {
    //     const vid = document.querySelector('vid_player');
    //     vid.onended = (event) => {
    //         vid.classList.add('hidden');
    //         console.log('dziala');
    //     }
    //     }
    //   , [])
    const [videoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

  return (
    <div className={`bg-primary w-full`}>
        <div className={` fixed z-20 `}>
            <video src={intro2} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div>
        
        <div className={``}>
        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>
            <HomeSlider/>
        </div> 
        <div className="flex flex-col book2-gradient pt-24 pb-24" >
            <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
            {/* <div style={{ transform: `translateY(${offsetY * 0.3 }px)`}}> */}
                <div className={`mt-20`}>
                    <BreastLift/>
                </div>
                <div className={`mt-20`}>
                    <FaceLift/>
                </div>
                <div className={'mt-20'}>
                    <Sherif/>
                </div>
                <div className={`mt-20`}>
                    <Media/>
                </div>
                <div className={`mt-20`}>
                    <Awards/>
                </div>
                <div className={`mt-20`}>
                    <OtherServices/>
                </div>
                <div className={`mt-20`}>
                    <BookNow/>
                </div>
            </div>
            {/* </div> */}
        </div>
        
        <div>
            <Footer/>
        </div>
        
        </div>
                
        
    </div>
  )
}

export default Home