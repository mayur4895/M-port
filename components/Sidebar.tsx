'use client'
import React, { useState } from 'react'
import {
    BackpackIcon,
    CalendarIcon,
    Component1Icon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    HomeIcon,
    LayersIcon,
    PersonIcon,
    RocketIcon,
  } from "@radix-ui/react-icons"
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

  import { PiCrownLight, PiDiamondsFourThin, PiStackThin, PiSuitcaseThin, PiUsersThin } from "react-icons/pi";
import { CiHome } from 'react-icons/ci';
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { MdTimeline } from 'react-icons/md'
import { useSearchParams } from 'next/navigation'
import { cursorTo } from 'readline'

const Sidebar = () => {
   const menuItems =[
    {
        name: 'Home',
        path: '/',
        icon: <CiHome className="mr-2 w-4 h-4" />
    },{
      name: 'Services',
      path: '/services',
      icon:<PiCrownLight  className="mr-2 h-4 w-4" />
    },
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
      name: 'TimeLine',
      path: '/timeline',
      icon: <MdTimeline    className="text-gray-500 mr-2 h-4 w-4" />
    },{
      name: 'Testimonials',
      path: '/testimonials',
      icon: <PiUsersThin className="mr-2 h-4 w-4" />
    }

   ]
    
   
  
  const [isopen,setisopen] = useState(false);
  console.log(location.pathname);
  
  return (
    <>
    <div className='hidden md:w-[250px] md:block h-full fixed inset-0 '>
      <div className='w-ful shadow-md border border-b-0 h-20 px-5  items-center flex'>LOGOX</div>
     
    <Command className="rounded-lg border shadow-md h-full ">
      <CommandInput placeholder="search here..." />
      <CommandList className=' h-auto'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
       {menuItems.map((item)=>{
        return(  
           <CommandItem key={item.path} className={`${location.pathname ===  item.path ? "bg-green-100 dark:bg-blue-900":""} cursor-pointer`} onClick={()=>{setisopen(false)}}>
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
    <div className='md:hidden  fixed h-12 w-full  bg-white border-b dark:bg-black top-0 left-0  z-40'>
      
    <Sheet  open={isopen} onOpenChange={setisopen}>
  <SheetTrigger className='md:hidden fixed  top-2 left-2  z-100'><TbMenu size={25}/></SheetTrigger>
  <SheetContent side={"left"}>
    <SheetHeader>
      <SheetTitle>Brandx</SheetTitle>
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
           <CommandItem key={item.path} className={`${location.pathname ===  item.path ? "bg-green-100":""} cursor-pointer`} onClick={()=>{setisopen(false)}}>
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