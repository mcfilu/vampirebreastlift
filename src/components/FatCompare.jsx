import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { fat1_after, fat1_before, fat3_after, fat3_before, implant_fat1_after, implant_fat1_before, implant_fat3_after,implant_fat3_before } from '../assets';

const FatCompare = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const handleImages = () => {
        if (vis3 == false & vis4 == false){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
        }
    }
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h1 className={`text-gold1 font-header text-center text-[5vh] mb-[1vh]`}>Treatment Effects</h1>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h1 className={`text-[3.5vh] text-white font-main`}>Before</h1>
                <h1 className={`text-[3.5vh] text-white font-main`}>After</h1>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={fat1_before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={fat1_after} srcSet={fat1_after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={fat1_before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={fat1_after}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={implant_fat1_before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={implant_fat1_after} srcSet={implant_fat1_after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={implant_fat1_before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={implant_fat1_after}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={fat3_before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={fat3_after} srcSet={fat3_after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={fat3_before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={fat3_after}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={implant_fat3_before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={implant_fat3_after} srcSet={implant_fat3_after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={implant_fat3_before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={implant_fat3_after}></img>
                </div>
            </div>
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-2 border-gold1 text-gold1 text-[2.5vh]   mt-[1vh]`}>Load More</button>
        </div>
    </div>
    
  )
}

export default FatCompare