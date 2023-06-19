import React from 'react'
import { PopupButton } from "react-calendly";
import { BloodCells, sherif } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ReductionDetails = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[85vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
         <div className={`w-2/5 h-[100%] flex items-center`}>
            <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>
        <div className={`w-[60%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>

                <p className={`flex text-gold1 text-[4.5vh] text-center text-gold1`}>Treatment Technique</p>
                <p className={`flex text-white text-[1.9vh] mt-[2.5vh]`}>Having the surgery can improve back and shoulder pain caused by the weight of the breasts, improve posture, and make it easier to exercise without discomfort. As well as physical improvements, breast reduction can improve female happiness, general well-being, confidence, and self-esteem, aiding social and work interactions.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>The operation removes some of the skin, breast tissue, and fat to reduce the overall size, weight, and droop of the breasts, leaving a smaller, lifted breast with a reduced overall cup size.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Breast reduction surgery is suitable for those women who experience physical pain and emotion distress due to large, heavy breasts, including those who suffer from problems like:</p>
                <ul className={`text-white text-[1.7vh] font-poppins my-[1.5vh] mb-6`}>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Pain in the back, shoulder, or neck.</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Skin irritation from the chaffing of clothes and/or underwear</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Grooves in the skin on the shoulders where bras staps dig in due to the heaviness of the breast.</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Skin infection and rashes under the breast.</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Difficulty exercising due to pain from movement of the breast tissue, despite support from sports bras.</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Poor posture which exacerbates back pain and can cause curvatures to the spine.</li>
                            
                        </ul>
                {/* <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>The treatment involves taking a small sample of blood and placing it in a centrifuge to extract the Platelet Rich Plasma (PRP) which is then injected back into the face or body, in this case the breast area.</p> */}
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Breast reduction surgery can also be used to correct asymmetry where one breast is significantly larger than the other and causes an imbalance.</p>

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

export default ReductionDetails