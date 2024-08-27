import type { Metadata } from "next";
import BentoGrid from "@/components/BentoGrid";
import MainCard from "@/components/MainCard";
import { LinkPreview } from "@/components/ui/link-preview";
import projectdata from "@/data/projectdata"
import Link from "next/link";
import JoinWaitlistButton from "@/components/Button";
import Testamonials from "@/components/testamonials";

export const metadata: Metadata = {
  title: "Kartik Kochhar",
  description: "Hi! Welcome to my corner of the internet! I'm Kartik Kochhar. I craft seamless digital experiences by blending data-driven insights with creative design.",
  openGraph: {
    title: "Portfolio of Kartik Kochhar"
  }
};

export default function Home() {
  return (  
    <main className="ml-[5vw] md:ml-[15vw] z-50">
      <div className="mt-[10vh] md:mt-[5vh] text-3xl tracking-tight opacity-80"> I'm Kartik Kochhar. How are you?</div>
      <div className="flex flex-col gap-5 mt-[8vh] tracking-tight text-md leading-tight pr-4">
        <div className="font-bold text-md">I craft seamless digital experiences by blending data-driven <br /> insights with creative design.</div>
        <div className="opacity-95">
        Frontend Intern at <LinkPreview className="underline font-bold  text-neutral-500" url="https://magenta-eclair-9e0db3.netlify.app/"> FEEH </LinkPreview><br />
        B.Tech ECE student at <LinkPreview className="underline font-bold  text-neutral-500" url="https://www.msit.in/"> Maharaja Surajmal Institute of Technology (MSIT) </LinkPreview><br />
        </div>
      </div>
    
      <div className="flex-col ml-[-5vw] md:ml-[-5vw]  mt-10"> 
      {projectdata.map(({id,title,desc,img},index)=>{

        if(index < 4){
        return <Link className="" key={id} href={{pathname: '/work/open-work', query:{_id: id}}}><MainCard  inverted={id%2===0 ? true : false} img={img} title={title} desc={desc}/></Link>}
      }
        )}
      </div>
        <Link href={'/work'} className="w-[98.8vw] opacity-85 hover:opacity-100 flex items-center justify-center -ml-[5vw] md:-ml-[15vw] mt-10 mb-16"><JoinWaitlistButton textVal={'wanna se more?'}/></Link>
      <div className='w-[100vw] ml-[-5vw] md:w-[98.88vw] md:ml-[-15vw] h-[0.5px] bg-neutral-800 opacity-50 mb-10'></div>
      <div className="my-[5vh] ml-[-7.5vw] text-3xl text-center tracking-tight opacity-80"> What the World Says?</div>

     <Testamonials/>

<div className='w-[100vw] ml-[-5vw] md:w-[98.88vw] md:ml-[-15vw] h-[0.5px] bg-neutral-800 opacity-50 mb-10'></div>
     <div className="my-[5vh] ml-[-7.5vw] text-3xl text-center tracking-tight opacity-80"> Let's Engineer Together</div>
      
      <div className=" min-h-[90vh] mr-6">

        <BentoGrid/>
        
      </div>

      


    
    </main>
    
  );
}
