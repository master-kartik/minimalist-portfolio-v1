import MainCard from '@/components/MainCard'
import React from 'react'

const page = () => {
  return (
    <div className='ml-[10vw] pt-10 md:pt-0'>
      <div className='text-5xl ml-[-10vw] tracking-tighter text-center font-semibold text-neutral-700 mt-10'>About Me</div>
      <div className='ml-[-10vw]'>
        
    <MainCard inverted={true} title={''} desc={''} />
      </div>
    <div className="ml-[-3vw] md:flex justify-between ">
      <div>
        <div className='font-bold text-base text-neutral-700'>Education</div>
        <div className='text-base text-neutral-700 w-[95%] mt-4 mb-10 md:w-[70%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores autem laborum exercitationem reiciendis? Laborum recusandae earum iste ea tempore voluptatibus nesciunt dicta laudantium amet iure. Accusamus voluptas dolore rerum.</div>
      </div>
      <div>
        <div className='font-bold text-base text-neutral-700'>Skills </div>
        <div className='text-base text-neutral-700 w-[95%] mt-4 mb-10 md:w-[70%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores autem laborum exercitationem reiciendis? Laborum recusandae earum iste ea tempore voluptatibus nesciunt dicta laudantium amet iure. Accusamus voluptas dolore rerum.</div>
      </div>
      <div>
        <div className='font-bold text-base text-neutral-700'>Experience</div>
        <div className='text-base text-neutral-700 w-[95%] mt-4 mb-10 md:w-[70%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores autem laborum exercitationem reiciendis? Laborum recusandae earum iste ea tempore voluptatibus nesciunt dicta laudantium amet iure. Accusamus voluptas dolore rerum.</div>
      </div>
      <div>
        <div className='font-bold text-base text-neutral-700'>Awards</div>
        <div className='text-base text-neutral-700  w-[95%] mt-4 mb-10 md:w-[70%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores autem laborum exercitationem reiciendis? Laborum recusandae earum iste ea tempore voluptatibus nesciunt dicta laudantium amet iure. Accusamus voluptas dolore rerum.</div>
      </div>
    </div>
    
    <div className='ml-[-10vw]'>
    <MainCard inverted={true} title={''} desc={''} />
    <MainCard inverted={true} title={''} desc={''} />
    <MainCard inverted={true} title={''} desc={''} />
    </div>

    </div>

  )
}

export default page