import React from 'react'
import { BloodCells } from '../assets'
import { wallpaper } from '../assets'
import { PopupButton } from 'react-calendly'

const VampireBasics = () => {
  return (
    <div className={`flex w- flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[70vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`relative flex flex-col w-full p-[3vh] bg-black bg-opacity-70 rounded-[9px] mr-[0.8vw]`}>
        {/* <img src={wallpaper} className={`absolute w-full h-full rounded-[9px]  ease-in-out duration-500`}></img> */}
            <h1 className={`text-gold1 text-[4.5vh] text-center font-poppins`}>How does it work?</h1>
            <div className={`flex flex-row w-full h-full mt-[1vh]`}>
              <div className={`w-1/2 h-full mr-[2vh]`}>
                <p className={`text-white font-poppins text-[1.9vh] text-justify my-[1vh]`}>Vampire Treatments, including the Vampire FaceLift™ (also known as PRP or Platelet Rich Plasma Rejuvenation) have been one of the most talked about new rejuvenation treatments to emerge in recent years. Using the body’s own natural ability to heal and repair itself, this ground-breaking procedure can be used to combat facial ageing as well as to lift and enhance the breasts and has become a favourite among celebrities.</p>
                <p className={`text-white font-poppins text-[1.9vh] text-justify my-[1vh]`}>As the only UK doctor, and the only doctor in Europe, to be certified by the inventor of the Vampire treatments and registered on the official Vampire Facelift™ website, Dr Wakil is a leader in this new pioneering technique.</p>
                <p className={`text-white font-poppins text-[1.9vh] text-justify my-[1vh]`}>The treatment involves taking a small sample of blood and placing it in a centrifuge to extract the Platelet Rich Plasma (PRP) which is then injected back into the face to rejuvenate and slow down the skin ageing process by stimulating the production of new skin cells.</p>
              </div>
              <div className={`bg-gold1 w-[0.2vh]`}></div>
              <div className={`w-1/2 h-full ml-[2vh]`}>
                <p className={`text-white font-poppins text-[1.9vh] text-justify my-[1vh]`}>The Vampire Facelift treatment has become popular because it uses the body’s natural resources, namely a high concentration of growth factors within the plasma, is minimally invasive and has little recovery time and can address the signs of facial ageing both below the surface and on the surface of the skin resulting in re-volumisation, increased collagen and a more radiant complexion.</p>
                <p className={`text-white font-poppins text-[1.9vh] text-justify my-[1vh]`}>This treatment is part of The O Concept™ protocol and the treatment plan will be designed according to each individual patient according to the medical history upon consultation with our doctors</p>
                <p className=" h-[6vh] w-[12vw] bg-gold1 text-white mt-[2vh] text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p>
              </div>
            </div>
            
            
            
            {/* <ul className={`text-white text-[1.7vh] font-poppins `}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Counteract sagging or/and loss of volume at the top of the breasts caused by breast feeding, weight loss or simple ageing</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Achieve a fuller, more pronounced cleavage</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Improve the texture of the chest’s skin</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Target creased cleavage skin</li>
            </ul> */}
        </div>
        {/* <div className={`w-1/3 h-[100%] flex items-center`}>
            <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
        </div> */}
    </div>
  )
}

export default VampireBasics