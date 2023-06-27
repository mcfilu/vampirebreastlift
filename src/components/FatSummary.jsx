import React, {useState} from "react";
import { icon1, icon2, icon3 } from "../assets";
import { PopupButton } from "react-calendly";

function FatSummary() {
    const [hov, setHove] = useState(false);
  return (
    
    
    //     <div onMouseEnter={() => setHove(true)} onMouseLeave={() => {setHove(false)}} className={`relative ml-[13vw] bg-black bg-opacity-70 p-[3vh] flex flex-col w-[55%] h-auto min-h-[68vh]  rounded-[9px] pr-[14vh] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
    //         <div className={` w-[100%] mx-auto h-[100%]`}>
    //             <h1 className={`text-gold1 text-[3.8vh] font-poppins text-center`}>Treatment Summary at a glance</h1>
    //             <div className={`flex flex-row justify-between px-[3vh] my-[5vh]`}>
    //                 <div className="inner-item flex flex-col items-center text-white">
    //                     <div className="icon mb-2">
    //                     <img className={`h-[9vh]`} src={icon1} alt="" />
    //                     </div>
    //                     <p className="text-[1.3vh] font-light">Procedure Time</p>
    //                     {/* <span className="text-[1.7vh] font-light">Approx 40mins</span> */}
    //                     <h4 className="text-[1.7vh] font-medium">Up to 4 hours</h4>
                        
    //                 </div>

    //                 <div className="inner-item flex flex-col items-center text-white">
    //                     <div className="icon mb-2">
    //                     <img className={`h-[9vh]`} src={icon2} alt="" />
    //                     </div>
    //                     <p className="text-[1.3vh] font-light">Recommended No. of Treatments</p>
    //                     {/* <span className="text-[1.7vh] font-light"></span> */}
    //                     <h4 className="text-[1.7vh] font-medium">One-Two</h4>
                        
    //                 </div>

    //                 <div className="inner-item flex flex-col items-center text-white">
    //                     <div className="icon mb-2">
    //                     <img className={`h-[9vh]`} src={icon3} alt="" />
    //                     </div>
    //                     <p className="text-[1.3vh] font-light">Anaesthetic</p>
    //                     {/* <span className="text-[1.7vh] font-light"></span> */}
    //                     <h4 className="text-[1.7vh] font-medium">General</h4>
                        
    //                 </div>
    //             </div>
    //             <div>
    //                 <hr className={`mt-[1.5vh] mb-[1.5vh]`}></hr>
    //                 <div className={`flex flex-row`}>
    //                     <span className="text-[1.7vh] font-medium text-gold1 w-[30%]">Side Effects:</span>
    //                     <p className="text-[1.7vh] font-light text-white">Pain, swelling, bruising and tightness to the chest.</p>
    //                 </div>

    //                 <hr className={`mt-[2vh] mb-4`}></hr>
    //                 <div className={`flex flex-row`}>
    //                     <span className="text-[1.7vh] font-medium w-[30%] text-gold1">Results:</span>
    //                     <p className="text-[1.7vh] font-light text-white w-[70%]">
    //                     Increase in size and shape of the breast.
    //                     </p>
    //                 </div>

    //                 <hr className={`mt-[2vh] mb-4`}></hr>
    //                 <div className={`flex flex-row`}>
    //                     <span className="text-[1.7vh] font-medium w-[30%] text-gold1">Duration of results:</span>
    //                     <p className="text-[1.7vh] font-light text-white">
    //                     Permanent
    //                     </p>
    //                 </div>
    //                 <hr className={`mt-[2vh] mb-4`}></hr>
    //                 <div className={`flex flex-row`}>
    //                     <span className="text-[1.7vh] font-medium w-[30%] text-gold1">Back to work:</span>
    //                     <p className="text-[1.7vh] font-light text-white">
    //                     After 1-4 weeks
    //                     </p>
    //                 </div>
    //                 <hr className={`mt-[2vh] mb-4`}></hr>
    //                 <div className={`flex flex-row`}>
    //                     <span className="text-[1.7vh] font-medium w-[30%] text-gold1">Full Recovery:</span>
    //                     <p className="text-[1.7vh] font-light text-white">
    //                     1-2 months
    //                     </p>
    //                 </div>
    //                 <hr className={`mt-[2vh] mb-4`}></hr>
    //             </div>
                
    //         </div>
    //         <div onMouseEnter={() => setHove(true)}  className={`absolute bg-gold1  ease-in-out duration-500 ${hov ? 'bg-opacity-100' : 'bg-opacity-90'} top-[22%] -right-[14.5vw] w-[19vw] h-[38vh] rounded-[9px] p-[2vh] `}>
    //                 <h1 className={`font-poppins text-[3.5vh] mt-[2vh] font-medium`}>Treatment Cost</h1>
    //                 <p className={`font-poppins text-[1.3vh] mt-[2vh]`}>Price from:</p>
    //                 <h1 className={`font-poppins font-bold text-[5vh] `}>£ TBA</h1>
    //                 <p className={`text-[1.5vh]`}>* After consultation the doctor will confirm the cost.</p>
    //                 <p className="mt-[4vh] h-[5vh] w-[8vw] bg-black text-white text-[1.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
    //     url="https://calendly.com/nikekarta2/30min"


    //     rootElement={document.getElementById("root")}
    //     text="Book Consultation"
    //     textColor="#ffffff"
    //     color="#ffffff"
    //   /></p>
    //             </div>

    //     </div>
    <div onMouseEnter={() => setHove(true)} onMouseLeave={() => {setHove(false)}} className={`relative md:ml-[13vw] bg-black bg-opacity-100 p-[3vh] md:my-[5vh] flex flex-col md:w-[60%] h-auto min-h-[68vh]  md:pr-[14vh] hover:bg-opacity-100 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
            <div className={` w-[100%] mx-auto h-[100%]`}>
                <h1 className={`text-gold1 text-[5vh] font-poppins text-center`}>Treatment Summary at a glance</h1>
                <div className={`flex flex-col md:flex-row justify-between px-[3vh] my-[5vh]`}>
                    <div className="inner-item flex flex-col items-center text-white">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon1} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light">Procedure Time</p>
                        {/* <span className="text-[2vh] font-light">Approx 40mins</span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh]">Up to 4 hours</h4>
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-[0px]">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon2} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light">Recommended No. of Treatments</p>
                        {/* <span className="text-[2vh] font-light"></span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh]">One-Two</h4>
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-[0px]">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon3} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light">Anaesthetic</p>
                        {/* <span className="text-[2vh] font-light"></span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh]">General</h4>
                        
                    </div>
                </div>
                <div>
                    <hr className={`mt-[1.5vh] mb-[1.5vh]`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium text-gold1 w-[30%]">Side Effects:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">Pain, swelling, bruising and tightness to the chest.</p>
                    </div>

                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1">Results:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">
                        Increase in size and shape of the breast.
                        </p>
                    </div>

                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1">Duration of results:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">
                        Permanent
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1">Back to work:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">
                        After 1-4 weeks
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1">Full Recovery:</span>
                        <p className="text-[2vh] font-light text-white w-[70%]">
                        1-2 months
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                </div>
                
            </div>
            <div onMouseEnter={() => setHove(true)}  className={`md:absolute bg-gold1 md:bg-white bg-opacity-100  ease-in-out duration-500 ${hov ? 'bg-opacity-100' : 'bg-opacity-100'} top-[22%] -right-[17.5vw] md:w-[24vw]   p-[2vh] mt-[5vh] md:mt-[0px]`}>
                    <h1 className={`font-poppins text-[4vh] mt-[2vh] font-medium`}>Treatment Cost</h1>
                    <p className={`font-poppins text-[1.7vh] mt-[2vh]`}>Price from:</p>
                    <h1 className={`font-poppins font-bold text-[5.5vh] `}>£ TBA</h1>
                    <p className={`text-[1.6vh]`}>* After consultation the doctor will confirm the cost.</p>
                    <button className={`bg-black text-gold1 text-[4vh] md:text-[2.5vh] mt-[4vh] p-[1vh]`}>Book Now</button>
                </div>

        </div>
    
    
        
    )
}
export default FatSummary