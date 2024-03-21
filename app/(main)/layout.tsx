
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'
import { PiCopyrightThin } from 'react-icons/pi'

const MainLayout = ({children}: {children: React.ReactNode}) => {


  return (
    <>
     <div className='flex flex-row gap-5'>
     <Sidebar/>
     
     <div className=' w-full md:ml-[250px]   md:mt-0 mt-[50px]'>
       
       {children}
       
     <div className=' text-center  items-center flex justify-center h-20 border w-full mt-10'>
       <span className='flex gap-2 items-center'>   <PiCopyrightThin size={25}/> All rights reserved <Image alt="logo" className='bg-black  rounded-lg' height={20} width={20} src={"/m.png"}/> Developer</span>
     </div>
     </div>
     </div>
      
    </>
  )
}

export default MainLayout