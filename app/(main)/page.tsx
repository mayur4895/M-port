"use client";

import Banner from "@/components/Banner";
 
import Projects from "@/components/Projects";
import { useUserStore } from "@/hooks/Apistore";
import { useEffect, useState } from "react";
import Skills from "@/components/Skills";
import { Spinner } from "@nextui-org/react";
 import { Education } from "@/components/Education";
import { MayurData } from "@/lib/data";

const MainComponent = () => {
  const { data, setUserData } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   
    const fetchLocalData = () => {
      setIsLoading(true);  
      try {
        const user = MayurData.user;  
        setUserData(user);  
      } catch (error) {
        console.error("Error setting local data:", error);
      } finally {
        setIsLoading(false);  
      }
    }; 
    fetchLocalData();
  }, [setUserData]);

 

  if (isLoading || !data) {
    return (
      <div className="h-[100vh] w-full flex items-center justify-center">
        <Spinner label="Loading..." color="default" labelColor="foreground" />
      </div>
    );
  }

  return (
    <div>
      <Banner /> 
      <Skills />
      <Projects /> 
      <Education />
 
    </div>
  );
};

export default MainComponent;
