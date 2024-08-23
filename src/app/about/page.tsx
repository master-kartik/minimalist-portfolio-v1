import MainCard from '@/components/MainCard'
import React from 'react'



const page = () => {
  const image1 = '/assets/about1.png'
  return (
    <div className='ml-[10vw] pt-10 md:pt-0'>
      <div className='text-5xl ml-[-10vw] tracking-tighter text-center font-semibold text-neutral-700 mt-10'>About Me</div>
      <div className='ml-[-10vw] md:ml-0 my-20'>
        
    <MainCard img={image1} inverted={true} title={"I'm Kartik."} classNames={'mr-[-3rem] scale-75'} desc={`\nThank you for your time. \n\nI’m a tech enthusiast, problem solver, and a filmmaking and design aficionado. \n\nWhether it's coding or crafting stories through film, \nI bring creativity, curiosity, and a relentless drive to \nlearn and innovate to everything I do.`} />
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
        <div className='font-bold text-base text-neutral-700'>Voulanteer</div>
        <div className='text-base text-neutral-700  w-[95%] mt-4 mb-10 md:w-[70%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores autem laborum exercitationem reiciendis? Laborum recusandae earum iste ea tempore voluptatibus nesciunt dicta laudantium amet iure. Accusamus voluptas dolore rerum.</div>
      </div>
    </div>
    
    <div className='flex-col ml-[-10vw] md:ml-0'>
    <div className='mb-10'><MainCard img='' inverted={true} title={''} desc={''} /></div>
    <div className='mb-10'><MainCard img='' inverted={true} title={''} desc={''} /></div>
    <div className='mb-10'><MainCard img='' inverted={true} title={''} desc={''} /></div>
    
    </div>

    </div>

  )
}

export default page