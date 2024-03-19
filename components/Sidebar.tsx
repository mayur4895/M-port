'use client'
import React from 'react'
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

const Sidebar = () => {
  return (
    <>
    <div className='hidden md:w-[250px] md:block h-full fixed inset-0 '>
      <div className='w-ful shadow-md border border-b-0 h-20 px-5  items-center flex'>LOGOX</div>
     
    <Command className="rounded-lg border shadow-md h-full ">
      <CommandInput placeholder="search here..." />
      <CommandList className=' h-auto'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem className="cursor-pointer">
            <CiHome  className="mr-2 h-4 w-4" />
            <span  className="text-black dark:text-zinc-200"><Link href="/">Home</Link></span>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiCrownLight  className="mr-2 h-4 w-4" />
            <span  className="text-black dark:text-zinc-200"><Link href="/services">Services</Link></span>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiStackThin className="mr-2 h-4 w-4" />
            <span  className="text-black dark:text-zinc-200"><Link href="/projects">Projects</Link></span>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiDiamondsFourThin   className="mr-2 h-4 w-4" />
            <label  className="text-black dark:text-zinc-200"><Link href="/skills">Skills</Link></label>
             
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiUsersThin className="mr-2 h-4 w-4" />
            <span  className="text-black dark:text-zinc-200"><Link href="/testimonials">Testimonials</Link></span>
        
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings" >
          
          <CommandItem className="cursor-pointer">
            <GearIcon className="mr-2 h-4 w-4" /> 
            <span  className="text-black dark:text-zinc-200">Settings</span>
          </CommandItem>
          <CommandItem className="cursor-pointer">
          <ModeToggle/>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>


    </div>
    <div className='md:hidden  fixed h-12 w-full  bg-white border-b dark:bg-black top-0 left-0 z-100'>
      
    <Sheet>
  <SheetTrigger className='md:hidden fixed  top-2 left-2  z-100'><TbMenu size={25}/></SheetTrigger>
  <SheetContent side={"left"}>
    <SheetHeader>
      <SheetTitle>Brandx</SheetTitle>
      <SheetDescription>
         
      </SheetDescription>
    </SheetHeader>

    <Command className="rounded-lg border shadow-md ">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>
            <CiHome  className="mr-2 h-4 w-4" />
            <span  className="text-black dark:text-zinc-200">Home</span>
          </CommandItem>
          <CommandItem  className=' cursor-pointer'>
            <PiCrownLight  className="mr-2 h-4 w-4" />
            <span  className="text-black dark:text-zinc-200 cursor-pointer"><Link href={"/services"}>Services</Link></span>
          </CommandItem>
          <CommandItem>
            <PiStackThin className="mr-2 h-4 w-4" />
            <span  className="text-black dark:text-zinc-200">Projects</span>
          </CommandItem>
          <CommandItem>
            <PiDiamondsFourThin   className="mr-2 h-4 w-4" />
            <label  className="text-black dark:text-zinc-200">Skills</label>
             
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiUsersThin className="mr-2 h-4 w-4" />
            <span  className="text-black dark:text-zinc-200">Testimonials</span>
        
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          
          <CommandItem className="cursor-pointer">
            <GearIcon className="mr-2 h-4 w-4" />  
            <span  className="text-black dark:text-zinc-200"> Settings   </span>
          </CommandItem>
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