'use client'

import { useUserStore } from '@/hooks/Apistore';
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image';
import { Spinner } from '@nextui-org/react';
import { MayurData } from '@/lib/data';
const Projects = () => {

    
 
  const { data,setUserData } = useUserStore();
  const [Projects, setProjects] = useState<any[]>([]); 
 
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
   
    const fetchLocalData = () => {
      setIsLoading(true);  
      try {
        const user = MayurData.user;  
        setUserData(user);  
        setProjects(user.projects)
      
      } catch (error) {
        setIsLoading(false)
        console.error("Error setting local data:", error);
      } finally {
        setIsLoading(false);  
      }
    }; 
    fetchLocalData();
  }, [setUserData]);


 

 
  if (!data || !Projects) {
    return (
      <div className='h-[100vh] w-full flex items-center justify-center'>
       <Spinner label="Loading..." color="default" labelColor="foreground" />
      </div>
    );
  }

  if( !data){
    return <div className='h-[100vh] w-full  flex items-center justify-center'>
        <Spinner label="Loadding.." color="default" labelColor="foreground"/>
    </div>
   }
  return (
    
    <div className='mt-10 px-5 text-center'>
        <h2 className=' text-3xl  mb-5'>Projects</h2>
        <div className='flex flex-wrap gap-10 justify-center items-center'>
             {Projects.map((project:any,index:any)=>{
              return(
                <Card key={index} className=' md:w-72 w-60  dark:bg-[#070707]  h-auto  overflow-hidden  cursor-pointer hover:shadow-lg transition-all '>
                  <div className=' h-44 md:h-48 w-60 md:w-72 relative '>
                  <Image src={project?.image?.url}  alt="project"  fill  className='   items-center absolute  object-fill md:object-cover '/>
                  </div>
                 
                
                <CardFooter className='flex flex-col gap-2 p-3 mb-3'>
                <span className='font-semibold'>Technologies Used</span>
              <div className='flex flex-row'>
                
              {project?.techStack.map((skill:any)=>{
                     return(<p className='text-xs'>{skill+ ' , '} </p>)
                    })}
              </div>
                </CardFooter>
              </Card>
              )
             })}

        </div>
    </div>
  )
}

export default Projects