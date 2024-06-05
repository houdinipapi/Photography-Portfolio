import React from 'react'

import Socials from "./Socials"
import fotologo from "../img/header/fotologo.svg"
import MobileNav from "./MobileNav"

import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className='bg-green-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link to={"/"}>
          <img
            src={fotologo}
            alt='/'
          />
        </Link>
        
      </div>
    </header>
  )
}

export default Header