import React from 'react';
import { logo, footer1, footer2, footer3, footer4, twitter, logo_no_border, bcam} from '../assets';
import { PopupWidget, PopupButton } from 'react-calendly';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 pb-[1vh] border-gold1 border-t-4">
      <div className="w-full flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <div className="flex flex-col ml-[3vh] items-center justify-center">
          <img src={logo_no_border} alt="Logo" className={`h-[12vh] flex `} />
        </div>
        
        {/* Contact Information */}
        <div className="text-[0.9vw] flex flex-col mx-auto ">
            <h1 className={`text-[4vh] text-gold1 md:text-[2vh] text-center md:text-left font-bold mb-[3vh] mt-[1.5vh]`}>Contact Us</h1>
          <p className="mb-[0.9vh] text-[2vh] md:text-[1.3vw]"><a className={`hover:text-gold1 flex items-center`} href='mailto:info@vampirebreastlift.co.uk'><i className="fas fa-envelope mr-[0.9vw] text-gold1 text-[3vh] md:text-[1.3vw]"></i>Info@vampirebreastlift.co.uk</a></p>
          <p className="mb-[0.9vh] text-[2vh] md:text-[1.3vw]"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-[0.9vw] text-gold1 text-[3vh] md:text-[1.3vw]"></i>+44 (0)20 7467 5340</a></p>
          <button className={`bg-white text-gold1 text-[3vh] md:text-[1.8vw]`}>Book Now</button>
        </div>

        {/* Find us */}
        <div className="text-[0.9vw] flex flex-col">
            <h1 className={`text-[4vh] text-gold1 md:text-[2vh] text-center md:text-left font-bold mb-[3vh] mt-[1.5vh]`}>Find Us</h1>
            <div className={`flex flex-row mx-auto `}>
                <div className={`flex items-center`}>
                    <i className="fas fa-map-marker-alt text-gold1 text-[5vh] md:text-[1.8vw] mr-[0.6vw]"></i>
                </div>
                <div className={`text-[2vh] md:text-[1.3vw]`}>
                    <p className="mb-[0.9vh]">Dr SW Clinics  </p>
                    <p className="mb-[0.9vh]">77 Harley Street</p>
                    <p className="mb-[0.9vh]">London W1G 8QN</p>
                </div>
            </div>
            
          
        </div>

        {/* Social Media Links */}
        <div className="text-[0.9vw] flex flex-col">
            <h1 className={`text-[4vh] md:text-[2vh] text-gold1 text-center md:text-left font-bold mb-[3vh] mt-[1.5vh]`}>Follow Us</h1>
          <div className={`flex flex-row md:flex-col mx-auto text-[2vh] md:text-[1.3vw]`}>
            <p className="mb-[0.9vh] mr-[1.5vh] md:mr-[0px]"><a href="#" className={`hover:text-gold1 flex items-center`}><i className={`fab fa-facebook mr-[0.9vw] text-gold1 text-[3vh] md:text-[1.3vw]`}></i>Facebook</a></p>
            <p className="mb-[0.9vh]  mr-[1.5vh] md:mr-[0px]"><a href="#" className={`hover:text-gold1 flex items-center`}><i className="fab fa-twitter mr-[0.9vw] text-gold1 text-[3vh] md:text-[1.3vw]"></i>Twitter</a></p>
            <p className="mb-[0.9vh]  mr-[1.5vh] md:mr-[0px]"><a href="#" className={`hover:text-gold1 flex items-center`}><i className="fab fa-instagram mr-[1.1vw] text-gold1 text-[3vh] md:text-[1.3vw]"></i>Instagram</a></p>
          </div>
          
        </div>
        
        {/* Other Useful Information */}
        <div className="text-[0.7vw] flex flex-col md:mr-[3vh]">
            <h1 className={`text-[4vh] md:text-[2vh] text-gold1 text-center md:text-left font-bold mb-[3vh] mt-[1.5vh] text-center`}>Accredited</h1>
            <div className={`grid grid-cols-2 md:grid-cols-4`}>
                <img src={footer1} alt="Logo" className="h-[8vh] m-[0.9vh] ml-0" />
                <img src={footer2 } alt="Logo" className="h-[8vh] m-[0.9vh]" />
                <img src={bcam} alt="Logo" className="h-[8vh] m-[0.9vh]" />
                <img src={footer4 } alt="Logo" className="h-[8vh] m-[0.9vh]" />
            </div>
         
        </div>
      </div>
      {/* <hr className={`mt-[2vh]`}></hr> */}
      <h1 className={`text-center text-[1.5vh] mt-[1.5vh]`}>Treatment Provided By Dr SW Clinics | All Right Reserved ®</h1>

    </footer>
    
  );
};

export default Footer;
