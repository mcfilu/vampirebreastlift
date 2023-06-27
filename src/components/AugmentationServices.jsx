import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
import { breast_fat2, breast_reduction2, boobs1} from '../assets';



const handleDragStart = (e) => e.preventDefault();



const AugmentationServices = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
  return (
    // <div className={`flex flex-col bg-opacity-70 w-full pl-[4%] pr-[4%]`}>

        

    //     <div className={`flex flex-row w-full h-[75vh] justify-between`}>
            
    //         <div onMouseEnter={() => setHove1(true)} onMouseLeave={() => {setHove1(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
    //             <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
    //                 <img className={` w-full h-full object-cover ${hov1 ? 'scale-110' : ''} ease-in-out duration-500`} src={boobs1}></img>
    //             </div>
    //             <div className={`flex flex-col w-full `}>
    //                 <h1 className={`text-gold1 text-[4vh] text-center`}>Vampire</h1>
    //                 <h1 className={` text-gold1 text-[4vh] text-center`}>Breastlift</h1>
    //             </div>
    //             <div className={`flex flex-col w-full h-1/4 pt-2`}>
    //                 <p className={`text-white text-[1.7vh] text-justify`}>The Vampire Breast Lift is a non-surgical procedure designed to subtly enhance and rejuvenate the natural appearance and shape of the breasts. It harnesses the healing power of your own blood to stimulate new tissue growth and improve the tone and texture of your skin. </p>
    //             </div>

    //             <NavLink to={`/vampire-breastlift`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button></NavLink>
    //         </div>

    //         <div onMouseEnter={() => setHove2(true)} onMouseLeave={() => {setHove2(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
    //             <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
    //                 <img className={` w-full h-full ${hov2 ? 'scale-110' : ''} ease-in-out duration-500`} src={breast_enlargement}></img>
    //             </div>
    //             <div className={`flex flex-col w-full `}>
    //                 <h1 className={`text-gold1 text-[4vh] text-center`}>Breast Fat</h1>
    //                 <h1 className={` text-gold1 text-[4vh] text-center`}>Enlargement</h1>
    //             </div>
    //             <div className={`flex flex-col w-full h-1/4 pt-2`}>
    //                 <p className={`text-white text-[1.7vh] text-justify`}>Breast enlargement with fat is a cosmetic procedure that harvests fat from other parts of your body, typically the abdomen, hips, thighs, or buttocks and transfers it into the breast area where it can be used to increase the size and shape of the natural breast.</p>
    //             </div>

    //             <NavLink to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button></NavLink>
    //         </div>

    //         <div onMouseEnter={() => setHove3(true)} onMouseLeave={() => {setHove3(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
    //             <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
    //                 <img className={` w-full h-full ${hov3 ? 'scale-110' : ''} ease-in-out duration-500`} src={breast_reduction}></img>
    //             </div>
    //             <div className={`flex flex-col w-full `}>
    //                 <h1 className={`text-gold1 text-[4vh] text-center`}>Breast</h1>
    //                 <h1 className={` text-gold1 text-[4vh] text-center`}>Reduction</h1>
    //             </div>
    //             <div className={`flex flex-col w-full h-1/4 pt-2`}>
    //                 <p className={`text-white text-[1.7vh] text-justify`}>Breast reduction surgery is a cosmetic surgical procedure called a mammoplasty. As the name suggests, the operation can reduce the size of the female breast and is particularly appropriate to reduce the physical strain and emotional toll of living with large, heavy breasts.</p>
    //             </div>

    //             <NavLink to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button></NavLink>
    //         </div>
            

            

            
    //     </div>

        
    // </div>
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    <p className={`text-[5vh] text-gold1 text-center`}>Related Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[70vh] `}>
    
        
        
        <div  className={`relative flex flex-col  bg-gold1  w-[100%] md:w-[30%]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
            <div className={`relative flex w-full h-[40vh]`}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover`} src={boobs1}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold1 text-[5.5vh] text-left`}>Vampire</h1>
                    <h1 className={` text-gold1 text-[5.5vh] text-left`}>BreastLift</h1>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify `}>The Vampire Breast Lift is a non-surgical procedure designed to subtly enhance and rejuvenate the natural appearance and shape of the breasts. It harnesses the healing power of your own blood to stimulate new tissue growth and improve the tone and texture of your skin.</p>
                
            </div>
            <NavLink to={`/`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>

    
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

export default AugmentationServices