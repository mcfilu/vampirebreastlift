import React from 'react'
import { sherif, clinic2, clinic3 } from '../assets'

const WakilClinic = () => {
  return (
    <div className={`flex w-full flex-row min-h-[60vh]  md:pr-[0px] md:p-[2vh] `}>
        
        <div className={`hidden md:flex w-1/2 h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[6vh] text-center text-gold1 `}>Dr SW Clinics</p>
                <p className={`text-white text-center text-[2.1vh] mt-[6vh]`}>The prestigious Dr SW Clinic, located in London, Dubai and Egypt, was founded through the vision of celebrity doctor, Aesthetic Awards and MyFaceMyBody Awards finalist Dr Sherif Wakil.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}> Dr Wakil’s professionalism and expertise in the world of medical aesthetics, regenerative medicine, pain management, life optimisation and sexual aesthetic gynaecology puts him amongst the leaders in his field.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>Dr. Sherif Wakil's innovative leadership empowers our dedicated team to prioritize our clients' aesthetic needs. We specialize in combatting signs of ageing for face and body, including treatments for intimate areas, and stay at the forefront of new approaches for pain management and regenerative techniques. Our clinic is also a trailblazer in bio-hacking methodologies to enhance health and optimize lifestyle.</p>
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
        <div className={`hidden md:flex w-1/2 flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <img className={`flex w-full h-full object-cover `} src={clinic2}></img>
        </div>

        <div className={`md:hidden flex flex-col items-center `}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 `}>Dr SW Clinics</p>
            <img className={`w-full h-full object-cover `} src={clinic2}></img>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>The prestigious Dr SW Clinic, located in London, Dubai and Egypt, was founded through the vision of celebrity doctor, Aesthetic Awards and MyFaceMyBody Awards finalist Dr Sherif Wakil.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}> Dr Wakil’s professionalism and expertise in the world of medical aesthetics, regenerative medicine, pain management, life optimisation and sexual aesthetic gynaecology puts him amongst the leaders in his field.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>Dr. Sherif Wakil's innovative leadership empowers our dedicated team to prioritize our clients' aesthetic needs. We specialize in combatting signs of ageing for face and body, including treatments for intimate areas, and stay at the forefront of new approaches for pain management and regenerative techniques. Our clinic is also a trailblazer in bio-hacking methodologies to enhance health and optimize lifestyle.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default WakilClinic