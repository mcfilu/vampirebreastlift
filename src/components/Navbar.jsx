import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants'
import {logo, tel_logo, logo_no_border, close, menu} from '../assets'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
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
      if (active_path === '/contact') {
        
      }
      else {
        if(window.scrollY >= w_height*0.3){
            setColor(true)
        }else{
            setColor(false)
        }
      }
    }
    window.addEventListener('scroll', changeColor)
    const [toggle, setToggle] = useState(false);

  return (
    <nav className = {`w-full flex py-[2.4vh] justify-between items-center fixed pl-[3vh] pr-[3vh] ${color ? 'bg-black bg-opacity-95 h-[11.3vh]' : ''} ease-in-out duration-500`}>
        <NavLink to={`/`}><img src={logo_no_border} alt="yours lawfully logo" className={`${color ? 'w-[16.3vh]' : 'w-[21.3vh]'} ease-in-out duration-500`}></img></NavLink>

            <ul className="list-none md:flex hidden items-center justify-center flex-1">
            {navLinks.map((nav,index) => (
                <li
                key = {nav.id}
                className={`hover-underline-animation flex font-poppins font-normal cursor-pointer ${color ? 'text-[1.2vw]' : 'text-[1.4vw]'} ease-in-out duration-500 mx-[1.7vh] py-[1.7vh] text-white ${active_path=== nav.link ? 'text-gold1' : ''} hover:text-gold1 `}   
                >
                {/* <a href={`#${nav.id}`}> {nav.title} </a> */}
                <NavLink className={`flex items-center`} to={`${nav.link}`}>{nav.title}</NavLink>
                </li>
            ))}
            </ul>

            {/* <img src={tel_logo}></img> */}
            <div className={`flex ${color ? 'w-[25.3vh]' : 'w-[30.8vh]'} md:flex hidden items-center justify-end ease-in-out duration-500`}>
            <button className={`text-gold1 ${color ? 'text-[1.2vw]' : 'text-[1.4vw]'}   p-[1vh] hover:bg-white hover:text-gold1 ease-in-out duration-500`}>+44 (0)20 7467 5340</button>
            </div>


            <div  className="md:hidden flex flex-1 justify-end items-center">
              <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}></img>
              <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute w-[100vh] w-[100vw]`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                  {navLinks.map((nav,index) => (
                    <li
                      key = {nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}   
                    >


                      <NavLink to={`/${nav.link}`}>{nav.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            

    </nav>
  )
}

export default Navbar