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
  import { PiCrownLight, PiDiamondsFourThin, PiStackThin, PiSuitcaseThin, PiUsersThin } from "react-icons/pi";
import { CiHome } from 'react-icons/ci';

const Sidebar = () => {
  return (
    <div className='w-[250px] h-full fixed inset-0 '>
      <div className='w-ful shadow-md border h-20 px-5  items-center flex'>LOGOX</div>
      <Command className="rounded-lg border shadow-md ">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>
            <CiHome  className="mr-2 h-4 w-4" />
            <span  className="text-black">Home</span>
          </CommandItem>
          <CommandItem>
            <PiCrownLight  className="mr-2 h-4 w-4" />
            <span  className="text-black">Services</span>
          </CommandItem>
          <CommandItem>
            <PiStackThin className="mr-2 h-4 w-4" />
            <span  className="text-black">Projects</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <PiDiamondsFourThin   className="mr-2 h-4 w-4" />
            <label  className="text-black">Skills</label>
             
          </CommandItem>
          <CommandItem>
            <PiUsersThin className="mr-2 h-4 w-4" />
            <span  className="text-black">Testimonials</span>
        
          </CommandItem>
          <CommandItem>
            <GearIcon className="mr-2 h-4 w-4" /> 
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>

    </div>
  )
}

export default Sidebar