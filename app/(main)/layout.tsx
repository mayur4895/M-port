
import Sidebar from '@/components/Sidebar'
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
       <span className='flex gap-2 items-center'>   <PiCopyrightThin/>  Ms developer  all right reserved from 2024-2026</span>
     </div>
     </div>
     </div>
      
    </>
  )
}

export default MainLayout