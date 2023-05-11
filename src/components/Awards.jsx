import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { award1, award2, award3, award4, award5 } from '../assets';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className={`pl-2 pr-2`} src={award1} onDragStart={handleDragStart} role="presentation" />,
  <img className={`pl-2 pr-2`} src={award2} onDragStart={handleDragStart} role="presentation" />,
  <img className={`pl-2 pr-2`} src={award3} onDragStart={handleDragStart} role="presentation" />,
  <img className={`pl-2 pr-2`} src={award4} onDragStart={handleDragStart} role="presentation" />,
  <img className={`pl-2 pr-2`} src={award5} onDragStart={handleDragStart} role="presentation" />,
];

const Awards = () => {
  return (
    <div className={`flex flex-row bg-black w-4/5 mr-[4%] mx-auto rounded-[9px] p-8 bg-opacity-70`}>
        
        <div className={`w-2/3 flex items-center`}>
            <AliceCarousel mouseTracking 
                items={items} 
                responsive={{
                    0: {
                        items: 1,
                    },
                    1024: {
                        items: 5,
                        itemsFit: 'contain',
                    }
                }} 
                disableButtonsControls={true} 
                disableDotsControls={true} 
                infinite={true} 
                autoPlay={true} 
                autoPlayInterval={1200}
                animationDuration={1000}
                // swipeDelta={100}
                // paddingLeft={20}
            />
        </div>
        <div className={`w-1/3 flex flex-col justify-left pl-8`}>
            <h1 className={`text-gold1 text-[30px] font-poppins text-right`}>An awarding winning clinic</h1>
            <p className={`text-white text-[15px] font-poppins mt-12 text-right`}>This renowned clinic has gained a reputation for excellence, with numerous prestigious awards acknowledging its outstanding medical care and patient satisfaction.</p>
        </div>
    </div>
  )
}

export default Awards