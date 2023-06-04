import React from 'react';
import { logo, footer1, footer2, footer3, footer4, twitter } from '../assets';
import { PopupWidget, PopupButton } from 'react-calendly';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 pb-[1vh]">
      <div className="w-full flex flex-row justify-between">
        {/* Logo */}
        <div className="flex flex-col ml-[3vh] items-center justify-center">
          <img src={logo} alt="Logo" className={`h-[12vh] flex `} />
        </div>
        
        {/* Contact Information */}
        <div className="text-[0.9vw] flex flex-col">
            <h1 className={`text-[2vh] font-bold mb-[3vh] mt-[1.5vh]`}>Contact Us</h1>
          <p className="mb-[0.9vh]"><a className={`hover:text-gold1 flex items-center`} href='mailto:info@vampirebreastlift.co.uk'><i className="fas fa-envelope mr-[0.9vw] text-gold1 text-[1.3vw]"></i>Info@vampirebreastlift.co.uk</a></p>
          <p className="mb-[0.9vh]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-[0.9vw] text-gold1 text-[1.3vw]"></i>+44 (0)20 7467 5340</a></p>
          <p className="mb-[0.9vh] h-[4vh] w-[10vw] bg-gold1 flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
        url="https://calendly.com/nikekarta2/30min"


        rootElement={document.getElementById("root")}
        text="Book Consultation"
        textColor="#ffffff"
        color="#ffffff"
      /></p>
        </div>

        {/* Find us */}
        <div className="text-[0.9vw] flex flex-col">
            <h1 className={`text-[2vh] font-bold mb-[3vh] mt-[1.5vh]`}>Find Us</h1>
            <div className={`flex flex-row`}>
                <div className={`flex items-center`}>
                    <i className="fas fa-map-marker-alt text-gold1 text-[1.8vw] mr-[0.6vw]"></i>
                </div>
                <div>
                    <p className="mb-[0.9vh]">Dr SW Clinics  </p>
                    <p className="mb-[0.9vh]">77 Harley Street</p>
                    <p className="mb-[0.9vh]">London W1G 8QN</p>
                </div>
            </div>
            
          
        </div>

        {/* Social Media Links */}
        <div className="text-[0.9vw] flex flex-col">
            <h1 className={`text-[2vh] font-bold mb-[3vh] mt-[1.5vh]`}>Follow Us</h1>
          <p className="mb-[0.9vh]"><a href="#" className={`hover:text-gold1 flex items-center`}><i className={`fab fa-facebook mr-[0.9vw] text-gold1 text-[1.3vw]`}></i>Facebook</a></p>
          <p className="mb-[0.9vh]"><a href="#" className={`hover:text-gold1 flex items-center`}><i className="fab fa-twitter mr-[0.9vw] text-gold1 text-[1.3vw]"></i>Twitter</a></p>
          <p className="mb-[0.9vh]"><a href="#" className={`hover:text-gold1 flex items-center`}><i className="fab fa-instagram mr-[1.1vw] text-gold1 text-[1.3vw]"></i>Instagram</a></p>
        </div>
        
        {/* Other Useful Information */}
        <div className="text-[0.7vw] flex flex-col mr-[3vh]">
            <h1 className={`text-[2vh] font-bold mb-[3vh] mt-[1.5vh] text-center`}>Accredited</h1>
            <div className={`flex flex-row`}>
                <img src={footer1} alt="Logo" className="h-[8vh] m-[0.9vh] ml-0" />
                <img src={footer2 } alt="Logo" className="h-[8vh] m-[0.9vh]" />
                <img src={footer3} alt="Logo" className="h-[8vh] m-[0.9vh]" />
                <img src={footer4 } alt="Logo" className="h-[8vh] m-[0.9vh]" />
            </div>
         
        </div>
      </div>
      <hr className={`mt-[2vh]`}></hr>
      <h1 className={`text-center text-[1.5vh] mt-[1.5vh]`}>Treatment Provided By Dr SW Clinics | All Right Reserved ®</h1>

    </footer>
    
  );
};

export default Footer;
