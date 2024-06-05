import React, { useState } from 'react';

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const MobileNav = () => {
  return (
    <nav>
      {/* nav open button */}
      <div className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
    </nav>
  )
}

export default MobileNav;