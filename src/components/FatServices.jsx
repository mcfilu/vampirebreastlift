import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
import { sky, independent, thesun, tatler, oshot, pshot, blepharoplasty, nonsFaceLift, lipolysis, sFaceLift, breast_augmentation, breast_enlargement, breast_reduction, boobs1 } from '../assets';



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

const FatServices = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
  return (
    <div className={`flex flex-col bg-opacity-70 w-full pl-[4%] pr-[4%]`}>

        

        <div className={`flex flex-row w-full h-[75vh] justify-between`}>
            <div onMouseEnter={() => setHove1(true)} onMouseLeave={() => {setHove1(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full object-cover ${hov1 ? 'scale-110' : ''} ease-in-out duration-500`} src={boobs1}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>Vampire</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Breastlift</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.7vh] text-justify`}>The Vampire Breast Lift is a non-surgical procedure designed to subtly enhance and rejuvenate the natural appearance and shape of the breasts. It harnesses the healing power of your own blood to stimulate new tissue growth and improve the tone and texture of your skin. </p>
                </div>

                <NavLink to={`/vampire-breastlift`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button></NavLink>
            </div>
            
            <div onMouseEnter={() => setHove2(true)} onMouseLeave={() => {setHove2(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full ${hov2 ? 'scale-110' : ''} ease-in-out duration-500`} src={breast_augmentation}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>Breast</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Augmentation</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.7vh] text-justify`}>Breast augmentation is a surgical procedure which is used to enhance or augment your natural breast size and shape. It can also be used to correct asymmetries or differences in breast sizes, or as a reconstructive option post trauma or other surgeries such as the removal of breast cancers.</p>
                </div>

                <NavLink to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button></NavLink>
            </div>

            

            <div onMouseEnter={() => setHove3(true)} onMouseLeave={() => {setHove3(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full ${hov3 ? 'scale-110' : ''} ease-in-out duration-500`} src={breast_reduction}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>Breast</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Reduction</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.7vh] text-justify`}>Breast reduction surgery is a cosmetic surgical procedure called a mammoplasty. As the name suggests, the operation can reduce the size of the female breast and is particularly appropriate to reduce the physical strain and emotional toll of living with large, heavy breasts.</p>
                </div>

                <NavLink to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button></NavLink>
            </div>
            

            

            
        </div>

        
    </div>
  )
}

export default FatServices