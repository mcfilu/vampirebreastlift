import React from 'react'
import { sherif, clinic2, clinic3, davood } from '../assets'

const Davood = () => {
  return (
    <div className={`flex w-full flex-row xl:max-h-[80vh]  md:pl-[0px] md:p-[2vh] `}>
        
        <div className={`hidden md:flex w-[40%] flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <img className={`flex w-full h-full object-cover `} src={davood}></img>
        </div>

        <div className={`hidden md:flex w-[60%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[6vh] text-center text-gold1 `}>Dr Davood Fallahdar</p>
                <p className={`text-white text-center text-[2.1vh] mt-[6vh]`}>Dr. Davood Fallahdar is an accomplished medical professional with a distinguished background. Graduating with honors in Medicine and Surgery from Milan's Medical School in 1992, he embarked on a specialized journey in Plastic and Reconstructive Surgery, as well as Microsurgery, at the University of Milan. With a passion for continuous learning, he further expanded his expertise at renowned institutions worldwide, including Paris, New York University, San Francisco, Gothenburg, and Barcelona.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}> With over 15 years of consistent experience at the Specialist/Consultant level in Plastic and Aesthetic Surgery, Dr. Fallahdar has solidified his reputation as a skilled practitioner. He is registered as a specialist in Plastic Surgery by both the UK GMC and the Italian GMC, with a special recognition for Excellence in Microsurgery awarded by Milan's National Cancer Institute.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>Throughout his career, Dr. Fallahdar has held esteemed consultant appointments at renowned institutions such as Addenbrooke's Hospital NHS Foundation Trust in Cambridge and the National Cancer Institute in Milan. Notably, he served as a Locum Consultant Plastic Surgeon at The Royal Marsden NHS Foundation Trust, where he worked within a highly skilled multidisciplinary team focused on achieving optimal function and aesthetics.</p>
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
        

        <div className={`md:hidden flex flex-col items-center `}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 `}>Dr Davood Fallahdar</p>
            <img className={`w-full h-full object-cover `} src={davood}></img>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
            <p className={`text-white text-center text-[2.1vh] mt-[6vh]`}>Dr. Davood Fallahdar is an accomplished medical professional with a distinguished background. Graduating with honors in Medicine and Surgery from Milan's Medical School in 1992, he embarked on a specialized journey in Plastic and Reconstructive Surgery, as well as Microsurgery, at the University of Milan. With a passion for continuous learning, he further expanded his expertise at renowned institutions worldwide, including Paris, New York University, San Francisco, Gothenburg, and Barcelona.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}> With over 15 years of consistent experience at the Specialist/Consultant level in Plastic and Aesthetic Surgery, Dr. Fallahdar has solidified his reputation as a skilled practitioner. He is registered as a specialist in Plastic Surgery by both the UK GMC and the Italian GMC, with a special recognition for Excellence in Microsurgery awarded by Milan's National Cancer Institute.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>Throughout his career, Dr. Fallahdar has held esteemed consultant appointments at renowned institutions such as Addenbrooke's Hospital NHS Foundation Trust in Cambridge and the National Cancer Institute in Milan. Notably, he served as a Locum Consultant Plastic Surgeon at The Royal Marsden NHS Foundation Trust, where he worked within a highly skilled multidisciplinary team focused on achieving optimal function and aesthetics.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default Davood