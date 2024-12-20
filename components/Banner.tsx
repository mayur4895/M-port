'use client'
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState, useEffect } from "react";
import { useUserStore } from "@/hooks/Apistore";
import { Button } from "./ui/button";
import { GoDownload } from "react-icons/go";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { SparklesPreview } from "./AcertinityUi/SparklesPreview";
 

const Banner = () => {
  const { data } = useUserStore();
  const [Socials, setSocials] = useState<any>(data.social_handles);
  const [about, setAbout] = useState<any>(data.about);
  const handleDownload = () => {
 
    const link = document.createElement("a");
    link.href = data.about.resumeUrl;
    link.target = "blank"
    link.download = "Mayur_Shinde_Resume.pdf"; // Set the desired filename
    link.click();
  };
 

 
  
  return (
    <div>
      <div className="w-ful h-[200px] relative">
      <SparklesPreview/>
</div>
         <div className=" px-5  -mt-10 ">
         <div className="flex flex-wrap mb-5  w-full  justify-between items-center">
         <div className="flex gap-5 items-center">
         <Avatar className="h-[180px] w-[180px]  border-4 shadow-lg  border-white">
          <AvatarImage src={about?.avatar?.url} alt="@shadcn" className=" object-cover" />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
       <div className="flex flex-col mt-10">
        
       <h3 className="text-3xl  font-medium parkinsans-400 ">{about?.name}</h3>
        <span className=" text-gray-500">{about?.title}</span>
       </div>
         </div>
      
       <div className="mt-10 mx-5 flex gap-5 items-center"> 
       <Button variant={"outline"} onClick={handleDownload}  className="     font-semibold text-sm flex items-center gap-1">Download Cv <GoDownload /></Button>
       </div>
 

         </div>
 <Separator/>
         <div className="mt-8  grid  grid-cols-1 md:grid-cols-2 gap-10">
       <div>
       <h2 className=" font-medium mb-3">About Me</h2>
          <span className="text-sm text-gray-700 dark:text-white mb-10">{about?.subTitle}</span> <br /><br />
          <span className="text-sm text-gray-500 dark:text-zinc-400">{about?.description}</span>
       </div>
       
       <div className="flex flex-col  gap-5 ">
       <div className="flex flex-wrap gap-8  justify-between">
          <div >
            <h2 className=" font-medium mb-3">Location</h2>
            <span className="text-sm text-gray-600 dark:text-zinc-400">{about?.address}</span>
          </div>
          
          <div>
            <h2 className=" font-medium mb-3">Email</h2>
{data && <span className="text-sm text-gray-600 dark:text-zinc-400">{data?.email}</span>}
          </div>
          </div>
          <Separator/>
          <div className="flex flex-wrap gap-8  justify-between items-start">
          <div>
            <h2 className=" font-medium mb-2">Phone</h2>
            <span className="text-sm text-gray-600 dark:text-zinc-400">{about?.phoneNumber}</span>
          </div>
          <div className=" mr-8 flex-col flex items-start justify-start">
          <h2 className=" font-medium mb-2">Follow me</h2>
            <div className="flex  gap-4 items-center">
              {Socials.map((i:any)=>{
                return(
                  <Link href={i?.url} key={i?.platform}>{<Image src={i?.image?.url} height={20} width={20} alt={i?.platform} />}</Link>
                )
              })}
            </div>
          </div>
         </div>
         </div> 
         
         </div>
       
      </div>
  
      </div>
  
  );
};

export default Banner;
