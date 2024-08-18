import MainCard from '@/components/MainCard'
import React from 'react'
const page = () => {
  return (
    <>
      <div className='text-5xl pt-10 md:pt-0 tracking-tighter text-center font-semibold text-neutral-700 mt-10'>Side Quests</div>
      <div className='ml-[] md:ml-[10vw]'>
          
          <MainCard img='' inverted={true} title={''} desc={''} />
          <MainCard img='' inverted={false} title={''} desc={''} />
          <MainCard img='' inverted={true} title={''} desc={''} />
          <MainCard img='' inverted={false} title={''} desc={''} />
          <MainCard img='' inverted={true} title={''} desc={''} />
          <MainCard img='' inverted={false} title={''} desc={''} />
      </div>
      </>
  )
}

export default page