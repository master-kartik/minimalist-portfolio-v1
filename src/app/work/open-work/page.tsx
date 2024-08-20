
import React from "react";
import projectdata from "@/data/projectdata";
import Image from "next/image";
import JoinWaitlistButton from "@/components/Button";
import Link from "next/link";
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const WorkPage = ({ searchParams }: Props) => {
  const id = Number(searchParams._id);
  const fetchedData = projectdata.find(
    (data) => data.id === id
  );
  if (fetchedData?.title === undefined)
    return (
      <div className=" text-4xl font-semibold tracking-[-0.1em] text-center my-[30vh]">
        oops, page not found
      </div>
    );
  return (
    <div className="text-center flex flex-col items-center justify-center  mt-16 md:mt-0 tracking-tighter">
      <header className="h-56 w-full flex flex-col items-center justify-center text-left md:text-center">
        <Image
          className="relative w-[100vw] h-56 object-cover"
          objectFit="cover"
          width={720}
          height={640}
          alt="an image of white"
          src={
            "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        ></Image>
        <div className="flex gap-5">
          {/* <Image
            src={"/assets/github-logo.png"}
            alt="Social Icon"
            className="relative bottom-5  w-8 h-8 top-auto duration-100"
            width={24}
            height={24}
          />
          <Image
            src={"/assets/github-logo.png"}
            alt="Social Icon"
            className="relative bottom-5  w-8 h-8 top-auto duration-100"
            width={24}
            height={24}
          /> */}
        </div>
      </header>
      <article className="flex flex-col text-balance items-left justify-center w-[85vw] md:w-[70vw] text-left tracking-tight">
        <h1 className=" relative w-[85vw] md:w-[70vw] text-left mt-4 mb-24 font-bold text-3xl ">
          {fetchedData?.title + ": " + fetchedData?.desc ||
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, vero!"}
        </h1>
        <div className="fixed bottom-4 right-8">
          <Link className="z-50" target="_blank" href={fetchedData?.link}><JoinWaitlistButton textVal={""} /></Link>
        </div>
        <h3 className="blog-heading">{fetchedData.h1 || "none"}</h3>
        <p>{fetchedData.d1 || "none"}</p>
        <br />
        <h3 className="blog-heading">{fetchedData.h2 || "none"}</h3>
        <ul  style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {fetchedData.d2.map(({ title, desc }, index) => {
            return (
              <li key={index}>
                {" "}
                <div className="">
                  <span className="font-bold">{title}</span>
                  <span> {" "}{desc}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <br />
        <h3 className="blog-heading">{fetchedData.h3 || "none"}</h3>
        <ul  style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {fetchedData.d3.map(({ title, desc }, index) => {
            return (
              <li key={index}>
                {" "}
                <div className="">
                  <span className="font-bold">{title}</span>
                  <span> {" "}{desc}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <br />
        <h3 className="blog-heading">{fetchedData.h4 || "none"}</h3>
        <p>{fetchedData.d4 || 'none'}</p>
        <br />
        <h3 className="font-semibold opacity-70">{fetchedData.date || "none"}</h3>
      </article>
    </div>
  );
};

export default WorkPage;
