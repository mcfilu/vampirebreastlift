import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { sky, independent, thesun, tatler, oshot, pshot, blepharoplasty, nonsFaceLift, lipolysis, sFaceLift } from '../assets';



const handleDragStart = (e) => e.preventDefault();

const items = [
    <div className={`flex flex-col bg-white`}>
        <div className={`flex w-full h-[55%]`}>
            <img src={oshot}></img>
        </div>
        <div className={`flex flex-col w-full h-[55%] p-4`}>
            <h1 className={`text-gold1 text-[30px]`}>The O-shot</h1>
            <h1 className={`text-gold1 text-[30px]`}>Vagina PRP</h1>
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
  return (
    <div className={`flex flex-col bg-opacity-70 w-full pl-[4%] pr-[4%]`}>

        <div className={` pr-8`}>
            {/* <h1 className={`text-gold1 text-[30px] font-poppins`}>Other Treatmens</h1> */}
            {/* <p className={`text-white text-[15px] font-poppins mt-12`}>Dr Sherif Wakil is regularly interviewed by the mainstream press as an expert in the subject of sexual health and well-being.</p> */}
        </div>

        <div className={`flex flex-row w-full h-[75vh] justify-between`}>
            
            <div className={`relative flex flex-col h-full bg-black bg-opacity-70 w-[31%] rounded-[9px]`}>
                <div className={`flex w-full h-[55%] p-2`}>
                    <img className={`rounded-[9px] w-full h-full`} src={oshot}></img>
                    
                    
                </div>
                <div className={`flex flex-col w-full p2-`}>
                    <h1 className={`text-gold1 text-[30px] text-center`}>The O-Shot</h1>
                    <h1 className={` text-gold1 text-[30px] text-center`}>Vagina PRP</h1>
                    
                </div>
                <div className={`flex flex-col w-full h-1/4 p-4 pt-2`}>
                    <p className={`text-white text-[13px] `}>The O-Shot ® (or Orgasm Shot ®) is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina. It is a nonsurgical technique that uses the growth factors each woman has in her own body to stimulate vaginal and clitoral rejuvenation to activate the Female Orgasm System.</p>
                </div>

                <button className={`p-4 absolute -bottom-10 bg-black text-gold1 text-[25px] bg-opacity-80 left-1/2  transform -translate-x-1/2 rounded-full hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            <div className={`relative flex flex-col bg-black bg-opacity-70 w-[31%] rounded-[9px]`}>
                <div className={`flex w-full h-[55%] p-2`}>
                    <img className={`rounded-[9px] w-full h-full`} src={pshot}></img>
                </div>
                <div className={`flex flex-col w-full p-2`}>
                    <h1 className={`text-gold1 text-[30px] text-center`}>The P-Shot</h1>
                    <h1 className={`text-gold1 text-[30px] text-center`}>Penis PRP</h1>
                    {/* <p>O-Shot is a new technique developed to solve the sexual problems experienced by women; rejuvenate their vagina and increase their pleasure.</p> */}
                </div>
                <div className={`flex flex-col w-full h-1/4 p-4 pt-2`}>
                    <p className={`text-white text-[13px] `}>The P-Shot® procedure works by using the body’s natural ability to heal and rejuvenate itself by injecting growth factor rich Platelet Rich Plasma (PRP) into the penis to stimulate a regenerative process.</p>
                </div>
                <button className={`p-4 absolute -bottom-10 bg-black text-gold1 text-[25px] bg-opacity-80 left-1/2  transform -translate-x-1/2 rounded-full hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            <div className={`relative flex flex-col bg-black bg-opacity-70 w-[31%] rounded-[9px]`}>
                <div className={`flex w-full h-[55%] p-2`}>
                    <img className={`rounded-[9px] w-full h-full`} src={blepharoplasty}></img>
                </div>
                <div className={`flex flex-col w-full p-2`}>
                    <h1 className={`text-gold1 text-[30px] text-center`}>The Non-Surgical</h1>
                    <h1 className={`text-gold1 text-[30px] text-center`}>Blepharoplasty</h1>
                    {/* <p>O-Shot is a new technique developed to solve the sexual problems experienced by women; rejuvenate their vagina and increase their pleasure.</p> */}
                </div>
                <div className={`flex flex-col w-full h-1/4 p-4 pt-2`}>
                    <p className={`text-white text-[13px] `}>Non-surgical blepharoplasty is an innovative cosmetic procedure that can provide significant benefits without the risks and downtime of traditional eyelid surgery. Using plasma fibroblast technology, can help reduce the appearance of fine lines, wrinkles, and sagging skin around the eyes.</p>
                </div>
                <button className={`p-4 absolute -bottom-10 bg-black text-gold1 text-[25px] bg-opacity-80 left-1/2  transform -translate-x-1/2 rounded-full hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>
        </div>

        <div className={`flex flex-row w-full h-[75vh] mt-24 justify-between`}>

            <div className={`relative flex flex-col bg-black bg-opacity-70 w-[31%] rounded-[9px]`}>
                <div className={`flex w-full h-[55%] p-2`}>
                    <img className={`rounded-[9px] w-full h-full`} src={sFaceLift}></img>
                </div>
                <div className={`flex flex-col w-full p-2`}>
                    <h1 className={`text-gold1 text-[30px] text-center`}>DR SW</h1>
                    <h1 className={`text-gold1 text-[30px] text-center`}>Face Lift</h1>
                    {/* <p>O-Shot is a new technique developed to solve the sexual problems experienced by women; rejuvenate their vagina and increase their pleasure.</p> */}
                </div>
                <div className={`flex flex-col w-full h-1/4 p-4 pt-2`}>
                    <p className={`text-white text-[13px] `}>Developed by Dr Sherif Wakil based on years of experience in the use of different thread types, this Dr Wakil signature treatment redefines the face; reduces wrinkles, restores volumes and offers natural-looking, subtle face lift results. Minimally invasive and requiring little to no down-time at all, the procedure provides results that can last up to 36 months.</p>
                </div>
                <button className={`p-4 absolute -bottom-10 bg-black text-gold1 text-[25px] bg-opacity-80 left-1/2  transform -translate-x-1/2 rounded-full hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            <div className={`relative flex flex-col bg-black bg-opacity-70 w-[31%] rounded-[9px]`}>
                <div className={`flex w-full h-[55%] p-2`}>
                    <img className={`rounded-[9px] w-full h-full`} src={nonsFaceLift}></img>
                </div>
                <div className={`flex flex-col w-full p-2`}>
                    <h1 className={`text-gold1 text-[30px] text-center`}>The Non-Surgical</h1>
                    <h1 className={`text-gold1 text-[30px] text-center`}>Face Lift</h1>
                    {/* <p>O-Shot is a new technique developed to solve the sexual problems experienced by women; rejuvenate their vagina and increase their pleasure.</p> */}
                </div>
                <div className={`flex flex-col w-full h-1/4 p-4 pt-2`}>
                    <p className={`text-white text-[13px] `}>Developed by Dr Sherif Wakil, treatment uses a combination of avant-garde anti-ageing techniques that use the body’s own natural processes and tissue to rejuvenate skin and correct loss of volume. The Non-Surgical Face Lift is the ultimate in natural treatments and an exclusive Dr SW Skin Clinic procedure.</p>
                </div>
                <button className={`p-4 absolute -bottom-10 bg-black text-gold1 text-[25px] bg-opacity-80 left-1/2  transform -translate-x-1/2 rounded-full hover:bg-gold1 hover:text-black`}>READ MORE</button>
            </div>

            <div className={`relative flex flex-col bg-black bg-opacity-70 w-[31%] rounded-[9px]`}>
                <div className={`flex w-full h-[55%] p-2`}>
                    <img className={`rounded-[9px] w-full h-full`} src={lipolysis}></img>
                </div>
                <div className={`flex flex-col w-full p-2`}>
                    <h1 className={`text-gold1 text-[30px] text-center`}>O.F.F.</h1>
                    <h1 className={`text-gold1 text-[30px] text-center`}>Lipolysis</h1>
                    {/* <p>O-Shot is a new technique developed to solve the sexual problems experienced by women; rejuvenate their vagina and increase their pleasure.</p> */}
                </div>
                <div className={`flex flex-col w-full h-1/4 p-4 pt-2`}>
                    <p className={`text-white text-[13px] `}>Dr SW Clinics offer a number of non-surgical body treatments for fat reduction, including: The O.F.F system is a state of the art electro-medical device, which can be used for non-invasive micro-lipoplasty. This technology is new to the UK and Dr Wakil is one of the first doctors to offer treatments with it.</p>
                </div>
                <button className={`p-4 absolute -bottom-10 bg-black text-gold1 text-[25px] bg-opacity-80 left-1/2  transform -translate-x-1/2 rounded-full hover:bg-gold1 hover:text-black`}>READ MORE</button>
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

export default OtherServices