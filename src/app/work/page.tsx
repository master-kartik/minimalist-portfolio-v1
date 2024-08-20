import MainCard from '@/components/MainCard'
import React from 'react'
import projectdata from '@/data/projectdata'
import Link from 'next/link'
const page = () => {
  return (
      <>
      <div className='text-5xl pt-10 md:pt-0 tracking-tighter text-center font-semibold text-neutral-700 mt-10'>All Work</div>
      <div className='ml-[] md:ml-[10vw]'>
      {projectdata.map(({id,title,desc,img},index)=>{

if(id){
return <Link key={id} href={{pathname: '/work/open-work', query:{_id: id}}}><MainCard img={img} inverted={id%2===0 ? true : false} title={title} desc={desc}/></Link>}
}
)}
      </div>
      </>
  )
}

export default page