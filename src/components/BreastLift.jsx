import React from 'react'
import { boobs5 } from '../assets'

const BreastLift = () => {
  return (
    <div className={`w-11/12 h-[65vh] bg-black bg-opacity-70 rounded-[9px] mx-auto p-[1vh] flex flex-row justify-between`}>

        <div className={`flex flex-col justify-center items-center w-1/2 p-[2vh]`}>
            <h1 className={`text-gold1 font-poppins text-[6vh]`}>Vampire Breastlift</h1>
            {/* <h1 className={`text-gold1 font-poppins text-[6vh]`}>BreastLift</h1> */}
            {/* <p className={`text-white text-[13px] font-poppins`}>The Vampire Breast Lift® is an exciting new non-surgical technique developed to subtly enhance the breasts. This was first introduced into the UK and Europe by Dr Sherif Wakil and is exclusively offered by his Harley Street Clinic.</p> */}
            {/* <p className={`text-white text-[13px] font-poppins`}>The treatment uses the body’s natural healing and rejuvenation process by harvesting Platelet Rich Plasma (PRP) which is packed with growth factors (cells that are responsible for the body’s ability to repair and rejuvenate itself) from a small sample of your own blood.</p> */}
            <ul className={`text-white text-center mt-[3vh] flex flex-col justify-center`}>
                <li className={`mt-[2vh] flex flex-row text-[2vh] text-left`}><i className={`fa-regular fa-bookmark text-[3vh] mr-[1.4vh] flex flex-row justify-left items-center text-gold1`}></i><p>Get natural-looking results without the need for implants or invasive surgery.</p></li>
                <li className={`mt-[2vh] flex flex-row text-[2vh] text-left`}><i className={`fa-regular fa-bookmark text-[3vh] mr-[1.4vh] flex flex-row justify-left items-center text-gold1`}></i><p>Enhance your cleavage with the Vampire Breastlift, a non-surgical procedure that uses your own blood to stimulate tissue growth.</p></li>
                <li className={`mt-[2vh] flex flex-row text-[2vh] text-left`}><i className={`fa-regular fa-bookmark text-[3vh] mr-[1.4vh] flex flex-row justify-left items-center text-gold1`}></i><p>The procedure takes less than an hour and requires little to no downtime.</p></li>
                <li className={`mt-[2vh] flex flex-row text-[2vh] text-left`}><i className={`fa-regular fa-bookmark text-[3vh] mr-[1.4vh] flex flex-row justify-left items-center text-gold1`}></i><p>Experience a more youthful and lifted appearance in the chest area, with the added benefit of improved skin texture and tone</p></li>

                
            </ul>
            <a className={`text-gold1 hover-underline-animation2 text-[2vh] pl-[2vh] pr-[2vh] mt-[3vh]`}>READ MORE</a>
           
        </div>

        <div className={`flex items-center w-1/2`}>
            <img className={`rounded-[9px] w-full h-full object-cover`} src={boobs5}></img>
        </div>
    </div>
  )
}

export default BreastLift