import React, {useState} from "react";
import { icon1, icon2, icon3 } from "../assets";
import { PopupButton } from "react-calendly";

function TreatmentSummary() {
    const [hov, setHove] = useState(false);
  return (
    
    
        <div onMouseEnter={() => setHove(true)} onMouseLeave={() => {setHove(false)}} className={`relative md:ml-[13vw] bg-black bg-opacity-100 p-[3vh] md:my-[5vh] flex flex-col md:w-[60%] h-auto min-h-[68vh]  md:pr-[14vh] bg-opacity-100 shadow-[0px_0px_50px_10px_#744210] ease-in-out duration-500`}>
            <div className={` w-[100%] mx-auto h-[100%]`}>
                <h1 className={`text-gold1 text-[5vh] font-poppins text-center`}>Treatment Summary at a glance</h1>
                <div className={`flex flex-col md:flex-row justify-between px-[3vh] my-[5vh]`}>
                    <div className="inner-item flex flex-col items-center text-white">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon1} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light">Procedure Time</p>
                        {/* <span className="text-[2vh] font-light">Approx 40mins</span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh]">Approx 40 mins</h4>
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-[0px]">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon2} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light">Recommended No. of Treatments</p>
                        {/* <span className="text-[2vh] font-light"></span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh]">1</h4>
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-[0px]">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon3} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light">Anaesthetic</p>
                        {/* <span className="text-[2vh] font-light"></span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh]">Local (numbing cream)</h4>
                        
                    </div>
                </div>
                <div>
                    <hr className={`mt-[1.5vh] mb-[1.5vh]`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium text-gold1 w-[30%]">Side Effects:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">Minor bruising at injection sites.</p>
                    </div>

                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1">Results:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">
                        Non-surgical breast lift, fuller-looking cleavage, improved skin and enhance sensitivity, each patient respons dependently
                        </p>
                    </div>

                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1">Duration of results:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">
                        12-24 months, dependent on breast size.
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1">Back to work:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">
                            Immediately back to normal
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1">Full Recovery:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">
                        1-3 days for resolution of any bruising.
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                </div>
                
            </div>
            <div onMouseEnter={() => setHove(true)}  className={`md:absolute bg-gold1 bg-opacity-100  ease-in-out duration-500 ${hov ? 'bg-opacity-100' : 'bg-opacity-100'} top-[22%] -right-[17.5vw] md:w-[24vw]   p-[2vh] mt-[5vh] md:mt-[0px] bg-opacity-100 shadow-[0px_0px_50px_20px_#744210] ease-in-out duration-500`}>
                    <h1 className={`font-poppins text-black text-[4vh] mt-[2vh] font-medium`}>Treatment Cost</h1>
                    <p className={`font-poppins text-black text-[1.7vh] mt-[2vh]`}>Price from:</p>
                    <h1 className={`font-poppins text-black font-bold text-[5.5vh] `}>£ 1500</h1>
                    <p className={`text-[1.6vh] text-black `}>* After consultation the doctor will confirm the cost.</p>
                    <button className={`bg-black text-gold1 text-[4vh] md:text-[2.5vh] mt-[4vh] p-[1vh]`}>Book Now</button>
                </div>

        </div>
    
    
        
    )
}
export default TreatmentSummary