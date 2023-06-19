import React, {useState} from "react";
import { icon1, icon2, icon3 } from "../assets";
import { PopupButton } from "react-calendly";

function WakilSummary() {
    const [hov, setHove] = useState(false);
  return (
    
    
        <div onMouseEnter={() => setHove(true)} onMouseLeave={() => {setHove(false)}} className={` bg-black bg-opacity-70 p-[3vh] flex flex-col w-[55%] h-auto min-h-[45vh]  rounded-[9px]  hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
            <div className={`flex flex-col w-full h-full`}>
                <h1 className={`text-gold1 text-[3.8vh] font-poppins text-center`}>Dr Wakils Impressive Experience</h1>
                <div className={`flex flex-row justify-between px-[3vh] mt-[8vh]`}>
                    <div className="inner-item flex flex-col items-center text-white">
                        <i class="" className={`text-gold1 fa-solid fa-hourglass text-[6vh]`}></i>
                        <h4 className="text-[3vh] font-medium mt-[2vh]">25</h4>
                        <p className="text-[2vh] font-light">Years of Experience</p>
                        {/* <span className="text-[1.7vh] font-light">Approx 40mins</span> */}
                        
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white">
                        <i class="" className={`text-gold1 fa-solid fa-syringe text-[6vh]`}></i>
                        <h4 className="text-[3vh] font-medium mt-[2vh]">17 000</h4>
                        <p className="text-[2vh] font-light">Performed Procedures</p>
                        {/* <span className="text-[1.7vh] font-light">Approx 40mins</span> */}
                        
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white">
                        <i class="" className={`text-gold1 fa-solid fa-graduation-cap text-[6vh]`}></i>
                        <h4 className="text-[3vh] font-medium mt-[2vh]">800</h4>
                        <p className="text-[2vh] font-light">Tought Students</p>
                        {/* <span className="text-[1.7vh] font-light">Approx 40mins</span> */}
                        
                        
                    </div>
                </div>
                
                
            </div>
            

        </div>
    
    
        
    )
}
export default WakilSummary