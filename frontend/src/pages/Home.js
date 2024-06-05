import React from 'react'
import HomeImage from "../img/home/woman.png";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        {/* Text and Image Wrapper */}
        <div className='flex flex-col justify-center'>

          {/* Text */}
          <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb:0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>
              Photographer <br /> & Editor
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Nairobi, Kenya</p>
            <Link to={"/contact"} className='btn mb-[30px] rounded-2xl'>Hire Me</Link>
          </div>

          {/* Image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <div className='relative lg:-right-40 overflow-hidden'>
              <img
                src={HomeImage}
                alt='Home'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home