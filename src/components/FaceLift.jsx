import React, { useState } from 'react'
import { face } from '../assets'
import '@fortawesome/fontawesome-free/css/all.min.css';

const FaceLift = () => {
  const [hov, setHove] = useState(false);
  return (
    <div onMouseEnter={() => setHove(true)} onMouseLeave={() => {setHove(false)}} className={`w-11/12 h-[65vh] bg-black bg-opacity-70 rounded-[9px] mx-auto p-[1vh] flex flex-row justify-between hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>

        <div className={`flex items-center w-1/2 overflow-hidden rounded-[9px]`}>
            <img className={`w-full h-full object-cover ${hov ? 'scale-125' : ''} ease-in-out duration-500`} src={face}></img>
        </div>
        <div className={`flex flex-col justify-center items-center w-1/2 p-[1vh] `}>
            <h1 className={`text-gold1 font-poppins text-[6vh]`}>Vampire Facelift ™</h1>
            {/* <h1 className={`text-gold1 font-poppins text-[6vh] mb-16`}>FaceLift</h1> */}
            
            <ul className={`text-white text-center mt-[3vh] flex flex-col justify-center`}>
                {/* <li>The Vampire Facelift is a non-surgical procedure that uses your own blood to rejuvenate your skin and enhance your facial features.</li>
                <li>Get immediate results with no downtime, as the procedure takes less than an hour and requires only a few tiny injections.</li>
                <li>The treatment helps reduce the appearance of fine lines, wrinkles, and other signs of aging, resulting in a more youthful and radiant complexion.</li>
                <li>Experience the benefits of natural collagen production and improved skin texture and tone, without the need for invasive surgery or harsh chemicals.</li> */}
                <li className={`mt-[2vh] flex flex-row text-[2vh] text-left`}><i className={`fa-regular fa-bookmark text-[3vh] mr-[1.4vh] flex flex-row justify-left items-center text-gold1`}></i><p>Non-surgical, own blood procedure, natural results.</p></li>
                <li className={`mt-[2vh] flex flex-row text-[2vh] text-left`}><i className={`fa-regular fa-bookmark text-[3vh] mr-[1.4vh] flex flex-row justify-left items-center text-gold1`}></i><p>Immediate improvement, no downtime, stimulates collagen production.</p></li>
                <li className={`mt-[2vh] flex flex-row text-[2vh] text-left`}><i className={`fa-regular fa-bookmark text-[3vh] mr-[1.4vh] flex flex-row justify-left items-center text-gold1`}></i><p>Reduces fine lines, wrinkles, enhances facial features, firms skin.</p></li>
                <li className={`mt-[2vh] flex flex-row text-[2vh] text-left`}><i className={`fa-regular fa-bookmark text-[3vh] mr-[1.4vh] flex flex-row justify-left items-center text-gold1`}></i><p>Safe, effective treatment, performed by well experienced Dr Wakil.</p></li>
                
            </ul>
            <a className={`text-gold1 hover-underline-animation2 text-[2vh] pl-[2vh] pr-[2vh] mt-[3vh] `}>READ MORE</a>
        </div>
        
    </div>
  )
}

export default FaceLift