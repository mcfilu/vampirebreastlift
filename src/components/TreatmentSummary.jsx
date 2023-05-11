import React from "react";
import { icon1, icon2, icon3 } from "../assets";
import { PopupButton } from "react-calendly";

function TreatmentSummary() {
  return (
    <div>
    <section>
        <div className={`relative bg-black bg-opacity-70 p-8 flex flex-col w-3/5 mx-auto rounded-[9px]`}>
            <div className={` w-4/5 mx-auto`}>
                <h1 className={`text-gold1 text-[35px] font-poppins text-center`}>Treatment Summary at a glance</h1>
                <div className={`flex flex-row justify-between mt-12`}>
                    <div className="inner-item flex flex-col items-center text-white">
                        <div className="icon mb-2">
                        <img src={icon1} alt="" />
                        </div>
                        <span className="text-sm font-light">Approx</span>
                        <h4 className="text-base font-medium">40 mins</h4>
                        <p className="text-sm font-light">Procedure Time</p>
                    </div>

                    <div className="inner-item flex flex-col items-center text-white">
                        <div className="icon mb-2">
                        <img src={icon2} alt="" />
                        </div>
                        <span className="text-sm font-light"></span>
                        <h4 className="text-base font-medium">1</h4>
                        <p className="text-sm font-light">Recommended No. of Treatments</p>
                    </div>

                    <div className="inner-item flex flex-col items-center text-white">
                        <div className="icon mb-2">
                        <img src={icon3} alt="" />
                        </div>
                        <span className="text-sm font-light"></span>
                        <h4 className="text-base font-medium">Local (numbing cream)</h4>
                        <p className="text-sm font-light">Anaesthetic</p>
                    </div>
                </div>
                <div>
                    <hr className={`mt-4 mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-sm font-medium text-gold1 w-[30%]">Side Effects:</span>
                        <p className="text-sm font-light text-white">Minor bruising at injection sites.</p>
                    </div>

                    <hr className={`mt-4 mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-sm font-medium w-[30%] text-gold1">Results:</span>
                        <p className="text-sm font-light text-white">
                        Non-surgical breast lift, fuller-looking cleavage, improved skin.
                        </p>
                    </div>

                    <hr className={`mt-4 mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-sm font-medium w-[30%] text-gold1">Duration of results:</span>
                        <p className="text-sm font-light text-white">
                        12-24 months, dependent on breast size.
                        </p>
                    </div>
                    <hr className={`mt-4 mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-sm font-medium w-[30%] text-gold1">Back to work:</span>
                        <p className="text-sm font-light text-white">
                            Immediately back to normal
                        </p>
                    </div>
                    <hr className={`mt-4 mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-sm font-medium w-[30%] text-gold1">Full Recovery:</span>
                        <p className="text-sm font-light text-white">
                        1-3 days for resolution of any bruising.
                        </p>
                    </div>
                    <hr className={`mt-4 mb-4`}></hr>
                </div>
                
            </div>
            <div className={`absolute bg-gold1 top-1/3 -right-56 w-[22vw] h-[45vh] rounded-[9px] p-8`}>
                    <h1 className={`font-poppins text-[30px]`}>Treatment Cost</h1>
                    <p className={`font-poppins text-[12px] mt-4`}>Price from:</p>
                    <h1 className={`font-poppins text-[60px] mt-4`}>£ 1200</h1>
                    <p>* After consultation the doctor will confirm the cost.</p>
                    <p className="mt-4 mb-2 h-[40px] w-[150px] bg-black text-white bg-opacity-60 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
        url="https://calendly.com/nikekarta2/30min"


        rootElement={document.getElementById("root")}
        text="Book Consultation"
        textColor="#ffffff"
        color="#ffffff"
      /></p>
                </div>

        </div>
    </section>
    
        </div>
    )
}
export default TreatmentSummary