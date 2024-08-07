import MainCard from '@/components/MainCard'
import React from 'react'
const page = () => {
  return (
    <>
      <div className='text-5xl tracking-tighter text-center font-semibold text-neutral-700 mt-10'>Side Quests</div>
      <div className='ml-[10vw]'>
          <div className="text-3xl">Film & Video Editing</div>
          <MainCard inverted={true} title={''} desc={''} />
          <MainCard inverted={false} title={''} desc={''} />
          <MainCard inverted={true} title={''} desc={''} />
          <MainCard inverted={false} title={''} desc={''} />
          <MainCard inverted={true} title={''} desc={''} />
          <MainCard inverted={false} title={''} desc={''} />
      </div>
      </>
  )
}

export default page