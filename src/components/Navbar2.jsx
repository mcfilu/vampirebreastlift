import React from 'react'
import { navLinks } from '../constants'
import {logo, tel_logo} from '../assets'
import { NavLink } from 'react-router-dom'




const Navbar2 = () => {
    const active_path = window.location.pathname;
    const w_height = window.screen.height;
    const[color, setColor] = React.useState(false)
    const changeColor = () => {
        if(window.scrollY >= w_height*0.8){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

  return (
    <nav className = {`w-full flex py-6 justify-between items-center pl-[3vh] pr-[3vh] bg-black bg-opacity-90 h-[130px]`}>
        <NavLink to={`/`}><img src={logo} alt="yours lawfully logo" className={`${color ? 'h-[100px]' : 'h-[130px]'}`}></img></NavLink>

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
            <button className={`text-white bg-gold1  p-[1vh]`}>+44 (0)20 7467 5340</button>

    </nav>
  )
}

export default Navbar2