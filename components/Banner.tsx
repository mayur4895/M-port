'use client'
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState, useEffect } from "react";
import { useUserStore } from "@/hooks/Apistore";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "./ui/separator";

const Banner = () => {
  const [about, setAbout] = useState<any>([]);
  const { data } = useUserStore();

  useEffect(() => {
    if (data) {
      setAbout(data[1].about);
    }
  }, [data]);

  

  return (
    <div>
      <div className="w-ful h-[200px] relative">
        <Image src={"/banner.jpg"} fill alt="bg" className=" -z-10 object-cover" />
</div>
         <div className=" px-5  -mt-10 z-10">
         <div className="flex flex-wrap mb-5  w-full  justify-between items-center">
         <div className="flex gap-5 items-center">
         <Avatar className="h-[150px] w-[150px]  border-4 shadow-lg border-white">
          <AvatarImage src={about?.avatar?.url} alt="@shadcn" className=" object-cover" />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
       <div className="flex flex-col mt-10">
        
       <h3 className="text-3xl  font-medium">{about?.name}</h3>
        <span className=" text-gray-500">{about?.title}</span>
       </div>
         </div>
      
       <div className="mt-10 flex gap-5 items-center">
      

        
       </div>
 

         </div>
 <Separator/>
         <div className="mt-8  grid  grid-cols-1 md:grid-cols-2 gap-10">
       <div>
       <h2 className=" font-medium mb-3">About Me</h2>
          <span className="text-sm text-gray-700 mb-10">{about?.subTitle}</span> <br />
          <span className="text-sm text-gray-500">{about?.description}</span>
       </div>
       
       <div className="flex flex-col gap-5">
          <div>
            <h2 className=" font-medium mb-3">Location</h2>
            <span className="text-sm text-gray-600">{about?.address}</span>
          </div>
          <Separator/>
          <div>
            <h2 className=" font-medium mb-3">Phone</h2>
            <span className="text-sm text-gray-600">{about?.phoneNumber}</span>
          </div>
         </div>
         </div> 
         
         </div>
       
      </div>
      
  
  );
};

export default Banner;
