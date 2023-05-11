import React from 'react'
// import { boobs5 } from '../assets'

const BreastLift = () => {
  return (
    <div className={`w-11/12 h-[500px] bg-black bg-opacity-70 rounded-[9px] mx-auto p-4 flex flex-row justify-between`}>

        <div className={`flex flex-col justify-center items-center w-1/2 p-4`}>
            <h1 className={`text-gold1 font-poppins text-[50px]`}>Vampire Breastlift</h1>
            {/* <h1 className={`text-gold1 font-poppins text-[50px]`}>BreastLift</h1> */}
            {/* <p className={`text-white text-[13px] font-poppins`}>The Vampire Breast Lift® is an exciting new non-surgical technique developed to subtly enhance the breasts. This was first introduced into the UK and Europe by Dr Sherif Wakil and is exclusively offered by his Harley Street Clinic.</p> */}
            {/* <p className={`text-white text-[13px] font-poppins`}>The treatment uses the body’s natural healing and rejuvenation process by harvesting Platelet Rich Plasma (PRP) which is packed with growth factors (cells that are responsible for the body’s ability to repair and rejuvenate itself) from a small sample of your own blood.</p> */}
            <ul className={`text-white text-center mt-12 flex flex-col justify-center`}>
                <li className={`mt-4 flex flex-row`}><i className={`fa-regular fa-bookmark text-[25px] mr-3 flex flex-row justify-left items-center`}></i><p>Get natural-looking results without the need for implants or invasive surgery.</p></li>
                <li className={`mt-4 flex flex-row`}><i className={`fa-regular fa-bookmark text-[25px] mr-3 flex flex-row justify-left items-center`}></i><p>Enhance your cleavage with the Vampire Breastlift, a non-surgical procedure that uses your own blood to stimulate tissue growth.</p></li>
                <li className={`mt-4 flex flex-row`}><i className={`fa-regular fa-bookmark text-[25px] mr-3 flex flex-row justify-left items-center`}></i><p>The procedure takes less than an hour and requires little to no downtime.</p></li>
                <li className={`mt-4 flex flex-row`}><i className={`fa-regular fa-bookmark text-[25px] mr-3 flex flex-row justify-left items-center`}></i><p>Experience a more youthful and lifted appearance in the chest area, with the added benefit of improved skin texture and tone</p></li>

                
            </ul>
            <a className={`text-gold1 hover-underline-animation2 text-[20px] w-[120px] mt-12`}>READ MORE</a>
           
        </div>

        <div className={`flex items-center w-1/2`}>
            {/* <img className={`rounded-[9px] w-full h-full object-cover`} src={boobs5}></img> */}
        </div>
    </div>
  )
}

export default BreastLift