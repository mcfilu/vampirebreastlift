import React from 'react'

function FooterBook() {
    const active_path = window.location.pathname;
    const w_height = window.screen.height;
    const to_start = () => {
      if (active_path === '/contact') {
        return true;
      }
      else {
        return false
      }
    }
    const[color, setColor] = React.useState(to_start)

    const changeColor = () => {
        
          if(window.scrollY >= w_height*0.62){
              setColor(true)
          }else{
              setColor(false)
          }
        
      }
      window.addEventListener('scroll', changeColor)


  return (
    <div className={`${color ? 'flex' : 'hidden'} w-full bg-black md:h-[6vh] flex flex-row items-center justify-between ease-in-out duration-500`}>
        {/* <button className={`bg-black text-gold1 border-2 border-gold1 text-[3vh] h-full px-[1vw]`}>Book Consultation</button> */}
        <div className={`hidden md:flex flex-1 flex-row justify-center `}>
            <p className={`text-white text-[2.5vh] font-main`}>We offer 0% finance on all our treatments, please call the clinic to find out more</p>
            <p href="tel:5005355343" className={`text-gold1 ml-[1vh] text-[2.5vh] font-main`}>+44 (0)20 3006 8459</p>
        </div>
        <div className={`flex md:hidden flex-row items-center justify-center pt-[1vh]`}>
            <p className={`text-white text-[2vh] font-main text-center`}>We offer 0% finance on all our treatments, please call the clinic to find out more <a href="tel:5005355343" className={`text-gold1  text-[2vh] font-main`}>+44 (0)20 3006 8459</a></p>
            
        </div>
        {/* sjfksdkf */}
        
    </div>
  )
}

export default FooterBook