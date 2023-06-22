import React, { useState } from 'react'
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
    const [hov, setHove] = useState(false);
  return (
    <div className={`flex flex-row  w-[93%] mr-[4%] h-[28vh] mx-auto  p-[2vh] `}>
        
        <div className={`w-2/3 flex items-center justify-center`}>
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
        <div className={`w-1/3 flex flex-col justify-center items-center pl-[3vh]`}>
            <h1 className={`text-gold1 text-[4vh] font-poppins text-justify`}>An award winning clinic</h1>
            <p className={`text-black text-[2.1vh] font-poppins mt-[3vh] text-justify`}>This renowned clinic has gained a reputation for excellence, with numerous prestigious awards acknowledging its outstanding medical care and patient satisfaction.</p>
        </div>
    </div>
  )
}

export default Awards