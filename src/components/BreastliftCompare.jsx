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
            <h1 className={`text-white font-poppins text-center text-[5vh] mb-[1vh]`}>Treatment Effects</h1>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h1 className={`text-[3.5vh] text-white`}>Before</h1>
                <h1 className={`text-[3.5vh] text-white`}>After</h1>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-[50vw] h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs1Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs1After} srcSet={boobs1After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`mr-[3vh] `} src={boobs1Before}></img>
                    <div className={`h-full w-[0.2vh] bg-black`}></div>
                    <img className={`ml-[3vh] `} src={boobs1After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-[50vw] h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs2Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs2After} srcSet={boobs2After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`mr-[3vh] `} src={boobs2Before}></img>
                    <div className={`h-full w-[0.2vh] bg-black`}></div>
                    <img className={`ml-[3vh] `} src={boobs2After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-[50vw] h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs3Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs3After} srcSet={boobs3After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`mr-[3vh] `} src={boobs3Before}></img>
                    <div className={`h-full w-[0.2vh] bg-black`}></div>
                    <img className={`ml-[3vh] `} src={boobs3After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-[50vw] h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs4Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs4After} srcSet={boobs4After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`mr-[3vh] `} src={boobs4Before}></img>
                    <div className={`h-full w-[0.2vh] bg-black`}></div>
                    <img className={`ml-[3vh] `} src={boobs4After}></img>
                </div>
            </div>
            <button onClick={() => handleImages()} className={`flex mx-auto px-[2vh] py-[1vh] bg-white text-gold1 text-[2vh]   mt-[1vh]`}>Load More</button>
        </div>
    </div>
    
  )
}

export default BreastliftCompare