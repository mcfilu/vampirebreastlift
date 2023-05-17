import React from 'react';
import { logo, footer1, footer2, footer3, footer4, twitter } from '../assets';
import { PopupWidget, PopupButton } from 'react-calendly';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 pb-[1vh]">
      <div className="w-full flex flex-row justify-between">
        {/* Logo */}
        <div className="flex flex-col ml-[3vh]">
          <img src={logo} alt="Logo" className="h-40 m-8" />
        </div>
        
        {/* Contact Information */}
        <div className="text-sm flex flex-col">
            <h1 className={`text-[25px] font-bold mb-[3vh] mt-5`}>Contact Us</h1>
          <p className="mb-2"><a className={`hover:text-gold1 flex items-center`} href='mailto:info@vampirebreastlift.co.uk'><i className="fas fa-envelope mr-4 text-gold1 text-[25px]"></i>Info@vampirebreastlift.co.uk</a></p>
          <p className="mb-2"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 7467 5340"><i className="fas fa-phone mr-4 text-gold1 text-[25px]"></i>+44 (0)20 7467 5340</a></p>
          <p className="mb-2 h-[40px] w-[150px] bg-gold1 flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
        url="https://calendly.com/nikekarta2/30min"


        rootElement={document.getElementById("root")}
        text="Book Consultation"
        textColor="#ffffff"
        color="#ffffff"
      /></p>
        </div>

        {/* Find us */}
        <div className="text-sm flex flex-col">
            <h1 className={`text-[25px] font-bold mb-[3vh] mt-5`}>Find Us</h1>
            <div className={`flex flex-row`}>
                <div className={`flex items-center`}>
                    <i className="fas fa-map-marker-alt text-gold1 text-[30px] mr-2"></i>
                </div>
                <div>
                    <p className="mb-2">Dr SW Clinics  </p>
                    <p className="mb-2">77 Harley Street</p>
                    <p className="mb-2">London W1G 8QN</p>
                </div>
            </div>
            
          
        </div>

        {/* Social Media Links */}
        <div className="text-sm flex flex-col">
            <h1 className={`text-[25px] font-bold mb-[3vh] mt-5`}>Follow Us</h1>
          <p className="mb-2"><a href="#" className={`hover:text-gold1 flex items-center`}><i className={`fab fa-facebook mr-4 text-gold1 text-[25px]`}></i>Facebook</a></p>
          <p className="mb-2"><a href="#" className={`hover:text-gold1 flex items-center`}><i className="fab fa-twitter mr-4 text-gold1 text-[25px]"></i>Twitter</a></p>
          <p className="mb-2"><a href="#" className={`hover:text-gold1 flex items-center`}><i className="fab fa-instagram mr-5 text-gold1 text-[25px]"></i>Instagram</a></p>
        </div>
        
        {/* Other Useful Information */}
        <div className="text-sm flex flex-col mr-[3vh]">
            <h1 className={`text-[25px] font-bold mb-[3vh] mt-5 text-center`}>Accredited</h1>
            <div className={`flex flex-row`}>
                <img src={footer1} alt="Logo" className="h-20 m-2 ml-0" />
                <img src={footer2 } alt="Logo" className="h-20 m-2" />
                <img src={footer3} alt="Logo" className="h-20 m-2" />
                <img src={footer4 } alt="Logo" className="h-20 m-2" />
            </div>
         
        </div>
      </div>
      <hr className={`mt-[2vh]`}></hr>
      <h1 className={`text-center mt-[2vh]`}>Treatment Provided By Dr SW Clinics | All Right Reserved ®</h1>

    </footer>
    
  );
};

export default Footer;
