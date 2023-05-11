import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { boobs1, boobs2, boobs3, face1 } from '../assets'
import { Slide } from 'react-slideshow-image'


const HomeSlider = () => {
  return (
        <Slide indicators={false} arrows={false} duration={4000} transitionDuration={2000} easing={'ease-in'}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${boobs3})` }}>
                    <div className={`flex flex-col justify-center items-left h-screen w-1/3 ml-12`}>
                        <h1 className={`text-gold1 text-[35px] font-poppins mt-20 mb-12`}>The Vampire Breast Lift ™ </h1>
                        <h1 className={`text-white text-[25px] font-poppins mb-12`}>Unleash your seductive power with the Vampire Breast Lift, an exciting new non-surgical technique for subtly enhancing the breasts.</h1>
                        <a className={`text-gold1 hover-underline-animation2 text-[20px] w-[120px]`}>READ MORE</a>
                        
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${boobs1})` }}>
                    <div className={`flex flex-col justify-center items-left h-screen w-1/3 ml-12`}>
                    <h1 className={`text-gold1 text-[35px] font-poppins mb-12 mt-20`}>Vampire Breast Lift ™ </h1>
                        <h1 className={`text-white text-[22px] font-poppins mb-12`}>Rediscover your feminine curves and boost your self-confidence with Vampire Breast Lift - the innovative procedure that uses your body's natural growth factors to enhance breast shape, size, and firmness.</h1>
                        <a className={`text-gold1 hover-underline-animation2 text-[20px] w-[120px]`}>READ MORE</a>
                       
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${face1})` }}>
                    <div className={`flex flex-col justify-center items-left h-screen w-1/3 ml-12`}>
                        <h1 className={`text-gold1 text-[35px] font-poppins mb-12 mt-20`}>Vampire Face Lift ™ </h1>
                        <h1 className={`text-white text-[25px] font-poppins mb-12`}>Transform your skin and unleash a youthful glow with the revolutionary Vampire Face Lift - the non-surgical solution for a more radiant and rejuvenated complexion.</h1>
                        <a className={`text-gold1 hover-underline-animation2 text-[20px] w-[120px]`}>READ MORE</a>
                    </div>
                </div>
            </div>
        </Slide>
  )
}

export default HomeSlider