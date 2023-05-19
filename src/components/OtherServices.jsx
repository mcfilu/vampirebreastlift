import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { sky, independent, thesun, tatler, oshot, pshot, blepharoplasty, nonsFaceLift, lipolysis, sFaceLift } from '../assets';



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
    <div className={`flex flex-col bg-opacity-70 w-full pl-[4%] pr-[4%]`}>

        

        <div className={`flex flex-row w-full h-[75vh] justify-between`}>
            
            <div onMouseEnter={() => setHove1(true)} onMouseLeave={() => {setHove1(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full ${hov1 ? 'scale-110' : ''} ease-in-out duration-500`} src={oshot}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>The O-Shot</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Vagina PRP</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.5vh] text-justify`}>The O-Shot ® (or Orgasm Shot ®) is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina. It is a nonsurgical technique that uses the growth factors each woman has in her own body to stimulate vaginal and clitoral rejuvenation to activate the Female Orgasm System.</p>
                </div>

                <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            <div onMouseEnter={() => setHove2(true)} onMouseLeave={() => {setHove2(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full ${hov2 ? 'scale-110' : ''} ease-in-out duration-500`} src={pshot}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>The P-Shot</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Penis PRP</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.5vh] text-justify`}>The P-Shot® procedure works by using the body’s natural ability to heal and rejuvenate itself by injecting growth factor rich Platelet Rich Plasma (PRP) into the penis to stimulate a regenerative process.</p>
                </div>

                <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            <div onMouseEnter={() => setHove3(true)} onMouseLeave={() => {setHove3(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full ${hov3 ? 'scale-110' : ''} ease-in-out duration-500`} src={blepharoplasty}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>The Non-Surgical</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Blepharoplasty</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.5vh] text-justify`}>Non-surgical blepharoplasty is an innovative cosmetic procedure that can provide significant benefits without the risks and downtime of traditional eyelid surgery. Using plasma fibroblast technology, can help reduce the appearance of fine lines, wrinkles, and sagging skin around the eyes.</p>
                </div>

                <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>
            

            

            
        </div>

        
    </div>
  )
}

export default OtherServices