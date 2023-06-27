import React from 'react'
import { PopupButton } from 'react-calendly';

const ContactMap = () => {
  const s_height = window.screen.height;

  return (
    <div className={`md:h-[70vh] w-full flex flex-row items-center justify-center md:justify-between mb-[3vh]`}>
      <div className={`hidden md:flex flex w-1/2 h-full`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6401818347645!2d-0.14981368422955985!3d51.51981697963721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad3e4ac69b5%3A0x8943ef774b03be2a!2sDr%20SW%20Plastic%20Surgery%20London!5e0!3m2!1spl!2suk!4v1677458135437!5m2!1spl!2suk" className={`h-full w-full`} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
       
        <div className={`hidden md:flex relative  w-[50%] flex flex-col  `}>
            <div className={`h-full flex flex-col justify-center items-center `}>
              <h1 className={`text-gold1 text-[6vh] font-poppins pb-[1vh]`}>Contact Us</h1>
              <div className={`flex flex-col `}>
                <div className={`mt-[2vh]`}>
                  <p className="text-white font-poppins text-[2vh] mb-8"><a className={`hover:text-gold1 flex items-center`} href='mailto:info@vampirebreastlift.co.uk'><i className="fas fa-envelope mr-4 text-gold1 text-[30px]"></i>Info@vampirebreastlift.co.uk</a></p>
                  <p className="mb-[0.4vh] text-white font-poppins text-[2vh] mt-[2vh]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-4 text-gold1 text-[30px]"></i>+44 (0)20 7467 5340</a></p>
                  <p className="mb-[0.4vh] text-white font-poppins text-[2vh] mt-[2vh]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-4 text-gold1 text-[30px]"></i>+44 (0)20 3006 8459</a></p>
                  
                </div>
                <div className={`flex flex-row mt-[2vh]`}>                
                  <div className={`flex items-center`}>
                      <i className="fas fa-map-marker-alt text-gold1 text-[6vh] mr-6"></i>
                  </div>
                  <div>
                      <p className="mb-[0.3vh] text-white text-[3vh] font-poppins">Dr SW Clinics  </p>
                      <p className="mb-[0.4vh] text-white text-[2vh] font-poppins">77 Harley Street</p>
                      <p className="mb-[0.4vh] text-white text-[2vh] font-poppins">W1G 8QN</p>
                      <p className="mb-[0.4vh] text-white text-[2vh] font-poppins">London</p>
                  </div>
                </div>
                <button className={`bg-gold1 text-white  text-[3vh] p-[1vh] mt-[5vh]`}>Book Consultation</button>
                
            </div>
            </div>
            
        </div>

        <div className={`md:hidden flex flex-col w-full items-center justify-center`}>
          <div className={`h-full w-full flex flex-col justify-center items-center `}>
                <h1 className={`text-gold1 text-[6vh] font-poppins pb-[1vh]`}>Contact Us</h1>
                <div className={`flex flex-col `}>
                  <div className={`mt-[2vh]`}>
                    <p className="text-white font-poppins text-[2vh] mb-8"><a className={`hover:text-gold1 flex items-center`} href='mailto:info@vampirebreastlift.co.uk'><i className="fas fa-envelope mr-4 text-gold1 text-[30px]"></i>Info@vampirebreastlift.co.uk</a></p>
                    <p className="mb-[0.4vh] text-white font-poppins text-[2vh] mt-[2vh]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-4 text-gold1 text-[30px]"></i>+44 (0)20 7467 5340</a></p>
                    <p className="mb-[0.4vh] text-white font-poppins text-[2vh] mt-[2vh]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-4 text-gold1 text-[30px]"></i>+44 (0)20 3006 8459</a></p>
                    
                  </div>

                  <div className={`flex flex-row mt-[2vh]`}>                
                    <div className={`flex items-center`}>
                        <i className="fas fa-map-marker-alt text-gold1 text-[6vh] mr-6"></i>
                    </div>

                    <div className={`flex flex-col items-center justify-center`}>
                        <p className="mb-[0.3vh] text-white text-[3vh] font-poppins">Dr SW Clinics  </p>
                        <p className="mb-[0.4vh] text-white text-[2vh] font-poppins">77 Harley Street</p>
                        <p className="mb-[0.4vh] text-white text-[2vh] font-poppins">W1G 8QN</p>
                        <p className="mb-[0.4vh] text-white text-[2vh] font-poppins">London</p>
                    </div>
                  </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6401818347645!2d-0.14981368422955985!3d51.51981697963721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad3e4ac69b5%3A0x8943ef774b03be2a!2sDr%20SW%20Plastic%20Surgery%20London!5e0!3m2!1spl!2suk!4v1677458135437!5m2!1spl!2suk" className={`h-[30vh] w-[100vw] mt-[2vh]`} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <button className={`bg-gold1 text-white  text-[3vh] p-[1vh] mt-[2vh]`}>Book Consultation</button>
            </div>
        </div>
    </div>
  )
}

export default ContactMap