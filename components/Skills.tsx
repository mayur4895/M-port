'use client'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useUserStore } from '@/hooks/Apistore';
import Image from 'next/image';  
import { Progress, Spinner } from '@nextui-org/react';
 
 
const Skills = () => {

   
  const [Skills, setSkills] = useState<any>([]);
  const { data } = useUserStore();

  useEffect(() => {
    if (data) {
        const SkillsReverse = data[1].skills.slice(0).reverse();
         
        
      setSkills(SkillsReverse)
    }
  }, [data]);
  
  
  if( !data){
    return <div className='h-[100vh] w-full  flex items-center justify-center'>
        <Spinner label="Loadding.." color="default" labelColor="foreground"/>
    </div>
   }

  return (
    <div className='mt-10 px-5'>
        <h2 className=' font-semibold mb-5'>Skills</h2>
        <div className='flex flex-wrap gap-10 justify-center items-center'>
             {Skills.map((skill:any,index:any)=>{
              return(
                <Card key={index} className=' rounded-none md:w-72 w-48 items-center dark:bg-[#070707]'>
              
                
             
                <CardHeader className='flex items-center gap-2 flex-row p-4'>
                <Image src={skill?.image?.url}   alt="skill"  height={30} width={30}   className=' drop-shadow-xl  items-center    object-cover '/>
                 </CardHeader>
                 <Progress
                color='success'
      size="sm"
      className='px-5 pb-5'
      radius="sm"
      classNames={{

        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label={   skill?.name}
      value={skill?.percentage}
      showValueLabel={true}
    />

                
              </Card>
              )
             })} 

        </div>
    </div>
  )
}

export default Skills