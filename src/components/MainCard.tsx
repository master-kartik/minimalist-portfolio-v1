import React from 'react'
import Image from 'next/image'

interface MainCardProps {
  inverted: boolean;
  title: string;
  desc: string;
}

const MainCard = ({inverted} : MainCardProps) => {
  
  return (
    <div className={` px-6 md:px-0 md:flex ${inverted ? 'md:flex-row-reverse':'md:flex'} items-center justify-center my-20`} >
        <div className=' w-full md:w-[60%] flex-col items-center'>
        <div className={`:w-full h-[0.5px] bg-neutral-800 opacity-50 ${inverted ? '':'md:w-[80vw]'}`}></div>
        <div className={`w-full text-neutral-700 ${inverted ? 'text-left':'md:text-right'}  mt-2`}>
            <div className='text-md font-bold tracking-tight'>Visa</div>
            <div className=' leading-[1rem] md:leading-3'>Interactive, story-telling education tool (in progress)</div>
        </div>
        </div>
        <div className={`w-full mt-6 md:w-[40%] md:px-4 z-50  ${inverted ? 'md:pl-10':'md:pr-8'}`}><Image alt='image' src={"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG1wdGc0eG85dTlkcGZ4bzgwNm05bWk4bnZ3dmFqeGNyZDlrOXE0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W4u28RZYXcVgJnZOSo/giphy.webp" } width={500} height={500}></Image></div>
    </div>
  )
}

export default MainCard