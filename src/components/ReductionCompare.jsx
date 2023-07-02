import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { reduction1_after, reduction1_before, reduction2_after, reduction2_before, reduction3_after, reduction3_before, reduction4_after, reduction4_before } from '../assets';

const ReductionCompare = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const [buttonVis, setButton] = useState(true);
    const handleImages = () => {
        if (vis3 == false & vis4 == false){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
            setButton(false);
        }
    }
  return (
    // <div className={`bg-black bg-opacity-70 py-[2vh] w-3/4 rounded-[9px] ml-[4%] mr-[4%] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500 `}>
    //     <div className={`w-full flex flex-col justify-center items-center `}>
    //         <h1 className={`text-gold1 font-poppins text-center text-[4vh] mb-[1vh]`}>Treatment Effects</h1>
    //         <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
    //             <h1 className={`text-[3vh] text-gold1`}>Before</h1>
    //             <h1 className={`text-[3vh] text-gold1`}>After</h1>
    //         </div>
    //         <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-[50vw] h-[25vh] my-[1vh]`}>
    //             <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
    //                 <div className={`flex w-full h-full justify-center`}>
    //                     <ReactCompareSlider
    //                         itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={reduction1_before} alt="Image one"/>}
    //                         itemTwo={<ReactCompareSliderImage src={reduction1_after} srcSet={reduction1_after} alt="Image two" />}
    //                     />
    //                 </div>
                    
    //             </div>
    //             <div className={`flex w-full h-full justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
    //                 <img className={`mr-[3vh] rounded-[9px]`} src={reduction1_before}></img>
    //                 <div className={`h-full w-[0.2vh] bg-gold1`}></div>
    //                 <img className={`ml-[3vh] rounded-[9px]`} src={reduction1_after}></img>
    //             </div>
    //         </div>
    //         <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-[50vw] h-[25vh] my-[1vh]`}>
    //             <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
    //                 <div className={`flex w-full h-full justify-center`}>
    //                     <ReactCompareSlider
    //                         itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={reduction2_before} alt="Image one"/>}
    //                         itemTwo={<ReactCompareSliderImage src={reduction2_after} srcSet={reduction2_after} alt="Image two" />}
    //                     />
    //                 </div>
                    
    //             </div>
    //             <div className={`flex w-full h-full justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
    //                 <img className={`mr-[3vh] rounded-[9px]`} src={reduction2_before}></img>
    //                 <div className={`h-full w-[0.2vh] bg-gold1`}></div>
    //                 <img className={`ml-[3vh] rounded-[9px]`} src={reduction2_after}></img>
    //             </div>
    //         </div>
    //         <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-[50vw] h-[25vh] my-[1vh]`}>
    //             <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
    //                 <div className={`flex w-full h-full justify-center`}>
    //                     <ReactCompareSlider
    //                         itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={reduction3_before} alt="Image one"/>}
    //                         itemTwo={<ReactCompareSliderImage src={reduction3_after} srcSet={reduction3_after} alt="Image two" />}
    //                     />
    //                 </div>
                    
    //             </div>
    //             <div className={`flex w-full h-full justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
    //                 <img className={`mr-[3vh] rounded-[9px]`} src={reduction3_before}></img>
    //                 <div className={`h-full w-[0.2vh] bg-gold1`}></div>
    //                 <img className={`ml-[3vh] rounded-[9px]`} src={reduction3_after}></img>
    //             </div>
    //         </div>
    //         <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-[50vw] h-[25vh] my-[1vh]`}>
    //             <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
    //                 <div className={`flex w-full h-full justify-center`}>
    //                     <ReactCompareSlider
    //                         itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={reduction4_before} alt="Image one"/>}
    //                         itemTwo={<ReactCompareSliderImage src={reduction4_after} srcSet={reduction4_after} alt="Image two" />}
    //                     />
    //                 </div>
                    
    //             </div>
    //             <div className={`flex w-full h-full justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
    //                 <img className={`mr-[3vh] rounded-[9px]`} src={reduction4_before}></img>
    //                 <div className={`h-full w-[0.2vh] bg-gold1`}></div>
    //                 <img className={`ml-[3vh] rounded-[9px]`} src={reduction4_after}></img>
    //             </div>
    //         </div>
    //         <button onClick={() => handleImages()} className={`flex mx-auto px-[2vh] py-[1vh] bg-gold1 text-white text-[2vh] rounded-full bg-opacity-60 mt-[1vh]`}>Load More</button>
    //     </div>
    // </div>
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
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={reduction1_before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={reduction1_after} srcSet={reduction1_after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={reduction1_before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={reduction1_after}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={reduction2_before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={reduction2_after} srcSet={reduction2_after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={reduction2_before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={reduction2_after}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={reduction3_before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={reduction3_after} srcSet={reduction3_after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={reduction3_before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={reduction3_after}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={reduction4_before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={reduction4_after} srcSet={reduction4_after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={reduction4_before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={reduction4_after}></img>
                </div>
            </div>
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-2 border-gold1 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh]`}>Load More</button>
        </div>
    </div>
    
  )
}

export default ReductionCompare