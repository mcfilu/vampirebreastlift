import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const BreastliftFaqs = () => {
    const [openFirst, setFirst] = useState(false);
    const [openSecond, setSecond] = useState(false);
    const [openThird, setThird] = useState(false);
    const [openFourth, setFourth] = useState(false);
    const [openFifth, setFifth] = useState(false);
    const [openSixth, setSixth] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={`ml-[4%] mr-[4%]`}>
            <div className={`bg-black bg-opacity-70 p-8 rounded-[9px]`}>
                <h1 className={`text-gold1 font-poppins text-center text-[35px]`}>Frequently Asked Questions</h1>
                <hr className={`mt-4 mb-4 w-[70%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[22%]`} onClick={() => {setFirst(!openFirst)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFirst ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[35px]`}></i>
                        <h1 className={`${openFirst ? 'text-gold1' : 'text-white'} font-poppins text-[30px]`}>How does the Vampire BreastLift work?</h1>
                    </div>
                    <div className={`flex ${openFirst ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[20px] font-poppins`}>
                        The Vampire Breast Lift™ harnesses your body’s own natural powers of rejuvenation. A small amount of blood is taken from you and then centrifuged in order to harvest the growth factor-rich platelets found in the plasma. A small needle is then used to inject the PRP (Platelet Rich Plasma) into specific areas of the breast in order to stimulate change.
                        </p>
                    </div>
                </div>
                <hr className={`mt-4 mb-4 w-[70%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[22%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[35px]`}></i>
                        <h1 className={`${openSecond ? 'text-gold1' : 'text-white'} font-poppins text-[30px]`}>Am i suitable for this treatment?</h1>
                    </div>
                    <div className={`flex ${openSecond ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[20px] font-poppins`}>
                        The Vampire Breast Lift™ is ideal for women who do not want to have the recovery time associated with traditional surgical procedures such as breast lifts or breast implants or who want a more subtle, natural enhancement of the breasts. It can be used to address loss of volume and sagging in the breasts due to ageing, weight loss or breast feeding, to improve skin texture on the chest and to target creased skin on the cleavage. It can also be used to correct inverted nipples.
                        </p>
                    </div>
                </div>
                <hr className={`mt-4 mb-4 w-[70%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[22%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[35px]`}></i>
                        <h1 className={`${openThird ? 'text-gold1' : 'text-white'} font-poppins text-[30px]`}>Does it hurt?</h1>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[20px] font-poppins`}>
                        The treatment does involve injections so it can be a little uncomfortable but local anaesthetic is used to minimise any discomfort and most patients find the treatment very tolerable with many experiencing no pain at all.
                        </p>
                    </div>
                </div>
                <hr className={`mt-4 mb-4 w-[70%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[22%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[35px]`}></i>
                        <h1 className={`${openFourth ? 'text-gold1' : 'text-white'} font-poppins text-[30px]`}>How long does it take?</h1>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[20px] font-poppins`}>
                        The treatment takes approximately 40 minutes.
                        </p>
                    </div>
                </div>
                <hr className={`mt-4 mb-4 w-[70%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[22%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[35px]`}></i>
                        <h1 className={`${openFifth ? 'text-gold1' : 'text-white'} font-poppins text-[30px]`}>Is there any downtime/recovery time?</h1>
                    </div>
                    <div className={`flex ${openFifth ? '' : 'hidden'} w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[20px] font-poppins`}>
                        One of the main advantages of this treatment is the fact there is no down time or recovery time involved, unlike with surgical breast enhancement procedures. You can even return to work/normal activities straight away. There is a small chance of developing some minimal bruising at the injection sites, but this will only last a couple of days.
                        </p>
                    </div>
                </div>
                <hr className={`mt-4 mb-4 w-[70%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[22%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[35px]`}></i>
                        <h1 className={`${openSixth ? 'text-gold1' : 'text-white'} font-poppins text-[30px]`}>What kind of results can I expect?</h1>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col w-[35vw] mt-6 mb-8 ml-[5%]`}>
                        <p className={`text-white text-[20px] font-poppins`}>
                        The Vampire Breast Lift™ aims to lift the breasts and give a fuller looking cleavage as well as enhancing the skin on the chest area to achieve a more youthful appearance. Patients report:
                        </p>
                        <ul className={`text-white text-[20px] font-poppins mt-6 mb-8 mb-6`}>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Firmer, more shapely breasts</li>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>A lifted and rounder cleavage</li>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Restore sensitivity lost through breastfeeding or previous implants</li>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Perkier nipples</li>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Increased nipple sensitivity</li>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Smoother skin</li>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Fill implant “rippling”</li>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Lift inverted nipples</li>
                        </ul>
                        <p className={`text-white text-[20px] font-poppins`}>Like other Vampire Procedures, the Vampire Breast Lift™ injections will last about 12-24 months, depending on individual patients.</p>
                    </div>
                </div>
                <hr className={`mt-4 mb-4 w-[70%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default BreastliftFaqs