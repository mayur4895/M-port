'use client'
import React, { useState } from 'react'
 
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { TbMenu } from "react-icons/tb";
  import { SlGraduation } from "react-icons/sl";
  import {   PiDiamondsFourThin, PiStackThin, PiSuitcaseThin, PiUsersThin } from "react-icons/pi";
import { CiHome } from 'react-icons/ci';
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { MdPhone, MdTimeline } from 'react-icons/md'
 import Image from 'next/image'
import { FaRegPaperPlane } from 'react-icons/fa';

const Sidebar = () => {
   const menuItems =[
    {
        name: 'Home',
        path: '/',
        icon: <CiHome className="mr-2 w-4 h-4" />
    } ,
    {
      name: 'Projects',
      path: '/projects',
      icon: <PiStackThin className="mr-2 h-4 w-4" />
    }
    ,
    {
      name: 'Skills',
      path: '/skills',
      icon: <PiDiamondsFourThin   className="mr-2 h-4 w-4" />
    },
    {
      name: 'Education',
      path: '/education',
      icon: <SlGraduation     className="text-gray-500 mr-2 h-4 w-4" />
    },
    {
      name:'Contact Me',
      path: '/contact',
      icon: <FaRegPaperPlane     className="text-gray-500 mr-2 h-3 w-3" />
    }

   ]
    
   
  

  
  
  return (
    <>
    <div className='hidden lg:w-[250px] lg:block h-full fixed inset-0 '>
      <div className='w-ful shadow-md border border-b-0 h-20 px-5  items-center flex'>
        <div className='flex gap-2 items-center'>
        <h2 className=' text-2xl flex items-center justify-center gap-0 text-cyan-400 font-semibold'><Image src="/m.png" alt="logo" height={40} width={40}/> ayur.  </h2>
        </div>
      </div>
     
    <Command className="rounded-lg border shadow-md h-full ">
      <CommandInput placeholder="search here..." />
      <CommandList className=' h-auto'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
       {menuItems.map((item)=>{
        return(  
           <CommandItem key={item.path} className="cursor-pointer" >
           {item.icon}
        <span  className="text-black dark:text-zinc-200"><Link href={item.path}>{item.name}</Link></span>
      </CommandItem> 
      )
       })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings" >
           
          <CommandItem className="cursor-pointer">
          <ModeToggle/>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>


    </div>
    <div className='lg:hidden  fixed h-12 w-full  bg-white border-b dark:bg-black top-0 left-0  z-40'>
      
    <Sheet >
  <SheetTrigger className='lg:hidden fixed  top-2 left-2  z-100'><TbMenu size={25}/></SheetTrigger>
  <SheetContent side={"left"}>
    <SheetHeader>
      <SheetTitle className='flex items-center gap-2'>
        <Image src={"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png"}  alt="logo" height={40} width={40} className=' object-fill'/>
        Portfolio.
      </SheetTitle>
      <SheetDescription>
         
      </SheetDescription>
    </SheetHeader>
    <Command className="rounded-lg border shadow-md h-full ">
      <CommandInput placeholder="search here..." />
      <CommandList className=' h-auto'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
        {menuItems.map((item)=>{
        return(  
          <CommandItem key={item.path} className="cursor-pointer" >
           {item.icon}
        <span  className="text-black dark:text-zinc-200"><Link href={item.path}>{item.name}</Link></span>
      </CommandItem> 
      )
       })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings" >
           
          <CommandItem className="cursor-pointer">
          <ModeToggle/>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </SheetContent>
</Sheet>
    </div>

    </>
  )
}

export default Sidebar