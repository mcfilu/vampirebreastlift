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
import { intro2, vampire_breastlift_new_intro } from '../assets'
import styles from '../style'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import OtherServices2 from '../components/OtherServices2'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';




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
    // var Speed = 50;
    const handleVideoEnd = () => {
        setVideoEnded(true);
    };
    // const setSpeed = (input) => {
    //     console.log("works");
    //     if (input > 80){
    //         Speed = 50;
    //     }
    //     else if (input > 50){
    //         Speed = 1;
    //     }

    // }
    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         let percentageScrolled = (window.scrollY / (window.innerHeight));
    //         let previous_scroll = window.scrollY
    //         setScrollY(previous_scroll + event.deltaY * getScrollSpeed(percentageScrolled));
    //     }

    //     const getScrollSpeed = (percentage) => {
    //         console.log(percentage);
    //         if (percentage < 0.6) return 2;
    //         if (percentage >= 0.6 && percentage <= 0.8) return 0.5;
    //         return 1;
    //     }

    //     window.addEventListener('wheel', (event) => {handleScroll(event)});

    //     return () => window.removeEventListener('wheel', handleScroll(event));
    // }, []); 
    // let scrollSpeed = 100; // This can be any number. The higher the number, the faster the scroll.

    // window.addEventListener('wheel', function(e) {
    //     // var perc = window.scrollY / window.innerHeight
    //     // console.log(perc)
    //     e.preventDefault();  // prevent the default scroll
    //     window.scrollBy({
    //         top: e.deltaY * scrollSpeed,
    //         behavior: 'smooth'  // smooth scrolling
    //     });
    // }, { passive: false });

  return (
    <div className={`bg-primary w-full`}>
        <div className={` fixed z-20 `}>
            <video src={vampire_breastlift_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
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
            {/* <ParallaxProvider> */}
                {/* <Parallax onProgressChange={(progress) => setSpeed(progress)} speed={Speed} tagOuter="div"> */}
                <div className={`flex  w-full h-[90vh] justify-center items-center  `} >
                    <BreastLift/>
                </div>
                {/* </Parallax> */}
                <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                    <FaceLift/>
                </div>
                <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                    <Sherif/>
                </div>
                <div className={`flex flex-col  h-[90vh] justify-center`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[8vh]`}>
                        <Awards/>
                    </div>
                </div>
                
                <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                    <OtherServices/>
                </div>
                {/* <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                    <OtherServices2/>
                </div> */}
                <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                    <BookNow/>
                </div>
            {/* </ParallaxProvider> */}
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