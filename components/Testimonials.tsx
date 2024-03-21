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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
const Testimonials = () => {

   
  const [Testimonials, setTestimonials] = useState<any>([]);
  const { data } = useUserStore();

  useEffect(() => {
    if (data) {
        const Data = data[1].testimonials;
      setTestimonials(Data)
    }
  }, [data]);
  
  if( !data){
    return <div className='h-[100vh] w-full  flex items-center justify-center'>
        <Spinner label="Loadding.." color="default" labelColor="foreground"/>
    </div>
   }
  

  return (
    <div className='mt-10 px-5'>
        <h2 className=' font-semibold mb-5'>Testimonials</h2>
        <div className='flex items-center justify-center w-full'>  
        <Carousel className="  max-w-md lg:max-w-4xl" >
      <CarouselContent className="-ml-1  w-full" >
        {Testimonials.map(( testimonial:any, index:any) => (
          <CarouselItem key={index} className="pl-1 lg:basis-1/3   grid w-full" >
            <div className="p-1">
            <Card key={testimonial._id} className=' rounded-none  py-1   h-80  md:h-96  items-center dark:bg-[#070707]'>
                
              <CardHeader className='flex items-center gap-2 flex-row  m-0'>
                <Image src={testimonial?.image?.url}   alt="testimonial"  height={30} width={30}   className=' drop-shadow-xl  items-center    object-cover '/>
             <div>
             <CardTitle className='flex items-center gap-2 whitespace-nowrap'> {testimonial?.name}</CardTitle>
             <span className='text-xs text-gray-500 whitespace-nowrap'>{testimonial?.position}</span>
             </div>
                 </CardHeader>
                <CardContent className="flex aspect-square justify-center pb-2  mt-0">
                  <p className='text-sm dark:text-gray-400 mb-2'>{testimonial?.review}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent> 
      <CarouselPrevious/>
     <CarouselNext/>
    </Carousel>
    </div>    
        </div>
  
  )
}

export default Testimonials