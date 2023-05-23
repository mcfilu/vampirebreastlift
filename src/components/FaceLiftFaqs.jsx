import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const FaceLiftFaqs = () => {
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
            <div className={`bg-black bg-opacity-70 p-[3vh] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <h1 className={`text-gold1 font-poppins text-center text-[4vh] mb-[3vh]`}>Frequently Asked Questions</h1>
                <hr className={`mt-[1vh] mb-[1.2vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFirst(!openFirst)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFirst ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFirst ? 'text-gold1' : 'text-white'} font-poppins text-[2.2vh]`}>How does the Vampire FaceLift work?</h1>
                    </div>
                    <div className={`flex flex-col ${openFirst ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins`}>
                            A small amount of blood is taken from you and then treated in a centrifuge to harvest the platelet rich plasma or PRP. This plasma is rich in growth factors, which are the cells responsible for repair in our bodies. The plasma is then re-injected into the face where it will stimulate collagen production providing the effect of plumping and lifting the skin and improving skin texture and tone, as well as improving the appearance of lines and wrinkles.
                        </p>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins mt-[1vh]`}>
                            Dr Wakil has developed a technique he calls ‘the sandwich technique’ whereby he injects deep into the skin to stimulate the fibroblasts, the cells responsible for producing collagen, as well as superficially to rejuvenate the outer layer of the skin.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSecond ? 'text-gold1' : 'text-white'} font-poppins text-[2.2vh]`}>Am i suitable for this treatment?</h1>
                    </div>
                    <div className={`flex flex-col ${openSecond ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins`}>
                            The Vampire FaceLift™ can be used to address a wide variety of facial ageing and skin concerns which makes it a diverse treatment option for anyone who wants a natural way to rejuvenate their skin and turn back the clock.
                        </p>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins mt-[1vh]`}>
                            It is suitable for both men and women of any age (over 18) and skin type.
                        </p>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins mt-[1vh]`}>
                            As with all treatments you will need a consultation with Dr Wakil to assess if this is the right procedure for you. Certain conditions such as platelet dysfunction syndrome, sepsis and chronic liver pathology may make you unsuitable for treatment. If you are pregnant or breast feeding you will also not be suitable for treatment.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openThird ? 'text-gold1' : 'text-white'} font-poppins text-[2.2vh]`}>Does it hurt?</h1>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins`}>
                        The treatment does involve injections so it can be a little uncomfortable but local anaesthetic is used to minimise any discomfort and most patients find the treatment very tolerable with many experiencing no pain at all.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFourth ? 'text-gold1' : 'text-white'} font-poppins text-[2.2vh]`}>How long does it take?</h1>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins`}>
                        The treatment takes approximately 40 minutes.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFifth ? 'text-gold1' : 'text-white'} font-poppins text-[2.2vh]`}>Is there any downtime/recovery time?</h1>
                    </div>
                    <div className={`flex ${openFifth ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins`}>
                        One of the main advantages of this treatment is the fact there is no down time or recovery time involved, unlike with surgical breast enhancement procedures. You can even return to work/normal activities straight away. There is a small chance of developing some minimal bruising at the injection sites, but this will only last a couple of days.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSixth ? 'text-gold1' : 'text-white'} font-poppins text-[2.2vh]`}>What kind of results can I expect?</h1>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[1.55vh] text-justify font-poppins`}>
                        The Vampire FaceLift™ can give outstanding, natural looking results. Patients say their skin looks healthier, brighter, and more hydrated and has a more youthful glow. The skin will also appear firmer and lines and wrinkles will be visibly improved. Texture and tone will also be improved, and volume can be restored resulting in a lifting effect. Results will typically last 12-24 months, depending on lifestyle and your skincare regime.</p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
            </div>
        </section>
  )
}

export default FaceLiftFaqs