import Sidebar from '@/components/ui/Sidebar/sidebar'
import React from 'react'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
     <Sidebar/>
     
    <div className='bg-red-500  md:ml-[250px]'>
      {children}
    </div>
    </>
  )
}

export default MainLayout