import React from 'react'
import { PopupButton } from "react-calendly";
import { BloodCells, sherif } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FatDetails = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[78vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
         <div className={`w-2/5 h-[100%] flex items-center`}>
            <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>
        <div className={`w-[60%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>

                <p className={`flex text-gold1 text-[4.5vh] text-center text-gold1`}>Treatment Technique</p>
                <p className={`flex text-white text-[1.9vh] mt-[2.5vh]`}>This method of breast augmentation does not use any artificial implants, but instead uses autologous fat from your own body. This procedure is therefore also called fat grafting, autologous fat transfer, and lipofilling to the breast.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>The procedure involves the initial harvesting of the fat cells using liposuction from the donor area(s); the suctioned fat is then processed to extract only the yellow fat cells into a syringe ready for re-injection, (this removes any other liquid or blood gathered as part of the liposuction procedure). The second procedure places the fat into the breast, the recipient area, through re-injection.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>The aim of the procedure is to naturally enhance the breast shape and augment the size, but without the need to place a silicone breast implant. Some women prefer the concept of a more natural result, using their own fat, which is a 100% natural product, rather than inserting an artificial implant.</p>
                <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Unlike with an implant, the resulting size of the breast augmentation cannot be guaranteed because the transplanted fat must settle and develop a blood supply to survive in its new location. Inevitably, a proportion of the cells will perish and be reabsorbed by the body (metabolised) as part of the process, (this is expected and usually the quantity transferred it a little more than required to account for a percentage loss in fat cells). You may often be advised to have a repeat procedure to build up the augmentation, allowing each fat transfer to integrate, or if the resultant breast size is not as desired.</p>
                {/* <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>The plasma has a high concentration of growth factors, the cells in our body, which are responsible for rejuvenation and regeneration, and is a powerful and natural method of rejuvenation.</p> */}

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

export default FatDetails