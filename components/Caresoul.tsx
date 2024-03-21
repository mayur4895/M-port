// components/SlickCarousel.tsx
import React from "react";
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
interface CarouselItem {
  _id: number;
  name: string;
  body: string;
   review:string;
  position:string;
   image:{
    url:string
   }
}
interface SlickCarouselProps{
    data:any[];
}
const SlickCarousel = ({data}:SlickCarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className=" flex items-center justify-center h-[350px] w-[90%] mb-5">
      {data.map((item: CarouselItem) => (
        <Card   key={item._id} className=' rounded-none  py-5  h-[280px]  w-auto items-center dark:bg-[#070707]'>
                
        <CardHeader className='flex items-center gap-2 flex-row  m-0'>
          <Image src={item?.image?.url}   alt="testimonial"  height={30} width={30}   className=' drop-shadow-xl  items-center    object-cover '/>
       <div>
       <CardTitle className='flex items-center gap-2 whitespace-nowrap'> {item?.name}</CardTitle>
       <span className='text-xs text-gray-500 whitespace-nowrap'>{item?.position}</span>
       </div>
           </CardHeader>
          <CardContent className="flex aspect-square justify-center pb-2  mt-0">
            <p className='text-sm dark:text-gray-400 mb-2'>{item?.review}</p>
          </CardContent>
        </Card>
        
            
      ))}
    </Slider>
  );
};

export default SlickCarousel;
