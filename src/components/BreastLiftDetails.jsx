import React from 'react'
import { PopupButton } from "react-calendly";
import { BloodCells, sherif } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BreastLiftDetails = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[75vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
         <div className={`w-2/5 h-[100%] flex items-center`}>
            <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>
        <div className={`w-[60%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>

                <p className={`flex text-gold1 text-[4.5vh] text-center text-gold1`}>Treatment Technique</p>
                <p className={`flex text-white text-[1.9vh] mt-[2.5vh]`}>The non-surgical breast lift can be used to achieve a more pronounced cleavage or to improve lost volume in the top of the breasts by utilising regenerative growth factors found in your own blood.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Vampire Treatments (also known as PRP or Platelet Rich Plasma Rejuvenation) have been one of the most talked about new rejuvenation treatments to emerge in recent years. Using the body’s own natural ability to heal and repair itself, this ground-breaking procedure can be used to combat facial ageing as well as to lift and enhance the breasts and has become a favourite among celebrities.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>As the only UK doctor, and the only doctor in Europe, to be certified by the inventor of the Vampire treatments and registered on the official Vampire Facelift™ website, Dr Wakil is a leader in this new pioneering technique.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>The treatment involves taking a small sample of blood and placing it in a centrifuge to extract the Platelet Rich Plasma (PRP) which is then injected back into the face or body, in this case the breast area.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>The plasma has a high concentration of growth factors, the cells in our body, which are responsible for rejuvenation and regeneration, and is a powerful and natural method of rejuvenation.</p>

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

export default BreastLiftDetails