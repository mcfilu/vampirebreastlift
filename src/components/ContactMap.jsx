import React from 'react'
import { PopupButton } from 'react-calendly';

const ContactMap = () => {
  const s_height = window.screen.height;

  return (
    <div className={`h-[70vh] w-full flex flex-row justify-between mb-[3vh]`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6401818347645!2d-0.14981368422955985!3d51.51981697963721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad3e4ac69b5%3A0x8943ef774b03be2a!2sDr%20SW%20Plastic%20Surgery%20London!5e0!3m2!1spl!2suk!4v1677458135437!5m2!1spl!2suk" className={`h-full w-[40%] rounded-[9px] ml-[4%]`} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className={`relative bg-black bg-opacity-70 w-[50%] flex flex-col rounded-[9px]  mr-[4%]`}>
            <div className={`h-full flex flex-col justify-center items-center `}>
              <h1 className={`text-gold1 text-[6vh] font-poppins pb-[1vh]`}>Contact Us</h1>
              <div className={`flex flex-col `}>
                <div className={`mt-[2vh]`}>
                  <p className="text-white font-poppins text-[20px] mb-8"><a className={`hover:text-gold1 flex items-center`} href='mailto:info@vampirebreastlift.co.uk'><i className="fas fa-envelope mr-4 text-gold1 text-[30px]"></i>Info@vampirebreastlift.co.uk</a></p>
                  <p className="mb-2 text-white font-poppins text-[20px] mt-[2vh]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-4 text-gold1 text-[30px]"></i>+44 (0)20 7467 5340</a></p>
                  <p className="mb-2 text-white font-poppins text-[20px] mt-[2vh]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-4 text-gold1 text-[30px]"></i>+44 (0)20 3006 8459</a></p>
                  
                </div>
                <div className={`flex flex-row mt-[2vh]`}>                
                  <div className={`flex items-center`}>
                      <i className="fas fa-map-marker-alt text-gold1 text-[6vh] mr-6"></i>
                  </div>
                  <div>
                      <p className="mb-2 text-white text-[20px] font-poppins">Dr SW Clinics  </p>
                      <p className="mb-2 text-white text-[20px] font-poppins">77 Harley Street</p>
                      <p className="mb-2 text-white text-[20px] font-poppins">W1G 8QN</p>
                      <p className="mb-2 text-white text-[20px] font-poppins">London</p>
                  </div>
                </div>
                
            </div>
            </div>
            <p className="absolute -bottom-10 left-1/2  transform -translate-x-1/2  h-[80px] w-[250px] bg-gold1 flex items-center justify-center hover:text-gold1 hover:bg-white text-[25px]"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
              />
            </p>
        </div>
    </div>
  )
}

export default ContactMap