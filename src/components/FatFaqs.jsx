import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const FatFaqs = () => {
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
                        <h1 className={`${openFirst ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>How does the Breast Enlargement with Fat work?</h1>
                    </div>
                    <div className={`flex flex-col ${openFirst ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        Fat is first harvested from your donor area(s) using liposuction; these are usually the stomach, hips, thighs, or buttocks as these are the main fat stores in women. The liquid extracted from liposuction includes the fat cells, blood, and tumescent anaesthetic fluid which is used to make it easier to flush out the fat using a cannula. This is filtered, and the fat cells essentially washed to ensure only pure, yellow fat cells are transferred into the breast, ready to establish a new home in another area of the body. The fat is grafted into the breast tissue via injection and can be placed exactly where needed to augment, define, and correct the breast as desired and discussed during your consultation.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        This level of bespoke augmentation, (which can only be attempted with different sizes or shapes of implants in conventional breast augmentation surgery) also allows for the delicate correction of asymmetries and other breast malformations, or reconstruction following trauma such as lumpectomies or mastectomies for breast cancer.
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
                        Your suitability for fat transfer to the breast will be assessed by our surgeon who will decide if you are the correct candidate for the procedure. A full medical history will also be taken to make sure that there are no contraindications for you to have the procedure, such as any medication that you may be taking, your wound healing history, or past breast surgeries.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        In general, most women are suitable for breast enlargement with fat, if they are in good health, and there is adequate fat in the donor areas for harvesting.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Pregnant and breast-feeding women are not suitable for surgical procedures.
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
                        The liposuction and fat transfer for breast enlargement surgery will be performed using general anaesthesia so you will not feel the procedures.
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
                        As the procedure involves two distinct operations – the liposuction and fat transfer to the breast – the whole operation takes a little long. It can take 2-4 hours to perform depending on the extent of each part and the amount of fat being grafted.
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
                        Due to the nature of this procedure, which includes intervention in two areas of the body, you can expect bruising, swelling, pain (tenderness and soreness) in both the donor area where fat was harvested and in the recipient area in the chest where the fat was grafted.  Swelling can last for several weeks. Any pain and discomfort post-surgery can be managed with over-the-counter pain medication or medicines prescribed by our surgeon.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        You will be required to wear post-surgery garments to support both areas to aid healing, reduce swelling, and in the case of your breast to assist with settling and integration of the newly placed fat cells. Swelling in the breast can last up to 6 weeks so can be deceptive in relation to the result. Once swelling has subsided, you will get a better idea of the amount of fat (permanently) remaining and the final size and shape of your new breast. At this point, you and your surgeon can decide if future grafting may be required once completely healed.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        You should expect to take at least 1-2 weeks off work, but some people prefer to take up to a month, especially if large volumes of fat were transferred.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        You will be advised to avoid strenuous exercise, sexual intercourse, or swimming for a minimum of 6 weeks, and driving for 1-2 weeks due to the medical implications, after which you must access your own comfort in performing manoeuvres such as an emergency stop as this may invalidate your vehicle insurance.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Full recovery is expected in 1-2 months.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSixth ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>What kind of results can I expect?</h1>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        The final appearance of the breast can take 4-6 months as the body needs time to remodel the tissue, establish a healthy blood supply to the fat, and for it all to settle into place. It is important to follow aftercare advice (including support clothing and sleeping positions) to optimise the remodelling of your breast and to maintain a healthy diet and lifestyle.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        The results of the procedure are regarded as permanent, due to the transfer of your own fat cells. Thus, it should last a lifetime (unlike breast implants which may require replacement after 10-20 years). However, this permanency cannot be guaranteed as fat cells can grow and shrink so the result is reliant on your body weight, thus the enhancement could fade if you go on to lose a significant amount of weight or perform exercises that have an adverse effect on your chest tissue. Ageing also influences the size and shape of breast tissue. You may therefore decide to have another surgery in future.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default FatFaqs