import React, { useState } from 'react'
import { independent, thesun, media4, tatler, sky } from '../assets'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className="pl-2 pr-2 h-[9vh] object-contain mx-auto" src={independent} onDragStart={handleDragStart} role="presentation" />,
  <img className="pl-2 pr-2 h-[9vh]object-contain mx-auto" src={sky} onDragStart={handleDragStart} role="presentation" />,
  <img className="pl-2 pr-2 h-[9vh] object-contain mx-auto" src={thesun} onDragStart={handleDragStart} role="presentation" />,
//   <div className={`flex items-center justify-center h-[9vh]`}><p className={`flex items-center justify-center text-white`}>ajdfklsdf</p></div>
  <img className="pl-2 pr-2 h-[9vh] object-contain mx-auto" src={tatler} onDragStart={handleDragStart} role="presentation" />
];

const Media = () => {
  const [hov, setHove] = useState(false);
  return (
    <div className="flex flex-col md:flex-row  w-full md:h-[28vh]  p-[2vh] md:pr-[0px] ">
      <div className="flex flex-col md:w-1/3 justify-center md:pr-[2vh]">
        <h1 className="text-gold1 text-[4vh] text-start md:text-left font-poppins mt-[2vh]">You may have seen us in</h1>
        <p className="text-white text-start md:text-justify text-[2.1vh] font-poppins mt-[3vh]">Dr Sherif Wakil is regularly interviewed by the mainstream press as an expert in the subject of sexual health and well-being.</p>
      </div>
      <div className="md:w-2/3 flex items-center justify-center mt-[3vh] md:mt-[0px]">
        <AliceCarousel mouseTracking 
          items={items} 
          responsive={{
            0: { items: 3 },
            1000: { items: 4 }
          }}
          disableButtonsControls={true} 
          disableDotsControls={true} 
          infinite={true} 
          autoPlay={true} 
          autoPlayInterval={1200}
          animationDuration={1000}
          autoHeight={false}
        />
      </div>
    </div>
  )
}

export default Media;
