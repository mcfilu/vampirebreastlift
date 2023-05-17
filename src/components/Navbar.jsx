import React from 'react'
import { navLinks } from '../constants'
import {logo, tel_logo} from '../assets'
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
        if(window.scrollY >= w_height*0.8){
            setColor(true)
        }else{
            setColor(false)
        }
      }
    }
    window.addEventListener('scroll', changeColor)

  return (
    <nav className = {`w-full flex py-6 justify-between items-center fixed pl-[3vh] pr-[3vh] ${color ? 'bg-black bg-opacity-90 h-[110px]' : ''}`}>
        <NavLink to={`/`}><img src={logo} alt="yours lawfully logo" className={`${color ? 'h-[90px]' : 'h-[130px]'}`}></img></NavLink>

            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav,index) => (
                <li
                key = {nav.id}
                className={`hover-underline-animation flex font-poppins font-normal cursor-pointer text-[16px] m-4 text-white ${active_path=== nav.link ? 'text-gold1' : ''} hover:text-gold1 h-[40px]`}   
                >
                {/* <a href={`#${nav.id}`}> {nav.title} </a> */}
                <NavLink className={`flex items-center`} to={`${nav.link}`}>{nav.title}</NavLink>
                </li>
            ))}
            </ul>

            {/* <img src={tel_logo}></img> */}
            <button className={`text-white bg-gold1  p-[1vh] hover:bg-white hover:text-gold1`}>+44 (0)20 7467 5340</button>

    </nav>
  )
}

export default Navbar