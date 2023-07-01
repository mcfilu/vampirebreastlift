import React from 'react'
import {  sherif} from '../assets'

const WakilImage = () => {
  return (
    // <div className={`relative`}>
    //     <img className={`w-screen h-screen object-cover`} src={sherif}></img>
    //     <div className={`absolute left-[5vw] top-1/3`}>
    //         <p className={`text-white text-[3vh]`}>World-Renown Specialist</p>
    //         <h1 className={`text-gold1 text-[9vh] `}>Dr Sherif Wakil</h1>
    //         {/* <h1 className={`text-gold1 font-poppins text-[8vh] `}>Wakil</h1> */}
    //         <p className={`text-white text-[2vh] mt-[2vh] md:w-[30%]`}>Dr Wakil passionate making a significant difference in people’s lives. His patients happiness and helping them regain their self esteem are in fact his biggest incentive,to immerse himself in this field and constantly modify, enhance and accelerate his protocols.</p>


                

            
    //     </div>
    //     {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    // </div>
    <div className={`relative`}>
    <img className={`w-screen h-screen object-cover`} src={sherif}></img>
    <div className={`absolute left-[1.5vw] top-[28%] md:w-[45%]`}>
    {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
    <p className={`text-white text-[3vh] font-main md:mt-[10vh]`}>World-Renown Specialist</p>
                <h1 className={`text-gold1 text-[8vh] font-header md:mb-[3vh]  text-left`}>Dr Sherif Wakil</h1>
                    <h1 className={`text-white text-[2.5vh] font-main mb-[3vh] text-justify  md:w-[75%] w-full`}>Dr. Wakil is passionately dedicated to making a profound impact on people's lives, driven by the joy of seeing patients happy and regaining their self-esteem. This immense satisfaction fuels his unwavering commitment to continually refine, improve, and expedite his protocols.</h1>
                    <a className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                   
                {/* </div> */}
    </div>
    {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
</div>
  )
}

export default WakilImage