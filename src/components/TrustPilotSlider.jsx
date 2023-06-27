import React from 'react';
import { trustpilot_logo, trustpilot_star } from '../assets';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import "react-alice-carousel/lib/scss/alice-carousel.scss";

const TrustPilotSlider = () => {
    const items = [
        <div className={`flex flex-col h-full  items-center px-[1vw]`}>

            <div className={`w-full flex flex-row justify-between`}>
                <img src={trustpilot_star} className={`w-1/2`}></img>
                <p className={`text-gray-400`}>Jun 1, 2021</p>
            </div>

            <div className={`flex flex-col items-start mt-[3vh]`}>
                <p className={`text-white text-[2vh] font-bold text-left`}>Dermamelan peel review</p>
                <p className={`text-white text-[1.8vh] text-left mt-[2vh]`}>Amazing results so far, and it’s only been 2 weeks!! I’ve tried many things in the past and nothing has worked as well as the dermamelan peel. I wish I had found Dr Wakil sooner. His team are kind, professional and put my mind at ease. I will definitely be coming back for all my other aesthetic needs. Thank you</p>
                <p className={`text-gray-400 text-[2vh] font-bold text-left mt-[2vh]`}>Kajal</p>
            </div>
        </div>,

        <div className={`flex flex-col h-full  items-center px-[1vw]`}>

            <div className={`w-full flex flex-row justify-between`}>
                <img src={trustpilot_star} className={`w-1/2`}></img>
                <p className={`text-gray-400`}>Jun 25, 2023</p>
            </div>

            <div className={`flex flex-col w-full items-start mt-[3vh]`}>
                <p className={`text-white text-[2vh] font-bold text-left`}>I love the results</p>
                <p className={`text-white text-[1.8vh] text-left mt-[2vh]`}>Dr Wakil is both Brilliant and a Gentleman! I want a facelift, but I was scared so I opted for facial fat transfer and I chose Dr Wakil based on the many patient testimonial and the before and after results. He was honest and set my expectations very well. I love the results.</p>
                <p className={`text-gray-400 text-[2vh] font-bold text-left mt-[2vh]`}>Juliana</p>
            </div>
        </div>,

        <div className={`flex flex-col h-full  items-center px-[1vw]`}>

        <div className={`w-full flex flex-row justify-between`}>
            <img src={trustpilot_star} className={`w-1/2`}></img>
            <p className={`text-gray-400`}>Jun 24, 2023</p>
        </div>

        <div className={`flex flex-col w-full items-start mt-[3vh]`}>
            <p className={`text-white text-[2vh] font-bold text-left`}>Dermamelan peel review</p>
            <p className={`text-white text-[1.8vh] text-left mt-[2vh]`}>For many years I had problems with erection after my diabetes and it was getting worse. It caused me a lot of embarrassment wit my wife. I didn't want to go for surgery. I have heard about Dr Wakil and read about the O Concept protocol. I watched so many of his testimonials and patients success stories. I went and had my treatment and I am so glad I did. My life has completely changed thanks to Dr Wakil.</p>
            <p className={`text-gray-400 text-[2vh] font-bold text-left mt-[2vh]`}>Simon</p>
        </div>
        </div>,

        <div className={`flex flex-col h-full  items-center px-[1vw]`}>

            <div className={`w-full flex flex-row justify-between`}>
                <img src={trustpilot_star} className={`w-1/2`}></img>
                <p className={`text-gray-400`}>Jun 23, 2023</p>
            </div>

            <div className={`flex flex-col w-full items-start mt-[3vh]`}>
                <p className={`text-white text-[2vh] font-bold text-left`}>Brilliant Clinic</p>
                <p className={`text-white text-[1.8vh] text-left mt-[2vh]`}>I've lost volume from my face and I've been hating my appearance around my eyes as it has really aged me. Dr Wakil was very meticulous and professional. He took a small amount of fat from my abdomen and then he injected it back into my face and what transformation it has been. It looks very natural. I couldn't be happier, he took years off my face.</p>
                <p className={`text-gray-400 text-[2vh] font-bold text-left mt-[2vh]`}>Dalia</p>
            </div>
        </div>,

        <div className={`flex flex-col h-full  items-center px-[1vw]`}>

        <div className={`w-full flex flex-row justify-between`}>
            <img src={trustpilot_star} className={`w-1/2`}></img>
            <p className={`text-gray-400`}>Apr 11, 2023</p>
        </div>

        <div className={`flex flex-col w-full items-start mt-[3vh]`}>
            <p className={`text-white text-[2vh] font-bold text-left`}>Fantastic results!</p>
            <p className={`text-white text-[1.8vh] text-left mt-[2vh]`}>I lost lots of volume in my face after my gastric balloon and losing 35kg. I felt really old and aged in the process. I came to see Dr Wakil, and he very artistically re-injected fat he took from my abdomen! I didn't really know this procedure even existed! My face looks amazing now and glowing like never before! And most importantly, it is very natural! Thank you very much Dr Wakil for restoring my confidence. I am forever grateful!</p>
            <p className={`text-gray-400 text-[2vh] font-bold text-left mt-[2vh]`}>Jo</p>
        </div>
        </div>,

        <div className={`flex flex-col h-full  items-center px-[1vw]`}>

        <div className={`w-full flex flex-row justify-between`}>
            <img src={trustpilot_star} className={`w-1/2`}></img>
            <p className={`text-gray-400`}>Apr 8, 2023</p>
        </div>

        <div className={`flex flex-col w-full items-start mt-[3vh]`}>
            <p className={`text-white text-[2vh] font-bold text-left`}>Tired of tires eyes</p>
            <p className={`text-white text-[1.8vh] text-left mt-[2vh]`}>I was tired of having tired eyes. After a great deal of researching blepharoplasty plexr looked like a good option. Effective without the risk and downtime of surgery. I was nervous about the treatment. Dr Wakil was reassuring and the team lovely. Yes it does hurt and yes there is a downtime but far less than surgery and equally as effective. They were there every step of the way to answer any questions. More importantly I am delighted with the results. Thank you so much</p>
            <p className={`text-gray-400 text-[2vh] font-bold text-left mt-[2vh]`}>Rebecca</p>
        </div>
        </div>,

        <div className={`flex flex-col h-full  items-center px-[1vw]`}>

        <div className={`w-full flex flex-row justify-between`}>
            <img src={trustpilot_star} className={`w-1/2`}></img>
            <p className={`text-gray-400`}>Jan 12, 2023</p>
        </div>

        <div className={`flex flex-col w-full items-start mt-[3vh]`}>
            <p className={`text-white text-[2vh] font-bold text-left`}>Highly Recommend</p>
            <p className={`text-white text-[1.8vh] text-left mt-[2vh]`}>This was my fourth visit to Dr Wakil and he never fails to amaze me! I would give 7 stars if I could! Staff are friendly and extremely professional and they fit me in really last minute as well! Dr Wakil is fantastic, I had a variety of treatments with him. Without a doubt, I wouldn’t go anywhere else. I have complete confidence in his abilities, always delighted with my results. I wouldn’t hesitate recommending him to family and friends.</p>
            <p className={`text-gray-400 text-[2vh] font-bold text-left mt-[2vh]`}>Hannah</p>
        </div>
        </div>,

        <div className={`flex flex-col h-full items-center px-[1vw]`}>

        <div className={`w-full flex flex-row justify-between`}>
            <img src={trustpilot_star} className={`w-1/2`}></img>
            <p className={`text-gray-400`}>Nov 29, 2022</p>
        </div>

        <div className={`flex flex-col w-full items-start mt-[3vh]`}>
            <p className={`text-white text-[2vh] font-bold text-left`}>Fantastic Experience</p>
            <p className={`text-white text-[1.8vh] text-left mt-[2vh]`}>I had a fantastic experience at DR SW CLINICS.
The staff are very friendly and make you feel comfortable.
DR SHERIF WAKIL was very professional and explained everything in detail to me before the treatment.
Excellent experience and great service! Highly recommended!!!</p>
            <p className={`text-gray-400 text-[2vh] font-bold text-left mt-[2vh]`}>Maria</p>
        </div>
        </div>,

        

    ]
  

  return (
   <div className={`flex flex-col w-full  bg-black items-center justify-center`}>
        <p className={`text-gold1 text-[5vh] text-center md:mb-[5vh]`}>See what our Patients say</p>
        <div className={`flex w-full flex-col md:flex-row`}>
        <div className={`flex flex-col h-full w-full md:w-[20%] items-center mb-[5vh] md:mb-0`}>
            <p className={`text-white text-[5vh] mb-[2vh]`}>Excellent!</p>
            <img src={trustpilot_star}></img>
            <div className={`flex flex-row`}>
            <p className={`text-white text-[2.5vh] mt-[2vh] `}>Based on</p>
            <p className={`text-white text-[2.5vh] mt-[2vh] underline underline-offset-8 ml-[1vh]`}>72 reviews</p>
            </div>
            
            <img src={trustpilot_logo} className={`w-[50%] md:w-[70%] mt-[3vh]`}></img>
        </div>
        <div className={`flex w-full md:w-[80%]`}>
            {/* <div className="btn-prev" >&lang;</div>
           <div className="btn-next" >&rang;</div> */}
            <AliceCarousel mouseTracking 
            items={items} 
            responsive={{
                0: { items: 1 },
                600: {items: 2}, 
                900: {items:3 },
                1200: { items: 4 },
                
            }}
            disableButtonsControls={true} 
            disableDotsControls={true} 
            infinite={true} 
            autoPlay={true} 
            animationDuration={1000}
            autoHeight={false}
            />
        </div>
        </div>
        
        
        
   </div>
  );
};

export default TrustPilotSlider;
