import React from 'react'
import { PopupButton } from "react-calendly";
import { BloodCells, sherif } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AugmentationDetails = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[80vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
         <div className={`w-2/5 h-[100%] flex items-center`}>
            <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>
        <div className={`w-[60%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>

                <p className={`flex text-gold1 text-[4.5vh] text-center text-gold1`}>Treatment Technique</p>
                <p className={`flex text-white text-[1.9vh] mt-[2.5vh]`}>Some women feel very self-conscious about small or under-developed breasts, or if they have asymmetries which means that there are differences between the sizes of each breast, thus they seek a solution to enhance their natural breast. Others would simply like a larger breast size to feel more attractive or look better in clothes.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Breast implant surgery is colloquially called a ‘boob job’ and is one of the most performed cosmetic surgery procedures.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Breast enlargement is rarely available on the NHS, save for medical cases such as severe asymmetry or breast malformation, and is a very generic option if funded. Our surgeon can discuss a bespoke breast surgery with you to give you the size and shape you desire.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Breast implants come in a variety of types, sizes, and shapes, all of which will be discussed with our surgeon.Most implants are soft or firm silicone gel filled, but saline options are available.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>You can also choose how you want your new breast to appear, in terms of the shape and projection type, such that they drop down more naturally with less projection at the top, or have more volume at the top for a more rounded appearance in low-cut clothing. The appearance of your cleavage is also a consideration. Implant shape options include round or tear-drop shaped implants with low- or high-profile projections. This allows you to craft your breast shape and size to your desired outcome.</p>
                {/* <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Bear in mind that breast implants do not last a lifetime and will likely need replacing with a future surgery in 10-15 years. Many women choose different implant types depending on their current age, lifestyle, and the look they want at the time.</p> */}

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

export default AugmentationDetails