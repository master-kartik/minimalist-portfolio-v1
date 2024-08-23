import React from 'react'

const Testamonials = () => {
  return (
    <div className="flex flex-col mr-5 md:flex-row gap-5">
    <div className="flex flex-col justify-between w-full md:w-[30%] min-h-[30vh] md:min-h-[60vh]  mb-8 md:mb-28 pt-6 px-4 border-black border-[1px]">
      <div>
      A remarkable talent with a superb sense of design and a solid work ethic. He excel in both frontend and backend tasks, delivering polished results every time. Highly dependable and creative.
      </div>
      <div className='flex py-6 px-4 justify-end bg-neutral-100 mx-[-1rem]'>
        <div className='text-right  leading-4'>
        ~ Kamaldeep Singh Roopra <br/>
        <span className='text-right text-xs'>CEO (FEEH Pvt. Ltd.)</span>
        </div>

      </div>
    </div>


       <div className="flex flex-col justify-between w-full md:w-[30%] min-h-[30vh] md:min-h-[60vh]  mb-8 md:mb-28 pt-6 px-4 border-black border-[1px]">
      <div>
      We are very pleased with the website created by this developer. He did a fantastic job, showing great skill in both design and coding. The website works well and looks very professional. We appreciate their hard work and dedication.
      </div>
      <div className='flex py-6 px-4 justify-end bg-neutral-100 mx-[-1rem]'>
        <div className='text-right  leading-4'>
        ~ Arun Singh <br/>
        <span className='text-right text-xs'>Principal  (Bhanu Public School)</span>
        </div>

      </div>
    </div>
    <div className="flex flex-col justify-between w-full md:w-[30%] min-h-[30vh] md:min-h-[60vh] mb-8 md:mb-28 pt-6 px-4 border-black border-[1px]">
      <div>
      A standout frontend developer with a keen eye for design and an unwavering commitment to quality. Their work ethic and attention to detail brought our project to life beautifully. Truly a valuable team member.
      </div>
      <div className='flex py-6 px-4 justify-end bg-neutral-100 mx-[-1rem]'>
        <div className='text-right  leading-4'>
        ~ Sahiba Sharma <br/>
        <span className='text-right text-xs'>Team Leader (FEEH Pvt. Ltd.)</span>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Testamonials