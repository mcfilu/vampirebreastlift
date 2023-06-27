import React from 'react'
import { PopupButton } from "react-calendly";
import { BloodCells, sherif } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FatOpening = () => {
  return (
    // <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[60vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
    //     <div className={`w-[65%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between mr-[1.5vh]`}>
    //         <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>
    //         <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[1.3vw]`}></i>
    //             <p className={`flex text-gold1 text-[2.7vh] text-center text-gold1`}>Breast enlargement with fat is a cosmetic procedure that harvests fat from other parts of your body, typically the abdomen, hips, thighs, or buttocks and transfers it into the breast area where it can be used to increase the size and shape of the natural breast.</p>
    //             <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[1.3vw]`}></i>
    //             <p className={`flex text-gold text-[3vh] text-center text-gold1 mt-[6vh]`}>Dr. Sherif Wakil</p>
    //         </div>
    //         {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

    //             <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
    //             <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
    //         </div>
    //         <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
    //             url="https://calendly.com/nikekarta2/30min"


    //             rootElement={document.getElementById("root")}
    //             text="Book Consultation"
    //             textColor="#ffffff"
    //             color="#ffffff"
    //             /></p> */}
    //     </div>
    //     <div className={`w-2/5 h-[100%] flex items-center`}>
    //         {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
    //         <img className={`w-full h-full object-cover rounded-[9px]`} src={sherif}></img>
    //     </div>
       
        
    
    // </div>
    <div className={`flex w-full flex-row md:min-h-[55vh]  md:p-[2vh] md:pl-[0px]`}>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <img className={`w-full h-full object-cover `} src={sherif}></img>
        </div>
        <div className={`hidden md:flex w-[55%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={` flex flex-col w-[100%]  bg-opacity-40  items-center justify-center my-auto`}>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[1.3vw]`}></i>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh]`}>Breast Fat Enlargement is a sophisticated cosmetic procedure that goes beyond traditional breast enlargement methods. By utilizing the power of your body's own fat cells, harvested from areas such as the abdomen, hips, thighs, or buttocks, this innovative technique allows for a natural augmentation of the breasts. During the procedure, the carefully extracted fat is strategically transferred to the breast area, where it seamlessly integrates to enhance both the size and shape of your natural breasts. </p>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[5vh] md:text-[1.3vw] mt-[2vh]`}></i>
                <p className={`flex  text-[4.5vh] text-center text-gold1 mt-[5vh]`}>Dr. Sherif Wakil</p>
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
        


        <div className={`md:hidden flex flex-col w-full items-center`}>
        <p className={`flex text-[4.5vh] text-gold1 mt-[2vh]`}>Dr. Sherif Wakil</p>
            <img className={`w-full h-full object-cover `} src={sherif}></img>
            
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[4vh] mt-[1vh]`}></i>
            <p className={`flex text-white text-[2.5vh] text-center text-gold1 `}>Breast Fat Enlargement is a sophisticated cosmetic procedure that goes beyond traditional breast enlargement methods. By utilizing the power of your body's own fat cells, harvested from areas such as the abdomen, hips, thighs, or buttocks, this innovative technique allows for a natural augmentation of the breasts. During the procedure, the carefully extracted fat is strategically transferred to the breast area, where it seamlessly integrates to enhance both the size and shape of your natural breasts.</p>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[4vh] `}></i>
            
            

        </div>
       
        
    
    </div>
  )
}

export default FatOpening