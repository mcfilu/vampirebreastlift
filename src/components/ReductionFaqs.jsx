import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const ReductionFaqs = () => {
    const [openFirst, setFirst] = useState(true);
    const [openSecond, setSecond] = useState(false);
    const [openThird, setThird] = useState(false);
    const [openFourth, setFourth] = useState(false);
    const [openFifth, setFifth] = useState(false);
    const [openSixth, setSixth] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={`ml-[4%] mr-[4%] w-[75%]`}>
            <div className={`bg-black bg-opacity-70 p-[2vh] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <h1 className={`text-gold1 font-poppins text-center text-[4vh] mb-[1vh]`}>Frequently Asked Questions</h1>
                <hr className={`mt-[1vh] mb-[1.2vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFirst(!openFirst)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFirst ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFirst ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>How does the Breast Reduction work?</h1>
                    </div>
                    <div className={`flex flex-col ${openFirst ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        Breast reduction is a surgical procedure which is used to reduce the size and shape of large, heavy breasts that are causing physical and emotional discomfort. The surgery can be approached in several different ways, depending on the requirements for your surgery and what will work best for your breast shape. This will be discussed with our surgeon during the consultation.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        In all cases, excess skin, breast tissue, and fat are removed to reduce the size and weight of the breast. The area is sculpted and sutured closed to create a new, smaller shape, and your nipple is repositioned. The procedure will leave a scar around the darker nipple area or areola, alongside other scars from vertical incisions and incisions underneath the breast. This scarring will fade over time.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSecond ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>Am i suitable for this treatment?</h1>
                    </div>
                    <div className={`flex flex-col ${openSecond ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        Your suitability for breast reduction will be assessed by our surgeon who will decide if you are the correct candidate for the procedure. A full medical history will also be taken to make sure that there are no contraindications for you to have the procedure, such as any medication that you may be taking, underlying health conditions, your wound healing history, or past breast surgeries.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Pregnant and breast-feeding women are not suitable for surgical procedures.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Breast reduction surgery may also lead to an inability to breast feed in future. If this is important to you, please discuss it with our surgeon who can endeavour to preserve vital tissue required for breast feeding.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openThird ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>Does it hurt?</h1>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        The breast reduction surgery will be performed using general anaesthesia so you will not feel the procedure.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFourth ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>How long does it take?</h1>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        The operation can take 1-3 hours to perform.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFifth ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>Is there any downtime/recovery time?</h1>
                    </div>
                    <div className={`flex flex-col ${openFifth ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        After the surgery, and once the anaesthesia has worn off, your chest will feel tender and tight. Some people do experience mild side effects because of the anaesthesia so you will be monitored before you are discharged from our care.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        You will need to wear a support bra or post-surgical garment 24/7 in the 3-4 weeks following your surgery to aid healing and support the breast tissue as your incisions heal. After that you should always wear a sports bra during the day but can remove it to sleep.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        You should try to walk around as much as you can during the first week after surgery as improving your circulation will aid healing. Initially movement may hurt and cause a pulling sensation over your chest. Over time, and as you heal, your breasts will become softer and feel more natural; it is a gradual process due to the extent of disruption to the tissue, with different people taking different amounts of time to recover.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Depending on the timing of your surgery, you may leave to go home the same day or be required to stay overnight. This will be discussed during your consultation.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Pain, swelling, bruising, and tightness are common for the first few days and weeks post-surgery. Any pain and discomfort post-surgery can be managed with over-the-counter pain medication or medicines prescribed by our surgeon.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Many patients take up to 2 weeks off work before returning to most normal activities and their job, depending on the type of work. You should avoid strenuous exercise or heavy lifting for at least a month. It is advised to avoid driving for 4-6 weeks too, partly due to the medical implications and discomfort from wearing a seat belt, but also because it may invalidate your vehicle insurance.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSixth ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>What kind of results can I expect?</h1>
                    </div>
                    <div className={`flex flex-col ${openSixth ? '' : 'hidden'} flex-col w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        The full results of breast reduction surgery can be life changing. Woman often feel more confident with a sense of freedom, unencumbered by their previously heavy breasts. Physical movement and posture improve over time, there is relief from back and shoulder pain, as well as skin irritation and shoulder dips. You will be able to attempt more sports and types of exercise, and often the freedom to do more improves social, work, and family life.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        The results from breast reduction surgery are permanent but can be affected in future by ageing or weight gain, hence, it is important to maintain a healthy lifestyle.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default ReductionFaqs