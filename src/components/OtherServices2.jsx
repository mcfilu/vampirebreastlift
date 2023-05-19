import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { sky, independent, thesun, tatler, oshot, pshot, blepharoplasty, nonsFaceLift, lipolysis, sFaceLift } from '../assets';

const OtherServices2 = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
  return (
    <div className={`flex flex-col bg-opacity-70 w-full pl-[4%] pr-[4%]`}>

        

        <div className={`flex flex-row w-full h-[75vh] justify-between`}>
            <div onMouseEnter={() => setHove1(true)} onMouseLeave={() => {setHove1(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full ${hov1 ? 'scale-110' : ''} ease-in-out duration-500`} src={sFaceLift}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>DR SW</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Face Lift</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.5vh] text-justify`}>Developed by Dr Sherif Wakil based on years of experience in the use of different thread types, this Dr Wakil signature treatment redefines the face; reduces wrinkles, restores volumes and offers natural-looking, subtle face lift results. Minimally invasive and requiring little to no down-time at all, the procedure provides results that can last up to 36 months</p>
                </div>

                <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            <div onMouseEnter={() => setHove2(true)} onMouseLeave={() => {setHove2(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full ${hov2 ? 'scale-110' : ''} ease-in-out duration-500`} src={nonsFaceLift}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>The Non-Surgical</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Face Lift</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.5vh] text-justify`}>Developed by Dr Sherif Wakil, treatment uses a combination of avant-garde anti-ageing techniques that use the body’s own natural processes and tissue to rejuvenate skin and correct loss of volume. The Non-Surgical Face Lift is the ultimate in natural treatments and an exclusive Dr SW Skin Clinic procedure.</p>
                </div>

                <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            <div onMouseEnter={() => setHove3(true)} onMouseLeave={() => {setHove3(false)}} className={`relative flex flex-col h-full bg-black p-[1vh] bg-opacity-70 w-[31%] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <div className={`flex w-full h-[55%]  overflow-hidden rounded-[9px]`}>
                    <img className={` w-full h-full ${hov3 ? 'scale-110' : ''} ease-in-out duration-500`} src={lipolysis}></img>
                </div>
                <div className={`flex flex-col w-full `}>
                    <h1 className={`text-gold1 text-[4vh] text-center`}>O.F.F.</h1>
                    <h1 className={` text-gold1 text-[4vh] text-center`}>Lipolysis</h1>
                </div>
                <div className={`flex flex-col w-full h-1/4 pt-2`}>
                    <p className={`text-white text-[1.5vh] text-justify`}>Dr SW Clinics offer a number of non-surgical body treatments for fat reduction, including: The O.F.F system is a state of the art electro-medical device, which can be used for non-invasive micro-lipoplasty. This technology is new to the UK and Dr Wakil is one of the first doctors to offer treatments with it.</p>
                </div>

                <button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-black text-gold1 text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2 rounded-[10px] hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            
            

            
            {/* <AliceCarousel mouseTracking 
                items={items} 
                responsive={{
                    0: {
                        items: 1,
                    },
                    200: {
                        items: 4,
                        itemsFit: 'contain',
                    }
                }} 
                disableButtonsControls={true} 
                disableDotsControls={true} 
                infinite={true} 
                autoPlay={true} 
                autoPlayInterval={1200}
                animationDuration={1000}
            /> */}
            </div>
    </div>
  )
}

export default OtherServices2