import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { sky, independent, thesun, tatler, oshot, pshot, blepharoplasty, nonsFaceLift, lipolysis, sFaceLift, logoblack, clinic2} from '../assets';
import { NavLink } from 'react-router-dom';



const handleDragStart = (e) => e.preventDefault();



const OtherServices2 = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
  return (
//     <div className={`flex flex-col bg-opacity-70 w-full pl-[4%] pr-[4%]`}>

        

//         <div className={`flex flex-row w-full h-[75vh] justify-between`}>
            
//             <div onMouseEnter={() => setHove1(true)} onMouseLeave={() => {setHove1(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
//                 <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
//                     <img className={` w-full h-full ${hov1 ? 'scale-110' : ''} ease-in-out duration-500`} src={oshot}></img>
//                 </div>
//                 <div className={`flex flex-col w-full `}>
//                     <h1 className={`text-gold1 text-[4vh] text-center`}>The O-Shot</h1>
//                     <h1 className={` text-gold1 text-[4vh] text-center`}>Vagina PRP</h1>
//                 </div>
//                 <div className={`flex flex-col w-full h-1/4 pt-2`}>
//                     <p className={`text-white text-[1.7vh] text-justify`}>The O-Shot ®  is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina. It is a nonsurgical technique that uses the growth factors each woman has in her own body to stimulate vaginal and clitoral rejuvenation to activate the Female Orgasm System.</p>
//                 </div>

//                 <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
//             </div>

//             <div onMouseEnter={() => setHove2(true)} onMouseLeave={() => {setHove2(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
//                 <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
//                     <img className={` w-full h-full ${hov2 ? 'scale-110' : ''} ease-in-out duration-500`} src={pshot}></img>
//                 </div>
//                 <div className={`flex flex-col w-full `}>
//                     <h1 className={`text-gold1 text-[4vh] text-center`}>The P-Shot</h1>
//                     <h1 className={` text-gold1 text-[4vh] text-center`}>Penis PRP</h1>
//                 </div>
//                 <div className={`flex flex-col w-full h-1/4 pt-2`}>
//                     <p className={`text-white text-[1.7vh] text-justify`}>P-Shot® is a part of the ground-breaking treatment, The O Concept™. The P-Shot® procedure works by using the body’s natural ability to heal andrejuvenate itself by injecting growth factor rich Platelet Rich Plasma (PRP) into the
// penis to stimulate a regenerative process.</p>
//                 </div>

//                 <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
//             </div>

//             <div onMouseEnter={() => setHove3(true)} onMouseLeave={() => {setHove3(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
//                 <div className={`flex w-full h-[55%] bg-white  overflow-hidden rounded-[9px]`}>
//                     <img className={` w-full h-full ${hov3 ? 'scale-110' : ''} ease-in-out duration-500`} src={logoblack}></img>
//                 </div>
//                 <div className={`flex flex-col w-full `}>
//                     <h1 className={`text-gold1 text-[4vh] text-center`}>Dr SW</h1>
//                     <h1 className={` text-gold1 text-[4vh] text-center`}>Clinics</h1>
//                 </div>
//                 <div className={`flex flex-col w-full h-1/4 pt-2`}>
//                     <p className={`text-white text-[1.7vh] text-justify`}>Explore the innovative and expertly tailored treatments offered at Dr. SW's Clinics, where we specialize in aesthetic enhancements and sexual rejuvenation therapies. We invite you to visit our website to learn about the myriad of transformative possibilities we provide.</p>
//                 </div>

//                 <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
//             </div>
            

            

            
//         </div>

        
//     </div>
        <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>



        <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[70vh] `}>

            
            
            <div  className={`relative flex flex-col  bg-gold1  w-[100%] md:w-[30%]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`relative flex w-full h-[40vh]`}>
                    <img className={`flex w-full h-full  ease-in-out duration-500 object-cover`} src={oshot}></img>
                    <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                        <h1 className={`text-gold1 text-[5.5vh] text-left`}>The O-shot</h1>
                        <h1 className={` text-gold1 text-[5.5vh] text-left`}>Vagina PRP</h1>
                    </div>
                </div>
                
                <div className={`relative flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                    <p className={`flex text-black text-[2.1vh] text-justify `}>The O-Shot ®  is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina. It is a nonsurgical technique that uses the growth factors each woman has in her own body to stimulate vaginal and clitoral rejuvenation to activate the Female Orgasm System.</p>
                    
                </div>
                <NavLink to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>


            </div>

            <div  className={`relative flex flex-col  bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[30%]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
            <div className={`relative flex w-full h-[40vh]`}>
                    <img className={`flex w-full h-full  ease-in-out duration-500 object-cover`} src={pshot}></img>
                    <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                        <h1 className={`text-gold2 text-[5.5vh] text-left`}>The P-Shot</h1>
                        <h1 className={` text-gold2 text-[5.5vh] text-left`}>Penis PRP</h1>
                    </div>
                </div>
                <div className={`relative flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                    <p className={`flex text-black text-[2.1vh] text-justify`}>P-Shot® is a part of the ground-breaking treatment, The O Concept™. The P-Shot® procedure works by using the body’s natural ability to heal andrejuvenate itself by injecting growth factor rich Platelet Rich Plasma (PRP) into the
penis to stimulate a regenerative process.</p>
                    
                </div>
                <NavLink to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>

            </div>

            <div  className={`relative flex flex-col  bg-gold1   w-[100%] md:w-[30%] mt-[10vh] md:mt-[0px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
            <div className={`relative flex w-full h-[40vh] bg-gray-500`}>
                    <img className={` flex w-full h-full  ease-in-out duration-500 object-cover`} src={clinic2}></img>
                    <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                        <h1 className={`text-gold2 text-[5.5vh] text-left`}>Dr. SW</h1>
                        <h1 className={` text-gold2 text-[5.5vh] text-left`}>Clinics</h1>
                    </div>
                </div>
                <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                    <p className={`flex text-black text-[2.1vh] text-justify`}>Explore the innovative and expertly tailored treatments offered at Dr. SW's Clinics, where we specialize in aesthetic enhancements and sexual rejuvenation therapies. We invite you to visit our website to learn about the myriad of transformative possibilities we provide.</p>
                    
                </div>
                <NavLink to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink>
                

            </div>
            

            

            
        </div>


        </div>
  )
}
export default OtherServices2
