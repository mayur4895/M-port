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
import {FaWordpress} from 'react-icons/fa'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { BsFillGrid1X2Fill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { RiAppsFill } from "react-icons/ri";
import { MdWeb } from "react-icons/md";
import { BiDiamond } from "react-icons/bi";
import { PiArrowUpRightThin } from "react-icons/pi";
import { Spinner } from '@nextui-org/react';
const ServiceICon:any = {
  "App Development": <BsFillGrid1X2Fill size={22}  className='text-orange-500'/>,
  "Web & App ":<MdWeb size={22} className='text-green-500'/>,
  "UI/UX Solutions":<RiAppsFill  size={22} className='text-rose-500'/>,
  "Global Marketing":<HiSpeakerphone size={22} className='text-yellow-500'/>,
  "Brand Consultant":<BiDiamond size={22} className='text-purple-500'/>,
  "Wordpress Development":<FaWordpress size={22} className='text-blue-500'/>
}
const Services = () => {

   
  const [Services, setServices] = useState<any>([]);
  const { data } = useUserStore();

  useEffect(() => {
    if (data) {
      setServices(data[1].services);
    }
  }, [data]);
  
  if( !data){
    return <div className='h-[100vh] w-full  flex items-center justify-center'>
        <Spinner label="Loadding.." color="default" labelColor="foreground"/>
    </div>
   }

  return (
    <div className='mt-10 px-5'>
        <h2 className=' font-semibold mb-5'>Services</h2>
        <div className='flex flex-wrap gap-10 justify-center items-center'>
             {Services.map((service:any,index:any)=>{
              return(
                <Card key={index} className=' md:w-72 w-60 items-center dark:bg-[#070707]'>
                  <div className=' w-full relative'>
                  <Image src={service?.image?.url}  alt="service"  fill className='  items-center absolute  object-cover '/>
                  </div>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 whitespace-nowrap'>{ServiceICon[service?.name]} {service?.name}</CardTitle>
                
                </CardHeader>
                
                <CardFooter className='flex items-center gap-2'>
                <Dialog>
  <DialogTrigger> <Button variant={"outline"} className='flex items-center gap-2'>Check Now <PiArrowUpRightThin/></Button></DialogTrigger>
  <DialogContent className='flex flex-col items-center justify-center w-full'>
    <DialogHeader>
      <DialogTitle className='flex items-center gap-4 '>{ServiceICon[service?.name]} {service?.name}</DialogTitle>
      <DialogDescription>
        {service?.desc}
      </DialogDescription>
    </DialogHeader>
    <Image alt='service_img'  src={service?.image?.url} width={300} height={300} className='object-cover '/>

    <DialogFooter className=' flex items-center gap-2'>
     <label>Charge:</label> <span className='text-xl font-semibold'>{service?.charge}</span>
  </DialogFooter>
  </DialogContent>
   
</Dialog>

                  
                </CardFooter>
              </Card>
              )
             })}

        </div>
    </div>
  )
}

export default Services