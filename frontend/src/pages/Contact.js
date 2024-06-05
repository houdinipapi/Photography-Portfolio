import React from 'react'
import contactImage from "../img/contact/contact.jpg"

const Contact = () => {
  return (
    <section className='section bg-purple-100'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>

          {/* Background */}
          <div className='hidden lg:flex bg-[#EEF7F9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
            Background
          </div>

          {/* Text & Form */}
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact Me</h1>
            <p className='mb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Form */}
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>

                <input
                  className='outine-none border-b border-b-purple-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type="text"
                  placeholder="Name"
                />

                <input
                  className='outine-none border-b border-b-purple-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type="text"
                  placeholder="Email Address"
                />

              </div>

              <input
                className='outine-none border-b border-b-purple-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type="text"
                placeholder="Message"
              />

              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start rounded-2xl'>
                Submit
              </button>
            </form>
          </div>

          {/* Image */}
          <div className='lg:flex-1'>
            <img
              src={contactImage}
              alt=''
              // className='max-w-[300px] lg:max-w-[400px]'
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact