import React from 'react'
import { augmentation_vid, } from '../assets'

const WakilDetails = () => {
  return (
    <div className={`flex w-full flex-row  md:p-[2vh] md:pl-0`}>
        <div className={`hidden md:flex w-[40%] flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <video src={augmentation_vid} autoPlay loop muted className={`object-cover h-[100%]`}></video>
        </div>
        <div className={`hidden md:flex w-[60%] h-[100%] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[5vh] text-center text-gold1  font-header`}>World Renown Specialist</p>
                <p className={`text-white text-center text-[2.1vh] mt-[4vh] font-main`}>
Dr. Sherif Wakil is a highly accomplished and respected medical professional, holding registrations with esteemed organizations such as the General Medical Council (GMC) and serving as a Fellow of the International College of Surgeons. He is a distinguished Member of various associations including the American Cosmetic Cellular Medicine Association, the British College of Aesthetic Medicine (BCAM), the British Association of Body Sculpting (BABS), and also serves as the President and Founder of the International Association of Aesthetic Gynaecology and Sexual Wellbeing (IAAGSW).</p>
                {/* <p className={`text-white text-center text-[2.1vh] mt-[2vh] font-main`}>Dr SW Clinics offer safe and effective aesthetic medical, gynaecological, pain management, life optimising and regenerative treatments, performed by fully trained and experienced staff, under the leadership of Dr Wakil.</p> */}
                <p className={`text-white text-center text-[2.1vh] mt-[2vh] font-main`}>Dr. Wakil is an innovator in his field, often introducing groundbreaking treatments and techniques to the United Kingdom. Notably, he pioneered The O Concept™, a transformative approach for addressing male and female sexual dysfunction. He was also the first practitioner in the UK to introduce non-surgical procedures like soft surgery, including non-surgical blepharoplasty, as well as Platelet Rich Plasma (PRP) therapies such as the Vampire Facelift™ and the Vampire Breast Lift™. Additionally, he is renowned for his signature treatments, including the Dr SW Face-Lift and the Organic Face-Lift.

</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh] font-main`}>With a primary focus on sexual aesthetics and aesthetic gynecology, Dr. Wakil stands at the forefront of the field, offering a wide range of customized treatment solutions to address both male and female sexual dysfunction. His pioneering and individualized combination treatment program, known as The O Concept™, has successfully restored sexual well-being and genital health of many.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh] font-main`}>Driven by an insatiable thirst for knowledge and an unwavering pursuit of perfection, Dr. Wakil consistently pioneers new treatments at Dr SW Clinics. He remains dedicated to expanding his expertise through continuous education, actively participating in global congresses and other learning opportunities.</p>
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
            <p className={`flex text-gold text-[5vh] text-center text-gold1 font-header`}>World Renown Specialist</p>
            <video src={augmentation_vid} autoPlay loop muted className={`object-cover h-[100%]`}></video>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-center text-[2.1vh] mt-[4vh] font-main`}>
Dr. Sherif Wakil is a highly accomplished and respected medical professional, holding registrations with esteemed organizations such as the General Medical Council (GMC) and serving as a Fellow of the International College of Surgeons. He is a distinguished Member of various associations including the American Cosmetic Cellular Medicine Association, the British College of Aesthetic Medicine (BCAM), the British Association of Body Sculpting (BABS), and also serves as the President and Founder of the International Association of Aesthetic Gynaecology and Sexual Wellbeing (IAAGSW).</p>
                {/* <p className={`text-white text-center text-[2.1vh] mt-[2vh] font-main`}>Dr SW Clinics offer safe and effective aesthetic medical, gynaecological, pain management, life optimising and regenerative treatments, performed by fully trained and experienced staff, under the leadership of Dr Wakil.</p> */}
                <p className={`text-white text-center text-[2.1vh] mt-[2vh] font-main`}>Dr. Wakil is an innovator in his field, often introducing groundbreaking treatments and techniques to the United Kingdom. Notably, he pioneered The O Concept™, a transformative approach for addressing male and female sexual dysfunction. He was also the first practitioner in the UK to introduce non-surgical procedures like soft surgery, including non-surgical blepharoplasty, as well as Platelet Rich Plasma (PRP) therapies such as the Vampire Facelift™ and the Vampire Breast Lift™. Additionally, he is renowned for his signature treatments, including the Dr SW Face-Lift and the Organic Face-Lift.

</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh] font-main`}>With a primary focus on sexual aesthetics and aesthetic gynecology, Dr. Wakil stands at the forefront of the field, offering a wide range of customized treatment solutions to address both male and female sexual dysfunction. His pioneering and individualized combination treatment program, known as The O Concept™, has successfully restored sexual well-being and genital health of many.</p>
                <p className={`text-white text-center text-[2.1vh] mt-[2vh] font-main`}>Driven by an insatiable thirst for knowledge and an unwavering pursuit of perfection, Dr. Wakil consistently pioneers new treatments at Dr SW Clinics. He remains dedicated to expanding his expertise through continuous education, actively participating in global congresses and other learning opportunities.</p>
                {/* <p className={`text-white text-center text-[2.1vh] mt-[2vh]`}></p> */}
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default WakilDetails