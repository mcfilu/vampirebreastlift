import React from 'react'
import { reduction, sherif} from '../assets'

const WakilImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={sherif}></img>
        <div className={`absolute left-[5vw] top-1/3`}>
            <p className={`text-white text-[3vh]`}>World-Renown Specialist</p>
            <h1 className={`text-gold1 text-[9vh] `}>Dr Sherif Wakil</h1>
            {/* <h1 className={`text-gold1 font-poppins text-[8vh] `}>Wakil</h1> */}
            <p className={`text-white text-[2vh] mt-[2vh] w-[30%]`}>Dr Wakil passionate making a significant difference in people’s lives. His patients happiness and helping them regain their self esteem are in fact his biggest incentive,to immerse himself in this field and constantly modify, enhance and accelerate his protocols.</p>


                

            
        </div>
        <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i>
    </div>
  )
}

export default WakilImage