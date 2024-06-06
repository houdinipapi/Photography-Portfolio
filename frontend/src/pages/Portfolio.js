import React from 'react'

// import Image1 from "../img/portfolio/p1.jpg"
// import Image2 from "../img/portfolio/p2.jpg"
import Image3 from "../img/portfolio/p3.jpg"
import Image4 from "../img/portfolio/p4.jpg"
import Image5 from "../img/portfolio/p5.jpg"
import Image6 from "../img/portfolio/p6.jpg"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { transition1 } from '../transitions'

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className='section bg-orange-100'
    >
      <div className='container mx-auto h-full relative'>

        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus. <b>Venenatis lectus magna praesent</b> elementum facilisis leo vel.
              <br />
              <br />
              Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean
            </p>

            <Link to={"/contact"} className='btn rounded-2xl mb-[30px] mx-auto lg:mx-0'>
              Hire Me
            </Link>

          </motion.div>

          {/* Image Grid */}
          <div className='grid grid-cols-2 lg:gap-2'>
            
            {/* Images */}
            {/* <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-clipped'>
              <img
              className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-300'
                src={Image1}
                alt=""
              />
            </div>

            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-clipped'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-300'
                src={Image2}
                alt=""
              />
            </div> */}

            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-clipped'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-300'
                src={Image3}
                alt=""
              />
            </div>

            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-clipped'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-300'
                src={Image4}
                alt=""
              />
            </div>

            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-clipped'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-300'
                src={Image5}
                alt=""
              />
            </div>

            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-clipped'>
              <img
                className='h-full w-full lg:h-[220px] hover:scale-110 transition-all duration-300 object-cover'
                src={Image6}
                alt=""
              />
            </div>

          </div>

        </div>

      </div>
    </motion.section>
  )
}

export default Portfolio