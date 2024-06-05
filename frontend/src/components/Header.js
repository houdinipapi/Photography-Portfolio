import React from 'react'

import Socials from "./Socials"
import fotologo from "../img/header/fotologo.svg"
import MobileNav from "./MobileNav"

import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className='bg-green-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[70px] lg:h-[90px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link to={"/"} className='max-w-[200px]'>
          <img
            src={fotologo}
            alt='/'
          />
        </Link>
        
        {/* nav */}
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to={"/"} className='text-[#696C6D] hover:text-primary transition'>
            Home
          </Link>

          <Link to={"/about"} className='text-[#696C6D] hover:text-primary transition'>
            About
          </Link>

          <Link to={"/portfolio"} className='text-[#696C6D] hover:text-primary transition'>
            Portfolio
          </Link>

          <Link to={"/contact"} className='text-[#696C6D] hover:text-primary transition'>
            Contact
          </Link>

        </nav>
      </div>

      {/* Socials */}
      <Socials />

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  )
}

export default Header