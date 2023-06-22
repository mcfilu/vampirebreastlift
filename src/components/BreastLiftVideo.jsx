import React from 'react'

const BreastLiftVideo = () => {
  return (
    <div className={`bg-black flex flex-col items-center justify-center w-full p-[4vh] py-[2vh] flex-row   h-[62vh] `}>
        
        <div className={`flex flex-row justify-between w-full h-full mt-[2vh]`}>
            <div className={`flex flex-col justify-center items-center w-[35%] h-full `}>
              <p className={`text-gold1 text-[4.5vh] text-center`}>Vampire Breastlift Explained</p>
                <p className={`text-white text-center text-[2.5vh] mt-[10vh]`}>We warmly invite you to watch a clear and simple explanation of the treatment, presented by the esteemed Dr. Sherif Wakil.</p>
            </div>
            <div className={`flex items-left justify-center w-[63%] h-full  overflow-hidden`}> 
                
                    <iframe width="80%" height="100%" src="https://www.youtube.com/embed/EbBj4Hitfyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
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