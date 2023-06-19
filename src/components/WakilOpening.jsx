import React from 'react'
import { sherif2 } from '../assets'

const WakilOpening = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[60vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`w-[65%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between mr-[1.5vh]`}>
            <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>

                <p className={`flex text-gold1 text-[2.6vh] text-center text-gold1`}>Having degrees in both medicine and the arts, Dr Wakil applies a philosophy to his practice that creating beauty is art. With his keen personal interest in art and sculpting, he can deliver more natural-looking results, so individuals do not look overdone and fake. This is the reason why patients travel from around to world to see him. He believes in only offering treatments which are safe, effective and minimally invasive to achieve the desired natural, yet enhanced, look. He also understands that each patient is an individual and carefully tailors his treatments accordingly.</p>
                
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
        <div className={`w-2/5 h-[100%] flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <img className={`w-full h-full object-cover rounded-[9px]`} src={sherif2}></img>
        </div>
       
        
    
    </div>
  )
}

export default WakilOpening