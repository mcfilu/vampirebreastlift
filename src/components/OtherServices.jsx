

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { breast_reduction2, breast_fat2, breast_augmentation2} from '../assets';



const PshotServices = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    <p className={`text-[5vh] text-gold1 text-center font-header`}>Related Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] `}>
    
        
        
        <div  onMouseEnter={() => setHove1((prev) => !prev)} onMouseLeave={() => setHove1((prev) => !prev)} className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <NavLink to={`/breast-augmentation-in-london`}>
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover ${hov1 ? 'scale-125' : ''}`} src={breast_augmentation2}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold1 text-[5.5vh] text-left font-header`}>Breast</h1>
                    <h1 className={` text-gold1 text-[5.5vh] text-left font-header`}>Augmentation</h1>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Breast augmentation, a widely sought-after surgery procedure, aims to enhance and improve the size and shape of the breasts. It is a popular choice for those seeking to achieve a fuller and more balanced bust, whether driven by aesthetic preferences or the desire to boost their self-assurance.</p>
                
            </div>
            {/* <NavLink to={`/breast-augmentation-in-london`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </NavLink>
        </div>
        
    
        <div onMouseEnter={() => setHove2((prev) => !prev)} onMouseLeave={() => setHove2((prev) => !prev)} className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <NavLink to={`/breast-fat-enlargement-in-london`}>
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 ${hov2 ? 'scale-125' : ''}`} src={breast_fat2}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>Breast Fat</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>Enlargement</h1>
                </div>
            </div>
            <div className={`relative items-center flex flex-col w-full  py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Breast enlargement with fat, is a sophisticated cosmetic procedure that offers an alternative to traditional breast augmentation using implants. This innovative technique involves harvesting excess fat from other areas of the body and redistributing it to the breast area to enhance size, shape, and contour.</p>
                
                
            </div>
            {/* <NavLink to={`/breast-fat-enlargement-in-london`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Read More</button> */}
        </NavLink>
        </div>
        
    
        <div onMouseEnter={() => setHove3((prev) => !prev)} onMouseLeave={() => setHove3((prev) => !prev)} className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <NavLink to={`/breast-reduction-in-london`}>
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <img className={` flex w-full h-full  ease-in-out duration-500 object-cover ${hov3 ? 'scale-125' : ''}`} src={breast_reduction2}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>Breast</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>Reduction</h1>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Breast reduction, or mammoplasty, is a surgical procedure that reduces the size of the female breast. It provides relief for individuals with physical discomfort and emotional challenges caused by large and heavy breasts, improving their overall well-being of those seeking relief.</p>
                
            </div>
            {/* <NavLink to={`/breast-reduction-in-london`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink> */}
            
        </NavLink>
        </div>
        
        
    
        
    
        
    </div>
    
    
    </div>
  )
}

export default PshotServices