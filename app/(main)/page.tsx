'use client'
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import { useUserStore } from '@/hooks/Apistore';
import axios from 'axios';
import { useEffect } from 'react';
import Skills from '@/components/Skills';

const MainComponent = () => {
  const { data, setUserData } = useUserStore();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await axios.get(
          'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
        );

        const user = Object.keys(response.data).map((key) => response.data[key]);
        setUserData(user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

   console.log(data);

  return (
    <div>
      <Banner />
      <Services />
      <Projects />
      <Skills/>
    </div>
  );
};

export default MainComponent;
