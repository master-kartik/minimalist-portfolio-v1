"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink, SidebarProvider } from "../components/ui/sidebar";
import {
  IconArrowLeft,
  IconSchool,
  IconHome,
  IconBrandXbox,
  IconBriefcase,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <IconSchool className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Work",
      href: "/work",
      icon: (
        <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    // {
    //   label: "Side Quests",
    //   href: "/side-quest",
    //   icon: (
    //     <IconBrandXbox className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    //   ),
    // },
   
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "fixed left-0 top-0 w-full md:w-auto md:top-0 bg-none md:min-h-screen md:flex-row md:bg-gray-100 dark:bg-neutral-800 flex-1 justify-items-end overflow-hidden z-50 md:border-r-[0.5px] border-neutral-800 border-opacity-50",
        "h-auto" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-inherit  ">
          <motion.div className="flex flex-col flex-1 space-x-2 overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <motion.div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </motion.div>
          </motion.div>
        </SidebarBody>
      </Sidebar>
   
      
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex ml-12 justify-end items-center w-10 text-black py-1 relative z-20"
    >
      <Image src={'/assets/logo.png'} width={50} height={50} alt="Kartik" className=""/>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-xl tracking-tighter text-black dark:text-white whitespace-pre"
      >
        Kartik
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/about"
      className="font-normal flex justify-start -ml-2  items-center text-sm text-black py-1 w-10 relative z-20"
    >
      <Image src={'/assets/logo.png'} width={50} height={50} alt="Kartik" className=""/>
    </Link>
  );
};



  


