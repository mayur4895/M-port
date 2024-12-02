
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'
import { PiCopyrightThin } from 'react-icons/pi'

const MainLayout = ({children}: {children: React.ReactNode}) => {


  return (
    <>
     <div className='   flex flex-row gap-5 w-full'>
     <Sidebar/>
     
     <div className=' flex  justify-center   flex-col      lg:max-w-[calc(100%-250px)] w-full  lg:ml-[250px]  ml-0  lg:mt-0 mt-[50px]'>
         {children} 
     </div>
     </div>
      
    </>
  )
}

export default MainLayout