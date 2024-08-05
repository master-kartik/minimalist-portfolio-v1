
import BentoGrid from "@/components/BentoGrid";
import MainCard from "@/components/MainCard";
import { LinkPreview } from "@/components/ui/link-preview";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function Home() {
  return (
    <main className="ml-[5vw] md:ml-[15vw] z-50">
      <div className="mt-[5vh] text-3xl tracking-tight opacity-80"> I'm Kartik Kochhar. How are you?</div>
      <div className="flex flex-col gap-5 mt-[8vh] tracking-tight text-md leading-tight">
        <div className="font-bold text-md">I craft seamless digital experiences by blending data-driven <br /> insights with creative design.</div>
        <div className="opacity-95">
        Frontend Intern at <LinkPreview className="underline font-bold  text-neutral-500" url="https://magenta-eclair-9e0db3.netlify.app/"> FEEH </LinkPreview><br />
        B.Tech ECE student at <LinkPreview className="underline font-bold  text-neutral-500" url="https://www.msit.in/"> Maharaja Surajmal Institute of Technology (MSIT) </LinkPreview><br />
        </div>
      </div>
    
      <div className="flex-col ml-[-5vw]  mt-10">
      <MainCard inverted={false} title={""} desc={""}/>
      <MainCard inverted={true} title={""} desc={""}/>
      <MainCard inverted={false} title={""} desc={""}/>
      <MainCard inverted={true} title={""} desc={""}/>
      </div>
      <div className='w-[98.88vw] ml-[-15vw] h-[0.5px] bg-neutral-800 opacity-50 mb-10'></div>
      <div className="my-[5vh] ml-[-7.5vw] text-3xl text-center tracking-tight opacity-80"> Let's Engineer Together</div>
      <div className="flex flex-col mr-5 md:flex-row gap-5">
  <div className="w-full md:w-[30%] min-h-[60vh] mb-8 md:mb-28 py-6 px-4 border-black border-[1px]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis praesentium odio voluptatem aliquid, iusto earum obcaecati? Iste molestias, labore aspernatur porro sequi provident minus similique sit, odit voluptates perspiciatis!
  </div>
  <div className="w-full md:w-[30%] min-h-[60vh] mb-8 md:mb-28 py-6 px-4 border-black border-[1px]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis praesentium odio voluptatem aliquid, iusto earum obcaecati? Iste molestias, labore aspernatur porro sequi provident minus similique sit, odit voluptates perspiciatis!
  </div>
  <div className="w-full md:w-[30%] min-h-[60vh] mb-8 md:mb-28 py-6 px-4 border-black border-[1px]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis praesentium odio voluptatem aliquid, iusto earum obcaecati? Iste molestias, labore aspernatur porro sequi provident minus similique sit, odit voluptates perspiciatis!
  </div>
</div>

      <div className='w-[98.88vw] ml-[-15vw] h-[0.5px] bg-neutral-800 opacity-50 mb-10'> </div>
      
      <div className=" min-h-[90vh] mr-6">

        <BentoGrid/>
        
      </div>

      


    
    </main>
    
  );
}
