import React from 'react'
import { face } from '../assets'
import '@fortawesome/fontawesome-free/css/all.min.css';

const FaceLift = () => {
  return (
    <div className={`w-11/12 h-[500px] bg-black bg-opacity-70 rounded-[9px] mx-auto p-4 flex flex-row justify-between`}>

        <div className={`flex items-center w-3/5 `}>
            <img className={`rounded-[9px] w-full h-full object-cover`} src={face}></img>
        </div>
        <div className={`flex flex-col justify-center items-center w-2/5 p-4 `}>
            <h1 className={`text-gold1 font-poppins text-[50px]`}>Vampire Facelift ™</h1>
            {/* <h1 className={`text-gold1 font-poppins text-[50px] mb-16`}>FaceLift</h1> */}
            
            <ul className={`text-white text-center mt-12 flex flex-col justify-center`}>
                {/* <li>The Vampire Facelift is a non-surgical procedure that uses your own blood to rejuvenate your skin and enhance your facial features.</li>
                <li>Get immediate results with no downtime, as the procedure takes less than an hour and requires only a few tiny injections.</li>
                <li>The treatment helps reduce the appearance of fine lines, wrinkles, and other signs of aging, resulting in a more youthful and radiant complexion.</li>
                <li>Experience the benefits of natural collagen production and improved skin texture and tone, without the need for invasive surgery or harsh chemicals.</li> */}
                <li className={`mt-4 flex flex-row`}><i className={`fa-regular fa-bookmark text-[25px] mr-3 flex flex-row justify-left items-center`}></i><p>Non-surgical, own blood procedure, natural results.</p></li>
                <li className={`mt-4 flex flex-row`}><i className={`fa-regular fa-bookmark text-[25px] mr-3 flex flex-row justify-left items-center`}></i><p>Immediate improvement, no downtime, stimulates collagen production.</p></li>
                <li className={`mt-4 flex flex-row`}><i className={`fa-regular fa-bookmark text-[25px] mr-3 flex flex-row justify-left items-center`}></i><p>Reduces fine lines, wrinkles, enhances facial features, firms skin.</p></li>
                <li className={`mt-4 flex flex-row`}><i className={`fa-regular fa-bookmark text-[25px] mr-3 flex flex-row justify-left items-center`}></i><p>Safe, effective treatment, performed by well experienced Dr Wakil.</p></li>
                
            </ul>
            <a className={`text-gold1 hover-underline-animation2 text-[20px] w-[120px] mt-12`}>READ MORE</a>
        </div>
        
    </div>
  )
}

export default FaceLift