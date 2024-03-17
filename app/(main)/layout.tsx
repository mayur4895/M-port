
import Sidebar from '@/components/Sidebar'
import React from 'react'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
     <div className='flex flex-row gap-5'>
     <Sidebar/>
     
     <div className=' w-full md:ml-[250px]   md:mt-0 mt-[50px]'>
       
       {children}
     </div>
     </div>
    </>
  )
}

export default MainLayout