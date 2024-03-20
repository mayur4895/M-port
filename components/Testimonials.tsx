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
import { Progress } from '@nextui-org/react';

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
  
  
  

  return (
    <div className='mt-10 px-5'>
        <h2 className=' font-semibold mb-5'>Testimonials</h2>
        <div className='flex items-center justify-center w-full'>  
        <Carousel className="  max-w-md">
      <CarouselContent className="-ml-1 ">
        {Testimonials.map(( testimonial:any, index:any) => (
          <CarouselItem key={index} className="pl-1  w-full ">
            <div className="p-1">
            <Card key={testimonial._id} className=' rounded-none  p-1   h-80  items-center dark:bg-zinc-900'>
                
              <CardHeader className='flex items-center gap-2 flex-row  m-0'>
                <Image src={testimonial?.image?.url}   alt="testimonial"  height={30} width={30}   className=' drop-shadow-xl  items-center    object-cover '/>
             <div>
             <CardTitle className='flex items-center gap-2 whitespace-nowrap'> {testimonial?.name}</CardTitle>
             <span className='text-xs text-rose-500 whitespace-nowrap'>{testimonial?.position}</span>
             </div>
                 </CardHeader>
                <CardContent className="flex aspect-square justify-center p  mt-0">
                  <p className='md:text-sm text-xs text-gray-600'>{testimonial?.review}</p>
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
             {/* {   
             
             
             Testimonials.map((testimonial:any)=>{
              return(
                <Card key={testimonial._id} className=' rounded-none md:w-72 w-48 items-center dark:bg-zinc-900'>
              
                
             
                <CardHeader className='flex items-center gap-2 flex-row p-4'>
                <Image src={testimonial?.image?.url}   alt="testimonial"  height={30} width={30}   className=' drop-shadow-xl  items-center    object-cover '/>
             <div>
             <CardTitle className='flex items-center gap-2 whitespace-nowrap'> {testimonial?.name}</CardTitle>
             <span className='text-sm text-gray-500 whitespace-nowrap'>{testimonial?.position}</span>
             </div>
                 </CardHeader>
 
                
              </Card>
              )
             })}  */}

        </div>
  
  )
}

export default Testimonials