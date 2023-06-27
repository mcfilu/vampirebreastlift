import React from 'react'

function FooterBook() {
  return (
    <div className={`w-full bg-black h-[6vh] flex flex-row items-center justify-between`}>
        <div className={`flex flex-1 flex-row justify-center `}>
            <p className={`text-white text-[2.5vh]`}>We offer 0% finance on all our treatments, please call the clinic to find out more</p>
            <p href="tel:5005355343" className={`text-gold1 ml-[1vh] text-[2.5vh]`}>+44 (0)20 3006 8459</p>
        </div>
        {/* sjfksdkf */}
        <button className={`bg-gold1 text-[3vh] h-full px-[1vw]`}>Book Consultation</button>
    </div>
  )
}

export default FooterBook