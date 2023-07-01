import React from 'react'
import { sherif2 } from '../assets'

const WakilOpening = () => {
  return (
    <div className={`flex w-full flex-row md:min-h-[55vh]  md:p-[2vh] md:pl-[0px]`}>
        
        <div className={`hidden md:flex w-[60%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={` flex flex-col w-[100%]  bg-opacity-40  items-center justify-center my-auto`}>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[1.3vw]`}></i>
                <p className={`flex text-white text-[2.5vh] text-center text-gold1 mt-[2vh] font-main`}>With my extensive knowledge in both medicine and the arts, I hold the firm belief that the creation of beauty is an art in itself. I strongly believe in providing treatments that prioritize safety, effectiveness, and minimal invasiveness, ensuring that each patient attains their desired outcome while maintaining a naturally enhanced look.</p>
                <p className={`flex text-white text-[2.5vh] text-center text-gold1 mt-[2vh] font-main`}>Recognizing the distinctive qualities of every individual, I take great care in tailoring my treatments to meet their specific needs, ensuring a personalized approach that celebrates their unique beauty.  It is this unwavering commitment to authenticity that attracts patients from all around the globe, seeking my expertise and care.</p>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[5vh] md:text-[1.3vw] mt-[2vh]`}></i>
                <p className={`flex  text-[5vh] text-center text-gold1 mt-[5vh] font-header`}>Dr. Sherif Wakil</p>
            </div>
            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`hidden md:flex w-[40%]  flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <img className={`w-full h-full object-cover `} src={sherif2}></img>
        </div>
        


        <div className={`md:hidden flex flex-col w-full items-center`}>
        <p className={`flex text-[4.5vh] text-gold1 mt-[2vh] font-header`}>Dr. Sherif Wakil</p>
            <img className={`w-full h-full object-cover `} src={sherif2}></img>
            
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[4vh] mt-[1vh]`}></i>
            <p className={`flex text-white text-[2.5vh] text-center text-gold1 mt-[2vh] font-main`}>With my extensive knowledge in both medicine and the arts, I hold the firm belief that the creation of beauty is an art in itself. I strongly believe in providing treatments that prioritize safety, effectiveness, and minimal invasiveness, ensuring that each patient attains their desired outcome while maintaining a naturally enhanced look.</p>
                <p className={`flex text-white text-[2.5vh] text-center text-gold1 mt-[2vh] font-main`}>Recognizing the distinctive qualities of every individual, I take great care in tailoring my treatments to meet their specific needs, ensuring a personalized approach that celebrates their unique beauty.  It is this unwavering commitment to authenticity that attracts patients from all around the globe, seeking my expertise and care.</p>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[4vh] `}></i>
            
            

        </div>
       
        
    
    </div>
  )
}

export default WakilOpening