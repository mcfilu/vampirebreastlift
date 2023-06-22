import React from 'react'

const BreastLiftVideo = () => {
  return (
    <div className={`bg- flex flex-col items-center justify-center w-full p-[4vh] py-[2vh] pl-[0px] flex-row   h-[62vh] `}>
        
        <div className={`flex flex-row justify-between w-full h-full mt-[2vh]`}>
        <div className={`flex items-center justify-start w-[55%] h-full  overflow-hidden`}> 
                
                {/* <iframe width="90%" height="100%" src="https://www.youtube.com/embed/EbBj4Hitfyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <iframe width="90%" height="100%" src="https://www.youtube.com/embed/WsHXew0UZUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
            <div className={`flex flex-col justify-center items-center w-[45%] h-full `}>
              <p className={`text-gold1 text-[4.5vh] text-center`}>Vampire Breastlift Explained</p>
                <p className={`text-white text-center text-[2.5vh] mt-[10vh]`}>We warmly invite you to watch a detailed video where Dr. Sherif Wakil, a highly respected expert in the field, carefully explains every part of the treatment process. In this video, Dr. Wakil breaks down the procedure into simple steps, using easy-to-understand language that makes the complex treatment procedure more accessible to everyone. This is an excellent opportunity to learn more about the procedure from an acknowledged authority in the field.</p>
            </div>
            
        </div>
       
        {/* <div className={`flex items-center justify-center bg-black bg-opacity-50 rounded-[9px] h-full w-[45%] p-[2vh]`}>
            <p className={`text-[3vh] text-center text-gold1`}>We warmly invite you to watch a detailed video where Dr. Sherif Wakil, a highly respected expert in the field, carefully explains every part of the treatment process</p>
        </div>
        <div className={`flex items-center justify-center h-full w-[50%] ml-[4vh]`}> */}
            
        {/* </div> */}
    </div>
  )
}

export default BreastLiftVideo