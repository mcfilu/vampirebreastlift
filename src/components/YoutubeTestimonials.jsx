import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { boobs1, boobs2, boobs3 } from '../assets';
const YoutubeTestimonials = () => {
  
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
    // <div className={`flex flex-col ml-[4%] mr-[4%] bg-black bg-opacity-70 rounded-[9px] p-6 `}>
    //     <div>
    //         <h1 className={`text-gold1 text-[6vh] font-poppins text-center`}>Clients Testimonials</h1>
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
    <div className={`flex flex-col p-[2vh] bg-black bg-opacity-50 rounded-[9px] h-[50vh] w-11/12 hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
      
        <h1 className={`text-gold1 text-[5vh] font-poppins text-center`}>Clients Testimonials</h1>
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
          <div className={`h-[30vh] p-6`}>
            <div className={`flex w-full h-full items-center justify-center bg-black bg-opacity-40 rounded-[9px] `}>
            <iframe className="w-[90%] h-[70%]" src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          
          <div className={`h-[30vh] p-6`} >
            <div className={`flex w-full h-full items-center justify-center bg-black bg-opacity-40 rounded-[9px]`}>
            <iframe className="w-[90%] h-[70%]" src="https://www.youtube.com/embed/TmsESS0zn74?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          
          <div  className={`h-[30vh] p-6 `}>
            <div className={`flex w-full h-full items-center justify-center bg-black bg-opacity-40 rounded-[9px]`}>
            <iframe className="w-[90%] h-[70%]"  src="https://www.youtube.com/embed/M0GiG9xyxJo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>

          <div  className={`h-[30vh] p-6`}>
            <div className={`flex w-full h-full items-center justify-center bg-black bg-opacity-40 rounded-[9px]`}>
            <iframe className="w-[90%] h-[70%]" src="https://www.youtube.com/embed/TEvhvhzyCsY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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