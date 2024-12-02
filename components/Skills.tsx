'use client'
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
} from "@/components/ui/card";
import { useUserStore } from '@/hooks/Apistore';
import {
  FaDocker, FaReact, FaNodeJs, FaGithub, FaGit,
  FaDatabase, FaJs, FaGitAlt,
} from 'react-icons/fa';
import {
  SiMongodb, SiVercel, SiTypescript, SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandRedux, TbBrandNextjs, TbBrandGraphql,
  TbMoodEmpty,
} from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { Spinner } from '@nextui-org/react';
import { MayurData } from '@/lib/data';
import { RippleStyle } from './MagicUi/Ripple';

const iconMap: any = {
  FaDocker: FaDocker,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaGithub: FaGithub,
  FaGit: FaGit,
  FaDatabase: FaDatabase,
  FaJs: FaJs,
  SiMongodb: SiMongodb,
  TbBrandRedux: TbBrandRedux,
  RiJavascriptFill: RiJavascriptFill,
  FaGitAlt: FaGitAlt,
  SiVercel: SiVercel,
  SiTypescript: SiTypescript,
  TbBrandNextjs: TbBrandNextjs,
  TbBrandGraphql: TbBrandGraphql,
  SiTailwindcss: SiTailwindcss,
  DiRedis: DiRedis,
};

const Skills = () => {
 
 

  const { data, setUserData } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState<any[]>([]);
  useEffect(() => {
   
    const fetchLocalData = () => {
      setIsLoading(true);  
      try {
        const user = MayurData.user;  
        setUserData(user);  
        setSkills(user.skills)
      
      } catch (error) {
        setIsLoading(false)
        console.error("Error setting local data:", error);
      } finally {
        setIsLoading(false);  
      }
    }; 
    fetchLocalData();
  }, [setUserData]);


 

 
  if (!data || !skills) {
    return (
      <div className='h-[100vh] w-full flex items-center justify-center'>
       <Spinner label="Loading..." color="default" labelColor="foreground" />
      </div>
    );
  }

  return (
  
    <div className='   mt-10 px-4 h-[100vh] flex items-center flex-col justify-center'>
      
      <h2 className='text-3xl mb-5'>Skills</h2>
    
      <div className='flex flex-wrap gap-6 justify-center items-center z-50'>
        {skills.map((skill: any) => (
          <Card
            key={skill._id}
            className='rounded-lg shadow-md w-28 h-36 p-2 dark:bg-[#222]/20 flex flex-col items-center'
          >
            <CardHeader className='flex items-center gap-2 mb-4'>
              {skill.icon && iconMap[skill.icon] ? (
                <span className="text-4xl text-zinc-800 dark:text-gray-400">
                  {React.createElement(iconMap[skill.icon])}
                </span>
              ) : null}
              <span className='text-gray-500'>{skill.name}</span>
            </CardHeader>
          </Card>
        ))}
      </div>
  
    </div>
 
  );
};

export default Skills;
