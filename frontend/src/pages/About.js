import React from 'react'
import AboutImage from "../img/about/about.jpg"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className='section bg-yellow-100'>
      <div className='container mx-auto h-full relative'>

        {/* Text & Image Wrapper */}

        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>

          {/* Image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img
              src={AboutImage}
              alt=''
            />
          </div>

          {/* Text */}
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
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
          </div>

        </div>

      </div>
    </section>
  )
}

export default About