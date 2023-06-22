import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
import { sky, independent, thesun, tatler, oshot, pshot, blepharoplasty, nonsFaceLift, lipolysis, sFaceLift, breast_augmentation, breast_enlargement, breast_reduction } from '../assets';



const handleDragStart = (e) => e.preventDefault();

const items = [
    <div className={`flex flex-col bg-white`}>
        <div className={`flex w-full h-[55%]`}>
            <img src={oshot}></img>
        </div>
        <div className={`flex flex-col w-full h-[55%] p-[1vh]`}>
            <h1 className={`text-gold1 text-[4vh]`}>The O-shot</h1>
            <h1 className={`text-gold1 text-[4vh]`}>Vagina PRP</h1>
            {/* <p>O-Shot is a new technique developed to solve the sexual problems experienced by women; rejuvenate their vagina and increase their pleasure.</p> */}
        </div>
    </div>,
    
    <div className={`flex flex-col bg-white`}>
        <div className={`flex w-full h-[55%]`}>
            <img src={oshot}></img>
        </div>
        <div className={`flex flex-col w-full h-1/`}>
            <h1>O-shot</h1>
            <h1>Treatment</h1>
            <p>O-Shot is a new technique developed to solve the sexual problems experienced by women; rejuvenate their vagina and increase their pleasure.</p>
        </div>
    </div>,
    
]

const OtherServices = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
  return (
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

        <p className={`text-[5vh] text-gold1 text-center`}>Related Treatments</p>

        <div className={`flex flex-row w-full h-[72vh] justify-between mt-[2vh]`}>

            
            
            <div onMouseEnter={() => setHove1(false)} onMouseLeave={() => {setHove1(false)}} className={`relative flex flex-col h-full bg-white   w-[31%]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                
                    <img className={` w-full h-[55%] ${hov1 ? 'scale-110' : ''} ease-in-out duration-500`} src={breast_augmentation}></img>
                
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5vh] text-left`}>Breast</h1>
                    <h1 className={` text-gold2 text-[5vh] text-left`}>Augmentation</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 mt-[2vh]`}>
                    <p className={`text-black text-[2.1vh] text-justify mx-[2vh]`}>Breast augmentation, a popular surgical procedure in the field of cosmetic surgery, is designed to enhance or augment the size and shape of one's natural breasts. This procedure is sought after by individuals who desire a fuller, more proportionate bustline, whether for aesthetic reasons or to boost their self-confidence.</p>
                </div>

                <NavLink to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-gold1 text-white text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>
            </div>

            <div onMouseEnter={() => setHove2(true)} onMouseLeave={() => {setHove2(false)}} className={`relative flex flex-col h-full bg-white   w-[31%]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
            <img className={` w-full h-[55%] ${hov1 ? 'scale-110' : ''} ease-in-out duration-500`} src={breast_enlargement}></img>
                
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5vh] text-left`}>Breast Fat</h1>
                    <h1 className={` text-gold2 text-[5vh] text-left`}>Enlargement</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 mt-2`}>
                    <p className={`text-black text-[2.1vh] text-justify mx-[2vh]`}>Breast enlargement with fat, also known as autologous fat transfer or fat grafting, is a sophisticated cosmetic procedure that offers an alternative to traditional breast augmentation using implants. This innovative technique involves harvesting excess fat from other areas of the body and redistributing it to the breast area to enhance size, shape, and contour.</p>
                </div>

                <NavLink to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-gold1 text-white text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>
            </div>

            <div onMouseEnter={() => setHove3(true)} onMouseLeave={() => {setHove3(false)}} className={`relative flex flex-col h-full bg-white   w-[31%]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
            <img className={` w-full h-[55%] ${hov1 ? 'scale-110' : ''} ease-in-out duration-500`} src={breast_reduction}></img>
                
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5vh] text-left`}>Breast</h1>
                    <h1 className={` text-gold2 text-[5vh] text-left`}>Reduction</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 mt-2`}>
                    <p className={`text-black text-[2.1vh] text-justify mx-[2vh]`}>Breast reduction surgery is a cosmetic surgical procedure called a mammoplasty. As the name suggests, the operation can reduce the size of the female breast and is particularly appropriate to reduce the physical strain and emotional toll of living with large, heavy breasts.</p>
                </div>

                <NavLink to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-gold1 text-white text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>
            </div>
            

            

            
        </div>

        
    </div>
  )
}

export default OtherServices