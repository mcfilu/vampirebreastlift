import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { boobs1Before, boobs1After, boobs2Before, boobs2After, boobs3Before, boobs3After, boobs4Before, boobs4After, } from '../assets';

const BreastliftCompare = () => {
  return (
    <div className={`bg-black bg-opacity-70 p-12 rounded-[9px] ml-[4%] mr-[4%]`}>
        <div className={`w-full `}>
            <div className={`flex flex-row justify-between`}>
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs1Before} alt="Image one"/>}
                    itemTwo={<ReactCompareSliderImage src={boobs1After} srcSet={boobs1After} alt="Image two" />}
                />
                <div className={`w-1/12`}></div>
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={boobs2Before} srcSet={boobs2Before} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={boobs2After} srcSet={boobs2After} alt="Image two" />}
                />
            </div>
            <div className={`flex flex-row justify-between mt-[3vh]`}>
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs3Before} alt="Image one"/>}
                    itemTwo={<ReactCompareSliderImage src={boobs1After} srcSet={boobs3After} alt="Image two" />}
                />
                <div className={`w-1/12`}></div>
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={boobs2Before} srcSet={boobs4Before} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={boobs2After} srcSet={boobs4After} alt="Image two" />}
                />
            </div>
            <button className={`flex mx-auto p-5 bg-gold1 text-white text-[35px] rounded-full bg-opacity-60 mt-[3vh]`}>Load More</button>
        </div>
    </div>
    
  )
}

export default BreastliftCompare