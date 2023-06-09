import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { boobs1, boobs2, boobs3, face1 } from '../assets'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import './HomeSlider.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const HomeSlider = () => {
  return (
    <Carousel showArrows={false} showStatus={false} showThumbs={false} interval={4000} autoPlay={true} infiniteLoop={true} transitionTime={1000} swipeable={true} animationHandler={"fade"}>
            
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${boobs1})` }}>
                    <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}>
                    <h1 className={`text-gold1 text-[5vh] font-poppins mb-[3vh] mt-20 text-left`}>Vampire Breast Lift ™ </h1>
                        <h1 className={`text-white text-[2.5vh] font-poppins mb-[3vh] text-justify`}>Rediscover your feminine curves and boost your self-confidence with Vampire Breast Lift - the innovative procedure that uses your body's natural growth factors to enhance breast shape, size, and firmness.</h1>
                        <a className={`text-gold1 hover-underline-animation2 text-left text-[2vh] w-[8vw] `}>READ MORE</a>
                       
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${face1})` }}>
                    <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}>
                        <h1 className={`text-gold1 text-[5vh] font-poppins mb-[3vh] mt-20 text-left`}>Vampire Face Lift ™ </h1>
                        <h1 className={`text-white text-[2.5vh] font-poppins mb-[3vh] text-justify`}>Transform your skin and unleash a youthful glow with the revolutionary Vampire Face Lift - the non-surgical solution for a more radiant and rejuvenated complexion.</h1>
                        <a className={`text-gold1 hover-underline-animation2 text-left text-[2vh] w-[8vw]`}>READ MORE</a>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${boobs3})` }}>
                    <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}>
                        <h1 className={`text-gold1 text-[5vh] font-poppins mt-[8.5vh] mb-[3vh] text-left`}>The Vampire Breast Lift ™ </h1>
                        <h1 className={`text-white text-[2.5vh] font-poppins mb-[3vh] text-justify`}>Unleash your seductive power with the Vampire Breast Lift, an exciting new non-surgical technique for subtly enhancing the breasts.</h1>
                        <a className={`text-gold1 hover-underline-animation2 text-left text-[2vh] w-[8vw] `}>READ MORE</a>
                        
                    </div>
                </div>
            </div>
            
        </Carousel>
  )
}

export default HomeSlider