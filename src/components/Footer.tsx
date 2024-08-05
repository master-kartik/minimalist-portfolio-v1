/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4KtEJjN8FoK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-6 mt-12 ">
      <div className='w-[98.88vw] h-[0.5px] bg-neutral-800 opacity-50 mb-10'> </div>
      <div className="container max-w-3xl mx-auto px-4 flex flex-col items-center gap-4 text-center ">
        <div className="grid gap-1">
          <h3 className="text-lg font-bold tracking-tighter">Kartik Kochhar <span> &#x2022;</span> <span className="text-base font-light">Full-Stack Web Developer</span></h3>
          
        </div>
        <div className="flex items-center gap-4 text-neutral-700">
          <Link
            href="#"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            <GitlabIcon className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            <LinkedinIcon className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            <TwitterIcon className="w-5 h-5" />
          </Link>
        </div>

      </div>
  <div className="mt-[5vh] text-md tracking-tight text-center opacity-80 mb-2 text-sm text-neutral-700">Engineered with ♥️  and NextJS @2024 Kartik Kochhar All rights reserved</div> 
    </footer>
  )
}

function GitlabIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}