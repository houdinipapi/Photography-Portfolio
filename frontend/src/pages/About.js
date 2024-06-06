import React from 'react'
import AboutImage from "../img/about/about.jpg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { transition1 } from "../transitions"

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className='section bg-yellow-100'
    >
      <div className='container mx-auto h-full relative'>

        {/* Text & Image Wrapper */}

        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>

          {/* Image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-clipped lg:pt-20 pb-10'>
            <img
              src={AboutImage}
              alt=''
            />
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>About Me</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus. <b>Venenatis lectus magna praesent</b> elementum facilisis leo vel.
            <br />
            <br />
              Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean
            </p>
            <Link to={"/portfolio"} className='btn rounded-2xl'>
              View My Work
            </Link>
          </motion.div>

        </div>

      </div>
    </motion.section>
  )
}

export default About