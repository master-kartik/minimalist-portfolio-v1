import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BentoGrid: React.FC = () => {
  return (
    <div className="tracking-tight flex flex-col gap-4 w-full px-4 py-6">


      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="border border-gray-300 rounded-lg p-4 bg-white md:col-span-4 md:row-span-3">
          <div className="relative w-full h-64 md:h-[70vh] overflow-hidden rounded-lg">
            <Image 
              src="https://framerusercontent.com/images/WAysxCUGPong6OJ0mnoRxfkSfRI.png?scale-down-to=1024" 
              alt="Profile" 
              layout="fill"
              objectFit="cover"
              className="object-center hover:scale-110 duration-500"
            />
          </div>
          <Link href="/about" className="mt-4 inline-flex items-center bg-white text-black rounded-full px-4 py-2 border border-gray-300">
            👀 Sneak Peek of my life
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="border bg-grid-small-black/[0.4]  border-gray-300 rounded-lg p-4 bg-white flex items-center md:col-span-2">
          <Link href="https://airtable.com/appMD0f5N6hJ8Ijoj/pag72380iWxDoPnuv/form" className="flex items-center" target="_blank" rel="noopener noreferrer">
            <div className="bg-green-300 shadow shadow-green-500/50 w-3 h-3 rounded-full mr-2"></div>
            <span className="font-medium">Available for a Project</span>
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 bg-white flex items-center justify-center md:col-span-2">
          <div className="flex space-x-4">
            <SocialLink href="https://www.instagram.com/jahnvi_batra/" icon="/assets/brand-linkedin.png" />
            <SocialLink href="https://www.linkedin.com/in/jahnvi-batra-1826361b3/" icon="/assets/brand-github.png" />
            <SocialLink href="#" icon="/assets/brand-twitter.png" />
            <SocialLink href="https://layers.to/batrajahnvi1053" icon="/assets/bolt.png" />
            <SocialLink href="https://www.behance.net/jahnvibatra" icon="/assets/brand-instagram.png" />
          </div>
        </div>

        <Link href="/Play" className="border [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border-gray-300 rounded-lg p-4 bg-white md:col-span-2">
          <div className="relative h-40 md:h-60 lg:h-72 overflow-hidden">
            <Image src="https://framerusercontent.com/images/WAysxCUGPong6OJ0mnoRxfkSfRI.png?scale-down-to=1024" alt="Carousel" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </Link>

        <Link href="https://drive.google.com/file/d/1enaLy5kdIK3Gphpzgv5ZVW3eP9aNGvan/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="border border-gray-300 rounded-lg p-4 bg-white flex items-center justify-between md:col-span-6">
          <span className="font-medium">📃 Read my CV</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-lg">
    <Image src={icon} alt="Social Icon" className='w-6 h-6 opacity-50 hover:opacity-70  hover:scale-125 duration-300' width={24} height={24} />
  </Link>
);

export default BentoGrid;
