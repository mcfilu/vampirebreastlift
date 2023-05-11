import React from 'react'
import { independent, thesun, media4, tatler, sky } from '../assets'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className={`flex justify-center items-center`}><img className={`pl-2 pr-2`} src={independent} onDragStart={handleDragStart} role="presentation" /></div>,
  <img className={`pl-2 pr-2`} src={sky} onDragStart={handleDragStart} role="presentation" />,
  <img className={`pl-2 pr-2`} src={thesun} onDragStart={handleDragStart} role="presentation" />,
  <img className={`pl-2 pr-2`} src={tatler} onDragStart={handleDragStart} role="presentation" />
];

const Media = () => {
  return (
    <div className={`flex flex-row bg-black bg-opacity-70 w-4/5 ml-[4%] rounded-[9px] p-8`}>
        <div className={`w-1/3 pr-8`}>
            <h1 className={`text-gold1 text-[30px] font-poppins`}>You may have seen us in</h1>
            <p className={`text-white text-[15px] font-poppins mt-12`}>Dr Sherif Wakil is regularly interviewed by the mainstream press as an expert in the subject of sexual health and well-being.</p>
        </div>
        <div className={`w-2/3 flex items-center`}>
            <AliceCarousel mouseTracking 
                items={items} 
                responsive={{
                    0: {
                        items: 1,
                    },
                    200: {
                        items: 4,
                        itemsFit: 'contain',
                    }
                }} 
                disableButtonsControls={true} 
                disableDotsControls={true} 
                infinite={true} 
                autoPlay={true} 
                autoPlayInterval={1200}
                animationDuration={1000}
            />
        </div>
    </div>
  )
}

export default Media