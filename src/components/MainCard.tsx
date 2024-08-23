import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface MainCardProps {
  img: string;
  inverted: boolean;
  title: string;
  desc: string;
  className?:string
  
}
// Link href={`/work/${title || 'visa'}`}
const MainCard = ({inverted,title, desc, img, className} : MainCardProps) => {
  
  return (
    <div className={` px-6 py-7 md:py-0 md:px-0 md:flex ${inverted ? 'md:flex-row-reverse':'md:flex'} items-center justify-center`} >
        <div className=' w-full md:w-[60%] flex-col items-center'>
        <div className={`:w-full h-[0.5px] bg-neutral-800 mb-10 md:mb-auto opacity-50 ${inverted ? '':'md:w-[100%]'}`}></div>
        <div className={`w-full text-neutral-700 ${inverted ? 'text-left':'md:text-right'}  mt-2`}>
            <div className='text-md text-2xl md:text-base font-bold tracking-tight'>{title || 'Visa'}</div>
            <div className='md:leading-5 md:whitespace-pre-wrap'>{desc || 'Interactive, story-telling education tool (in progress)'}</div>
        </div>
        </div>
        <div className={`w-full mt-6 md:w-[40%] md:px-4 z-50 ${className}  ${inverted ? 'md:pl-10':'md:pr-8'}`}><Image  alt='image' src={img || 'https://cdn.prod.website-files.com/635dc1a15dee791d705a7eaf/669dc853cd19642dd9ba4922_visavid-ezgif.com-video-to-gif-converter.gif'} width={500} height={500}></Image></div>
    </div>
  )
}

export default MainCard