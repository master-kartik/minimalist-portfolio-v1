import MainCard from '@/components/MainCard'
import React from 'react'

const page = () => {
  return (
      <>
      <div className='text-5xl tracking-tighter text-center font-semibold text-neutral-700 mt-10'>All Work</div>
      <div className='ml-[10vw]'>
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