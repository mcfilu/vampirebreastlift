import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { boobs1Before, boobs1After, boobs2Before, boobs2After, boobs3Before, boobs3After, boobs4Before, boobs4After, } from '../assets';

const BreastliftCompare = () => {
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
            <h1 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h1>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h1 className={`text-[3.5vh] text-white font-main`}>Before</h1>
                <h1 className={`text-[3.5vh] text-white font-main`}>After</h1>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs1Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs1After} srcSet={boobs1After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs1Before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs1After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs2Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs2After} srcSet={boobs2After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs2Before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs2After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs3Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs3After} srcSet={boobs3After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs3Before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs3After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs4Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs4After} srcSet={boobs4After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs4Before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs4After}></img>
                </div>
            </div>
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]   mt-[1vh] font-main`}>Load More</button>
        </div>
    </div>
    
  )
}

export default BreastliftCompare