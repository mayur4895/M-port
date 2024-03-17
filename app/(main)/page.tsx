'use client'
import Banner from '@/components/Banner';
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/hooks/Apistore';
 
 
 
import React, { useEffect, useState } from 'react'
import Services from '../../components/Services';

const MainComponent =  () => {

const {data,setUserData} = useUserStore();


useEffect(() => {
    const fetchDataFromApi = async (): Promise<void> => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        const apiData = await response.json();
        const user = Object.keys(apiData).map((key) => apiData[key]);
        setUserData(user);  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataFromApi();
},[]);
 
console.log(data);

       
  return (
    <div>
       <Banner/>
       <Services/>
    </div>
  )
}

export default MainComponent
