import React from 'react'
import { sherif, clinic2 } from '../assets'

const WakilClinic = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[70vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`w-[45%] h-[100%] flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <img className={`w-full h-full object-cover rounded-[9px]`} src={clinic2}></img>
        </div>
        <div className={`w-[60%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[4vh] text-center text-gold1 `}>Dr SW Clinics</p>
                <p className={`text-white text-center text-[2vh] mt-[6vh]`}>The prestigious Dr SW Clinic, located in London, Dubai and Egypt, was founded through the vision of celebrity doctor, Aesthetic Awards and MyFaceMyBody Awards finalist Dr Sherif Wakil.</p>
                <p className={`text-white text-center text-[2vh] mt-[3vh]`}> Dr Wakil’s professionalism and expertise in the world of medical aesthetics, regenerative medicine, pain management, life optimisation and sexual aesthetic gynaecology puts him amongst the leaders in his field.</p>
                <p className={`text-white text-center text-[2vh] mt-[3vh]`}>Dr. Sherif Wakil's innovative leadership empowers our dedicated team to prioritize our clients' aesthetic needs. We specialize in combatting signs of ageing for face and body, including treatments for intimate areas, and stay at the forefront of new approaches for pain management and regenerative techniques. Our clinic is also a trailblazer in bio-hacking methodologies to enhance health and optimize lifestyle.</p>
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
        
       
        
    
    </div>
  )
}

export default WakilClinic