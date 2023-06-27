import React from 'react'
import { sherif, clinic2, clinic3, alberto } from '../assets'

const Alberto = () => {
  return (
    <div className={`flex w-full flex-row xl:max-h-[80vh]  md:pr-[0px] md:p-[2vh] `}>
        
        <div className={`hidden md:flex w-[60%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[6vh] text-center text-gold1 `}>Prof Alberto Di Giuseppe</p>
                <p className={`text-white text-center text-[2.1vh] mt-[6vh]`}>Meet Prof. Alberto Di Giuseppe, a highly esteemed Plastic and Aesthetic Surgeon renowned internationally for his exceptional expertise. With a distinguished career spanning Italy and England, he specializes in a range of top-level procedures including VASER Liposculpture, Liposuction, Breast Augmentation and Reduction, Brazilian Buttocks, and innovative techniques such as HI DEF for precise and perfect abdominal and pectoral sculpting.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>With 25 years of invaluable experience at the reconstructive plastic surgery clinic of the University of Ancona, Prof. Di Giuseppe holds specializations in Plastic and Aesthetic Surgery and Maxillofacial Surgery from the University of Parma. He imparts his vast knowledge as a respected teacher at the plastic surgery schools of the University of Padua, University of Oradea in Romania, and Lipoplasty University of Austin in Texas, USA. Additionally, he serves as a lecturer at the ECAM European School of Aesthetic Surgery, conducting courses on liposculpture and body contouring cosmetic surgery.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>As a prolific author, Prof. Di Giuseppe has co-authored and authored seven books on reconstructive and aesthetic plastic surgery published by the esteemed Springer publishing house. His contributions to the international scientific literature encompass over 200 articles. He is a sought-after guest and course coordinator at major global congresses, particularly renowned for his expertise in ultrasound liposculpture.</p>
            </div>
            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`hidden md:flex w-[40%] flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <img className={`flex w-full h-full object-cover `} src={alberto}></img>
        </div>

        <div className={`md:hidden flex flex-col items-center `}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 `}>Prof Alverto Di Giuseppe</p>
            <img className={`w-full h-full object-cover `} src={alberto}></img>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
            <p className={`text-white text-center text-[2.1vh] mt-[6vh]`}>Meet Prof. Alberto Di Giuseppe, a highly esteemed Plastic and Aesthetic Surgeon renowned internationally for his exceptional expertise. With a distinguished career spanning Italy and England, he specializes in a range of top-level procedures including VASER Liposculpture, Liposuction, Breast Augmentation and Reduction, Brazilian Buttocks, and innovative techniques such as HI DEF for precise and perfect abdominal and pectoral sculpting.</p>
            <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>With 25 years of invaluable experience at the reconstructive plastic surgery clinic of the University of Ancona, Prof. Di Giuseppe holds specializations in Plastic and Aesthetic Surgery and Maxillofacial Surgery from the University of Parma. He imparts his vast knowledge as a respected teacher at the plastic surgery schools of the University of Padua, University of Oradea in Romania, and Lipoplasty University of Austin in Texas, USA. Additionally, he serves as a lecturer at the ECAM European School of Aesthetic Surgery, conducting courses on liposculpture and body contouring cosmetic surgery.</p>
            <p className={`text-white text-center text-[2.1vh] mt-[3vh]`}>As a prolific author, Prof. Di Giuseppe has co-authored and authored seven books on reconstructive and aesthetic plastic surgery published by the esteemed Springer publishing house. His contributions to the international scientific literature encompass over 200 articles. He is a sought-after guest and course coordinator at major global congresses, particularly renowned for his expertise in ultrasound liposculpture.</p>
            
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default Alberto