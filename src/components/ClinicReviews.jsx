import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ClinicReviews = () => {
    const settings = {
        className: "center ",
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
        // variableWidth: true,
      };

  return (
    // <div className={`flex flex-col items-center justify-center w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[60vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
    //     <p className={`text-gold1 text-[4.5vh] text-center`}>Clinic Reviews</p>
        <div className=" w-[95%] mx-auto my-auto ">
        
        <Slider {...settings}>
          <div className={`h-[45vh] p-6`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-60 rounded-[9px] p-[2vh]`}>
              <div className={`flex flex-col items-center w-[100%] h-[100%] pt-[4vh]`}>
                <p><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i></p>
                <i className={`fa-solid fa-quote-right  text-gold1 text-[2vh] mt-[4vh]`}></i>
                <p className={`text-white text-center text-[1.5vh]`}> Dr Wakil is an artist as much as he is a doctor. The treatment he has done for me is amazing. I am very happy with my journey and he made me feel I'm at the best hands. I can't recommend him enough!</p>
                <i className={`fa-solid fa-quote-right text-gold1 text-[2vh]`}></i>
                <h1 className={`text-gold1 text-[2.5vh] text-center mt-[3vh]`}>Toni</h1>
                
              </div>
            </div>
          </div>

          <div className={`h-[45vh] p-6`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-60 rounded-[9px] p-[2vh]`}>
              <div className={`flex flex-col items-center w-[100%] h-[100%] pt-[4vh]`}>
                <p><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i></p>
                <i className={`fa-solid fa-quote-right  text-gold1 text-[2vh] mt-[4vh]`}></i>
                <p className={`text-white text-center text-[1.5vh]`}> Amazing clinic and perfect location. Dr Sherif is so warm and welcoming, he put me at ease and made the procedure as easy and quick as possible, with his eye for detail and precision I was left with my desired but natural result which I‘ve always wanted. Could not thank Dr Sherif enough.</p>
                <i className={`fa-solid fa-quote-right text-gold1 text-[2vh]`}></i>
                <h1 className={`text-gold1 text-[2.5vh] text-center mt-[1vh]`}>Rana</h1>
                
              </div>
            </div>
          </div>

          <div className={`h-[45vh] p-6`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-60 rounded-[9px] p-[2vh]`}>
              <div className={`flex flex-col items-center w-[100%] h-[100%] pt-[4vh]`}>
                <p><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i></p>
                <i className={`fa-solid fa-quote-right  text-gold1 text-[2vh] mt-[4vh]`}></i>
                <p className={`text-white text-center text-[1.5vh]`}> Have been visiting Dr Wakil for the past 5 years. Absolutely brilliant, professional Dr. I am unable to trust any other dermatologist. Highly recommended, you will never pay visit to any other clinic once you have been to SW clinic.</p>
                <i className={`fa-solid fa-quote-right text-gold1 text-[2vh]`}></i>
                <h1 className={`text-gold1 text-[2.5vh] text-center mt-[1vh]`}>Samiya</h1>
                
              </div>
            </div>
          </div>

          <div className={`h-[45vh] p-6`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-60 rounded-[9px] p-[2vh]`}>
              <div className={`flex flex-col items-center w-[100%] h-[100%] pt-[4vh]`}>
                <p><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i></p>
                <i className={`fa-solid fa-quote-right  text-gold1 text-[2vh] mt-[4vh]`}></i>
                <p className={`text-white text-center text-[1.5vh]`}> One of the best clinics I have ever been to. The staff and the Doctor are very professional and know what they are doing. I asked so many questions and they were very polite and patient with me. Highly recommend them.</p>
                <i className={`fa-solid fa-quote-right text-gold1 text-[2vh]`}></i>
                <h1 className={`text-gold1 text-[2.5vh] text-center mt-[3vh]`}>Leenah</h1>
                
              </div>
            </div>
          </div>

          <div className={`h-[45vh] p-6`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-60 rounded-[9px] p-[2vh]`}>
              <div className={`flex flex-col items-center w-[100%] h-[100%] pt-[4vh]`}>
                <p><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i></p>
                <i className={`fa-solid fa-quote-right  text-gold1 text-[2vh] mt-[4vh]`}></i>
                <p className={`text-white text-center text-[1.5vh]`}>Really impressed with my treatments. I would have no hesitation recommending any procedure. Dr Sherif is without a doubt a real professional and perfectionist. You will be looked after and treated to the very best.</p>
                <i className={`fa-solid fa-quote-right text-gold1 text-[2vh]`}></i>
                <h1 className={`text-gold1 text-[2.5vh] text-center mt-[3vh]`}>Hannah</h1>
                
              </div>
            </div>
          </div>

          <div className={`h-[45vh] p-6`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-60 rounded-[9px] p-[2vh]`}>
              <div className={`flex flex-col items-center w-[100%] h-[100%] pt-[4vh]`}>
                <p><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i></p>
                <i className={`fa-solid fa-quote-right  text-gold1 text-[2vh] mt-[4vh]`}></i>
                <p className={`text-white text-center text-[1.5vh]`}>Great clinic! Very friendly staff, that make you feel welcomed. Procedure was explained to me throughly and all my questions were answered patiently. Overall, I had a great experience and happy with my results.</p>
                <i className={`fa-solid fa-quote-right text-gold1 text-[2vh]`}></i>
                <h1 className={`text-gold1 text-[2.5vh] text-center mt-[3vh]`}>Ghazal</h1>
                
              </div>
            </div>
          </div>

          <div className={`h-[45vh] p-6`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-60 rounded-[9px] p-[2vh]`}>
              <div className={`flex flex-col items-center w-[100%] h-[100%] pt-[4vh]`}>
                <p><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i><i className={`fa-solid fa-star mr-[0.9vw] text-gold1 text-[1.3vw]`}></i></p>
                <i className={`fa-solid fa-quote-right  text-gold1 text-[2vh] mt-[4vh]`}></i>
                <p className={`text-white text-center text-[1.5vh]`}>I had my tear trough with Dr Wakil and I had an excellent result. I also had chin & cheeks filler and made such a huge difference on my face. Dr Wakil is a professional and made me feel very confident in his ability to help me achieve the changes I wanted.</p>
                <i className={`fa-solid fa-quote-right text-gold1 text-[2vh]`}></i>
                <h1 className={`text-gold1 text-[2.5vh] text-center mt-[1vh]`}>Stefania</h1>
                
              </div>
            </div>
          </div>

          
          
          
        </Slider>
      </div>
    // </div>
  )
}

export default ClinicReviews