import MainCard from '@/components/MainCard'
import React from 'react'



const page = () => {
  const image1 = '/assets/about1.png'
  const image2 = '/assets/about2.gif'
  const image3 = '/assets/about3.png'
  return (
    <div className='ml-[10vw] pt-0 md:pt-0'>
      
      <div className='ml-[-10vw] md:ml-0 my-20'>
        
    <MainCard img={image1} inverted={true} title={"I'm Kartik."} className='md:mr-[-3rem] md:scale-75' desc={`\nThank you for your time. \n\nI’m a tech enthusiast, problem solver, and a filmmaking \nand design aficionado. \nWhether it's coding or crafting stories through film, \nI bring creativity, curiosity, and a relentless drive to \nlearn and innovate to everything I do.`} />
      </div>
    <div className="ml-[-3vw] md:flex justify-between ">
      <div className='md:w-[35%]'>
        <div className='font-bold text-base text-neutral-700'>Education</div>
        <div className='flex flex-col text-base text-neutral-700 w-[95%] mt-4 mb-10 md:w-[70%]'> 
          <div className='flex gap-2 flex-col text-sm'>
            <div>

            <div>Maharaja Surajmal Institute of Technology (MSIT)</div>
            <div>2019-2023</div>
            </div>
<div>

            <div>Bachelor of Technology (B.Tech)</div>
            <div>Electronics and Communication Engineering (ECE)</div>
</div>
          </div>
        </div>
      </div>


      <div className='md:w-[33%]'>
  <div className='font-bold text-base text-neutral-700'>Experience</div>
  <div className='flex flex-col text-neutral-700 w-[95%] mt-4 mb-10 text-sm md:w-[70%]'> 
    <div className='flex flex-col'>
      <div>Software Development Intern</div>
      <div>FEEH PVT. LTD</div>
      <div>May 2023 - Aug 2023</div>
    </div>
  
  </div>
</div>


      <div className='md:w-[33%]'>
  <div className='font-bold text-base text-neutral-700'>Skills</div>
  <div className='flex flex-col text-sm text-neutral-700 w-[95%] mt-4 mb-10 md:w-[70%]'>
    <div>Full Stack Development (MERN Stack)</div>
    <div>ReactJS, Next.js</div>
    <div>JavaScript, TypeScript</div>
    <div>Supabase, Firebase</div>
    <div>UI/UX Design</div>
    <div>Video Editing</div>
    <div>Responsive Web Design</div>
    <div>Node.js, Express.js</div>
    <div>Git & Version Control</div>
    <div>RESTful API Development</div>
    <div>Tailwind CSS</div>
    <div>C++, Python</div>
    <div>SQL, MySQL, DBMS</div>
    <div>Operating Systems, Linux</div>
  </div>
</div>


<div className='md:w-[33%]'>
  <div className='font-bold text-base text-neutral-700'>Volunteer Experience</div>
  <div className='flex flex-col gap-2 text-sm text-neutral-700 w-[95%] mt-4 mb-10 md:w-[70%]'> 
  <div className='flex flex-col'>
      <div>Executive Head of Videography Department</div>
      <div>E-Cell, MSIT</div>
      <div>Sep 2021 - May 2023</div>
    </div>
    <div className='flex flex-col mt-2'>
      <div>Member of Photography Society (Innovision)</div>
      <div>Maharaja Surajmal Institute of Technology (MSIT)</div>
      <div>Aug 2020 - May 2023</div>
    </div>
   
    <div className='flex flex-col mt-2'>
      <div>Member of Marketing and PR Department</div>
      <div>National Service Scheme (NSS), MSIT</div>
      <div>Jan 2020 - May 2021</div>
    </div>
  </div>
</div>

    </div>
    
    <div className='flex-col ml-[-10vw] md:ml-0'>
    <div className='mb-10'><MainCard img={image2} inverted={true} title={'Combining Creativity with Code'} desc={"\nJust like filmmaking and design, where every frame \nand element is carefully crafted to evoke an emotion or tell a story,\nweb development is about creating experiences \nthat are both functional and engaging. "} /></div>
    <div className='mb-10'><MainCard img={image3} inverted={true} title={'Understanding and Embracing Perspectives'} desc={"\n\nI approach every project by first asking, \n`What experience am I creating?` Whether it's building intuitive, \nresponsive interfaces for an e-commerce site or developing \ninteractive features for a school portal, \nI focus on understanding the needs and desires of the users. \nMy passion for creativity and problem-solving \ndrives me to blend technical skills with a designer's \neye, ensuring every web solution is not only visually \nappealing but also seamless and user-friendly."} /></div>


    
    </div>

    </div>

  )
}

export default page