import React from 'react'

const BookForm = () => {
  return (
    <div className={`flex flex-row w-full  mt-[10vh] ]`}>
        <div className={`flex flex-col items-center  w-1/2 border-r-2 border-gold1`}>
            <h1 className={`text-gold1 font-poppins mt-8 text-[6vh] text-center`}>Request a Callback</h1>
            <h1 className={`text-white font-poppins mt-8 text-[2.5vh] text-center w-9/12 `}>Give us your Name and Phone Number and we will call you back!</h1>
            <div className={`mt-[5vh] flex items-center justify-center`}>
                <label for="name"  className={`text-gold1 text-[4vh] mr-[1vw]`}>Name:</label>
                <input id="name" type="text" className={`h-[5vh] border-gold1 border-2 bg-black text-white`} placeholder="Your name" ></input>
            </div>
            
            <div className={`flex items-center justify-center`}>
                <label for="phone" className={`text-gold1 text-[4vh] mr-[1vw]`} >Phone:</label>
                <input id="phone" type="phone" className={`h-[5vh] border-gold1 border-2 bg-black text-white`} placeholder="Your Phone Number"></input>
            </div>
            
            <button className={`bg-black border-2 border-gold1 text-gold1 text-[3vh] px-[1vh] mt-[5vh] hover:bg-white`}>Submit</button>
                
        </div>
        <div className={`flex flex-col w-1/2 items-center `}>
        <h1 className={`text-gold1 font-poppins mt-8 text-[6vh] text-center`}>Contact Clinic</h1>
        <h1 className={`text-white font-poppins mt-8 text-[2.5vh] text-center w-9/12 `}>Directly contact Dr.SW Clinics to schedule a consultation or obtain any information you may need.</h1>

        <p className="text-white font-poppins text-[2.5vh] mt-[5vh]"><a className={`hover:text-gold1 flex items-center`} href='mailto:info@vampirebreastlift.co.uk'><i className="fas fa-envelope mr-4 text-gold1 text-[5vh]"></i>Info@vampirebreastlift.co.uk</a></p>
         <p className="text-white font-poppins text-[2.5vh] mt-[4vh]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-4 text-gold1 text-[5vh]"></i>+44 (0)20 7467 5340</a></p>
            
        </div >
    </div>
  )
}

export default BookForm