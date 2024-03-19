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
import { Button } from './ui/button';
 
import { Progress } from "@/components/ui/progress"
 
 
const Skills = () => {

   
  const [Skills, setSkills] = useState<any>([]);
  const { data } = useUserStore();

  useEffect(() => {
    if (data) {
        const SkillsReverse = data[1].skills.slice(0).reverse();
         
        
      setSkills(SkillsReverse)
    }
  }, [data]);
  
  
  

  return (
    <div className='mt-10 px-5'>
        <h2 className=' font-semibold mb-5'>Skills</h2>
        <div className='flex flex-wrap gap-10 justify-center items-center'>
             {Skills.map((skill:any)=>{
              return(
                <Card key={skill._id} className=' md:w-72 w-60 items-center '>
              
                
             
                <CardHeader className='flex items-center gap-2 flex-row'>
                <Image src={skill?.image?.url}   alt="skill"  height={50} width={50}   className='  items-center    object-cover '/>
                  <CardTitle className='flex items-center gap-2 whitespace-nowrap'> {skill?.name}</CardTitle>
                
                </CardHeader>
                
                <CardFooter className='flex items-center gap-2'>
                 
                </CardFooter>
              </Card>
              )
             })} 

        </div>
    </div>
  )
}

export default Skills