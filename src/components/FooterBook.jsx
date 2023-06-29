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
    <div className={`${color ? 'flex' : 'hidden'} w-full bg-black h-[6vh] flex flex-row items-center justify-between ease-in-out duration-500`}>
        <div className={`flex flex-1 flex-row justify-center `}>
            <p className={`text-white text-[2.5vh]`}>We offer 0% finance on all our treatments, please call the clinic to find out more</p>
            <p href="tel:5005355343" className={`text-gold1 ml-[1vh] text-[2.5vh]`}>+44 (0)20 3006 8459</p>
        </div>
        {/* sjfksdkf */}
        {/* <button className={`bg-black text-gold1 border-2 border-gold1 text-[3vh] h-full px-[1vw]`}>Book Consultation</button> */}
    </div>
  )
}

export default FooterBook