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
 
import Caresoul from './Caresoul';
import MySwiper from './Caresoul';
import Carousel from './Caresoul';
import SlickCarousel from './Caresoul';
 
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
    <div className='mt-10 px-5 w-full '>
        <h2 className=' font-semibold mb-5'>Testimonials</h2>
        <SlickCarousel data={Testimonials}/>
 
          </div>
  
  )
}

export default Testimonials