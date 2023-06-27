import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
import { sky, independent, thesun, tatler, oshot, pshot, blepharoplasty, nonsFaceLift, lipolysis, sFaceLift, breast_augmentation, breast_enlargement, breast_reduction, fat_transfer, breast_fat_try, breast_reduction_try, breast_augmentation_try, breast_augmentation2, breast_fat2, breast_reduction2} from '../assets';



const handleDragStart = (e) => e.preventDefault();


const OtherServices = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    <p className={`text-[5vh] text-gold1 text-center`}>Related Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[70vh] `}>
    
        
        
        <div  className={`relative flex flex-col  bg-gold1  w-[100%] md:w-[30%]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
            <div className={`relative flex w-full h-[40vh]`}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover`} src={breast_augmentation2}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold1 text-[5.5vh] text-left`}>Breast</h1>
                    <h1 className={` text-gold1 text-[5.5vh] text-left`}>Augmentation</h1>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify `}>Breast augmentation, a popular surgical procedure in the field of cosmetic surgery, is designed to enhance or augment the size and shape of one's natural breasts. This procedure is sought after by individuals who desire a fuller, more proportionate bustline, whether for aesthetic reasons or to boost their self-confidence.</p>
                
            </div>
            <NavLink to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>

    
        </div>
    
        <div  className={`relative flex flex-col  bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[30%]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`relative flex w-full h-[40vh]`}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover`} src={breast_fat2}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left`}>Breast Fat</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left`}>Enlargement</h1>
                </div>
            </div>
            <div className={`relative flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify`}>Breast enlargement with fat, also known as autologous fat transfer or fat grafting, is a sophisticated cosmetic procedure that offers an alternative to traditional breast augmentation using implants. This innovative technique involves harvesting excess fat from other areas of the body and redistributing it to the breast area to enhance size, shape, and contour.</p>
                
            </div>
            <NavLink to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>
    
        </div>
    
        <div  className={`relative flex flex-col  bg-gold1   w-[100%] md:w-[30%] mt-[10vh] md:mt-[0px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`relative flex w-full h-[40vh]`}>
                <img className={` flex w-full h-full  ease-in-out duration-500 object-cover`} src={breast_reduction2}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left`}>Breast</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left`}>Reduction</h1>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify`}>Breast reduction surgery is a cosmetic surgical procedure called a mammoplasty. As the name suggests, the operation can reduce the size of the female breast and is particularly appropriate to reduce the physical strain and emotional toll of living with large, heavy breasts.</p>
                
            </div>
            <NavLink to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>
            
    
        </div>
        
    
        
    
        
    </div>
    
    
    </div>
  )
}

export default OtherServices