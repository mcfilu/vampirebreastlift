import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { boobs1, boobs2, boobs3 } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const YoutubeTestimonials = () => {
  
    const changeSlider = () => {
      if (window.screen.width > 1000){
        return 3;
      }
      else{
        return 1;
      }
    };
      

    const settings = {
      className: "center ",
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: changeSlider(),
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
      // variableWidth: true,
    };

  return (
    // <div className={`flex flex-col ml-[4%] mr-[4%] bg-black bg-opacity-70  p-6 `}>
    //     <div>
    //         <h1 className={`text-white text-[6vh] font-poppins text-center`}>Clients Testimonials</h1>
    //         <hr className={`mt-[2vh] mb-8`}></hr>
    //     </div>
    //     <div className={`flex flex-row justify-center gap-x-16`}>
    //         <iframe width="560" height="315" src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    //         <iframe width="560" height="315" src="https://www.youtube.com/embed/TmsESS0zn74?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    //     </div>
    //     <div className={`flex flex-row justify-between mt-16 `}>
    //         <iframe width="560" height="315" src="https://www.youtube.com/embed/M0GiG9xyxJo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    //         <iframe width="560" height="315" src="https://www.youtube.com/embed/TEvhvhzyCsY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    //     </div>
    // </div>
    <div className={`flex flex-col p-[2vh]  w-full `}>
      
        <h1 className={`text-gold1 text-[5vh] font-poppins text-center`}>Patients Testimonials</h1>
        {/* <hr className={`mt-[2vh] mb-8`}></hr> */}
      
    {/* <div className={`flex flex-col sm:flex-row justify-center gap-x-4 sm:gap-x-16`}>
      <iframe className="w-full sm:w-auto" width="560" height="315" src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className="w-full sm:w-auto mt-[2vh] sm:mt-0" width="560" height="315" src="https://www.youtube.com/embed/TmsESS0zn74?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className={`flex flex-col sm:flex-row justify-center sm:justify-between mt-16 gap-x-4 sm:gap-x-0`}>
      <iframe className="w-full sm:w-auto" width="560" height="315" src="https://www.youtube.com/embed/M0GiG9xyxJo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className="w-full sm:w-auto mt-[2vh] sm:mt-0" width="560" height="315" src="https://www.youtube.com/embed/TEvhvhzyCsY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div> */}
      <div className=" w-[95%] mx-auto my-auto ">
        {/* <Slider {...settings}>
          <div >
            <div className="w-[20vw] h-[15vh] bg-black bg-opacity-30 flex items-center justify-center mx-[1vh]">
              <iframe className="w-[10vw] h-[10vh]"  src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div className="h-64   mx-[1vh]">
            <iframe className="w-full h-full " width="560" height="315" src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="h-64  mx-[1vh]">
            <iframe className="w-full sm:w-auto" width="560" height="315" src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="h-64  mx-[1vh]">
            <iframe className="w-full sm:w-auto" width="560" height="315" src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          Add as many slides as you want
        </Slider> */}
        <Slider {...settings}>
          <div className={`md:h-[60vh] p-6 px-[2vw]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                <iframe className="w-[100%] h-[100%]" src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh]`}> I had a good intimacy and sex life with my husband  for almost 20 years and then I was petrified of having sex.  I heard about Dr Wakil and O Concept.  I wanted to be happy again sexually. 8 weeks  later, I could feel the difference. I'm able to feel sexy again and make love with my husband.   </p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh]`}>MAYA</h1>
                <h3 className={`text-white text-[1.9vh] text-center`}>42 Years Old, UK</h3>
              </div>
            </div>
          </div>



          <div className={`md:h-[60vh] p-6 px-[2vw]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                <iframe className="w-[100%] h-[100%]" src="https://www.youtube.com/embed/TmsESS0zn74?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh]`}> I had a good intimacy and sex life with my husband  for almost 20 years and then I was petrified of having sex.  I heard about Dr Wakil and O Concept.  I wanted to be happy again sexually. 8 weeks  later, I could feel the difference. I'm able to feel sexy again and make love with my husband.   </p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh]`}>CLAUDIA</h1>
                <h3 className={`text-white text-[1.9vh] text-center`}>28 Years Old, BRISTOL</h3>
              </div>
            </div>
          </div>

          <div className={`md:h-[60vh] p-6 px-[2vw]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                <iframe className="w-[100%] h-[100%]" src="https://www.youtube.com/embed/M0GiG9xyxJo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh]`}> I had a good intimacy and sex life with my husband  for almost 20 years and then I was petrified of having sex.  I heard about Dr Wakil and O Concept.  I wanted to be happy again sexually. 8 weeks  later, I could feel the difference. I'm able to feel sexy again and make love with my husband.   </p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh]`}>CHRISTINE</h1>
                <h3 className={`text-white text-[1.9vh] text-center`}>60 Years Old, UK</h3>
              </div>
            </div>
          </div>

          <div className={`md:h-[60vh] p-6 px-[2vw]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh]`}>
              <div className={`flex h-[40%] w-[100%]`}>
              <iframe className="w-[100%] h-[100%]" src="https://www.youtube.com/embed/EbBj4Hitfyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh]`}> I had a good intimacy and sex life with my husband  for almost 20 years and then I was petrified of having sex.  I heard about Dr Wakil and O Concept.  I wanted to be happy again sexually. 8 weeks  later, I could feel the difference. I'm able to feel sexy again and make love with my husband.   </p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh]`}>SHIRIN</h1>
                <h3 className={`text-white text-[1.9vh] text-center`}>45 Years Old, UK</h3>
              </div>
            </div>
          </div>
          
          
          {/* <div className="h-64   mx-[1vh]">sfasdf</div>
          <div className="h-64   mx-[1vh]">safasd</div>
          <div className="h-64   mx-[1vh]">asjdfk</div>
          <div className="h-64   mx-[1vh]">asjdfk</div> */}
        </Slider>
      </div>
  </div>
  )
}

export default YoutubeTestimonials