'use client'
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import { useUserStore } from '@/hooks/Apistore';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Skills from '@/components/Skills';
import { Spinner } from '@nextui-org/react';
import Testimonials from '@/components/Testimonials';
import { TimeLine } from '@/components/TimeLine';
 

const MainComponent = () => {
  const { data, setUserData } = useUserStore();
 const [isLoding,setisLoding] = useState(false);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setisLoding(true);
        const response = await axios.get(
          'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
        );

        const user = Object.keys(response.data).map((key) => response.data[key]);
        setUserData(user);
      } catch (error) {
        setisLoding(false)
        console.error('Error fetching data:', error);
      }finally{
        setisLoding(false);
      }
    };

    fetchDataFromApi();
  }, []);

   console.log(data);
 if(isLoding || !data){
  return <div className='h-[100vh] w-full  flex items-center justify-center'>
      <Spinner label="Loadding.." color="default" labelColor="foreground"/>
  </div>
 }
  return (
    <div>
      <Banner />
      <Services />
      <Projects />
      <Skills/>
      <TimeLine/>
      <Testimonials/>
      
    </div>
  );
};

export default MainComponent;
