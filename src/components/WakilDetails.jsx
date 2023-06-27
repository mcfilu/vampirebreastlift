import React from 'react'
import { augmentation_vid, sherif_blood } from '../assets'

const WakilDetails = () => {
  return (
    <div className={`flex w-full flex-row  md:p-[2vh] md:pl-0`}>
        <div className={`hidden md:flex w-[40%] flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <video src={augmentation_vid} autoPlay loop muted className={`object-cover h-[100%]`}></video>
        </div>
        <div className={`hidden md:flex w-[60%] h-[100%] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[5vh] text-center text-gold1 `}>World Renown Specialist</p>
                <p className={`text-white text-center text-[2.1vh] mt-[4vh]`}>He is a registered doctor with the General Medical Council (GMC), a Fellow of the International College of Surgeons, a Member of the American Cosmetic Cellular Medicine Association, the British College of Aesthetic Medicine (BCAM) and the British Association of Body Sculpting (BABS), as well as President and Founder of the International Association of Aesthetic Gynaecology and Sexual Wellbeing (IAAGSW).</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}>Dr SW Clinics offer safe and effective aesthetic medical, gynaecological, pain management, life optimising and regenerative treatments, performed by fully trained and experienced staff, under the leadership of Dr Wakil.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}>He is a pioneer in many treatments and techniques, often being the first to introduce them to the United Kingdom. Of significance is his introduction of The O Concept™ for treating male and female sexual dysfunction. He was also the first practitioner in the UK to introduce the soft surgery approach, including the non-surgical blepharoplasty, as well as Platelet Rich Plasma (PRP) therapies such as the Vampire Facelift™ and the Vampire Breast Lift™. He is also known for his signature treatments, which include the Dr SW Face-Lift and the Organic Face-Lift.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}>Dr Wakil is at the forefront of the field of sexual aesthetics and aesthetic gynaecology, being one of the first to start offering a broad range of aesthetic treatment solutions to treat both male and female sexual dysfunction, restoring sexual well-being and genital health through his original, bespoke, combination treatment programme – The O Concept™.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}>His thirst for increased knowledge in his field and his drive for perfection, means that Dr Wakil continues to pioneer more treatments at Dr SW Clinics, constantly educating himself by attending congresses and further learning opportunities around the globe.</p>
                {/* <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}></p> */}
            </div>
            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2.1vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2.1vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`md:hidden flex flex-col w-full `}>
            <p className={`flex text-gold text-[5vh] text-center text-gold1 `}>World Renown Specialist</p>
            <video src={augmentation_vid} autoPlay loop muted className={`object-cover h-[100%]`}></video>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-center text-[2.1vh] mt-[4vh]`}>He is a registered doctor with the General Medical Council (GMC), a Fellow of the International College of Surgeons, a Member of the American Cosmetic Cellular Medicine Association, the British College of Aesthetic Medicine (BCAM) and the British Association of Body Sculpting (BABS), as well as President and Founder of the International Association of Aesthetic Gynaecology and Sexual Wellbeing (IAAGSW).</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}>Dr SW Clinics offer safe and effective aesthetic medical, gynaecological, pain management, life optimising and regenerative treatments, performed by fully trained and experienced staff, under the leadership of Dr Wakil.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}>He is a pioneer in many treatments and techniques, often being the first to introduce them to the United Kingdom. Of significance is his introduction of The O Concept™ for treating male and female sexual dysfunction. He was also the first practitioner in the UK to introduce the soft surgery approach, including the non-surgical blepharoplasty, as well as Platelet Rich Plasma (PRP) therapies such as the Vampire Facelift™ and the Vampire Breast Lift™. He is also known for his signature treatments, which include the Dr SW Face-Lift and the Organic Face-Lift.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}>Dr Wakil is at the forefront of the field of sexual aesthetics and aesthetic gynaecology, being one of the first to start offering a broad range of aesthetic treatment solutions to treat both male and female sexual dysfunction, restoring sexual well-being and genital health through his original, bespoke, combination treatment programme – The O Concept™.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}>His thirst for increased knowledge in his field and his drive for perfection, means that Dr Wakil continues to pioneer more treatments at Dr SW Clinics, constantly educating himself by attending congresses and further learning opportunities around the globe.</p>
                {/* <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}></p> */}
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default WakilDetails