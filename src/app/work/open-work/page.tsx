import React from 'react'
import '@/app/globals.css'
import projectdata from '@/data/projectdata'
type Props = {
    searchParams : {[key: string] : string | string[] | undefined }
}
const WorkPage = ({searchParams}:Props) => {
    const id = Number(searchParams._id)
    const fetchedData = (projectdata.find((data:any)=>data.id===id))
  return (
    <> 
            
        <h1 className='text-center'>{fetchedData?.title} </h1>
        <p>{fetchedData?.desc}</p>
        
        </>
  )
}

export default WorkPage