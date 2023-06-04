import React from 'react'
import { BloodCells } from '../assets'

const FaceLiftBasics = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[55vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
    <div className={`flex flex-col w-1/2 p-[3vh] bg-black bg-opacity-70 rounded-[9px] mr-[0.8vw]`}>
        <h1 className={`text-gold1 text-[4.5vh] text-center font-poppins`}>Vampire method basics</h1>
        <p className={`text-white font-poppins text-[1.7vh] text-justify mt-[2.5vh] mb-[1vh]`}>Utilizing the body's innate healing and rejuvenation mechanisms by extracting platelet rich plasma (PRP) laden with growth factors (cells that spearhead the body's repair/rejuvenation process) from a small sample of the client's own blood (hence the term 'Vampire' treatments), the Vampire Facelift can be performed to:

</p>
        <ul className={`text-white text-[1.7vh] font-poppins `}>
            <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Counteract sagging or loss of volume in the face caused by weight loss, environmental factors, or simple aging.</li>
            <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Achieve a fuller, more sculpted facial contour.</li>
            <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Improve the texture of the facial skin.</li>
            <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Target and smooth wrinkles and fine lines.</li>
        </ul>
    </div>
    <div className={`w-1/2 h-[100%] flex items-center`}>
        <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
    </div>
</div>
  )
}

export default FaceLiftBasics