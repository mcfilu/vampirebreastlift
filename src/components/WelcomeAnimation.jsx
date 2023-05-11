import React from 'react'
import { useState } from 'react'
import { wow1, wow2, wow3, wow4, logo } from '../assets';
import { explosion } from '../assets';

const WelcomeAnimation = () => {
    const temp=[wow2,wow3,wow4,];
    const [counter,setCounter] = useState(0);
    const [images, setImages] = useState(true);



    setInterval(function(){
    
    counter === 3 ? setCounter(0) : setCounter(counter + 1);
    if (counter === 3){
        setImages(false);
    }
    }, 2000);


  return (
    <div className={`relative w-screen h-screen`}>
        <img  className={`fixed top-[30%] left-[43%] w-[300px]`} src={logo}></img>
        <img className={`${images ? '' : 'hidden'} w-full h-full`} src={temp[counter]}></img>
        <video className={`${images ? 'hidden' : ''} w-full h-full myVideo object-fit`} src={explosion} autoPlay loop muted/>
        
    </div>
  )
}

export default WelcomeAnimation