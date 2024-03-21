'use client'
import { useUserStore } from "@/hooks/Apistore"; 
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
 

export function TimeLine() {

    const [TimeLine, setTimeLine] = useState<any>([]);
  const { data } = useUserStore();

  useEffect(() => {
    if (data) {
        
        const Data = data[1].timeline;
      setTimeLine(Data)
    }
  }, [data]);
  
  if( !data){
    return <div className='h-[100vh] w-full  flex items-center justify-center'>
        <Spinner label="Loadding.." color="default" labelColor="foreground"/>
    </div>
   }
  
  return (
 
    <div className='mt-10 px-5 '>
        <h2 className=' font-semibold mb-5'>TimeLine</h2>
        <div className="flex items-center justify-center flex-col p-10">  
    <ol className="relative border-s border-gray-200 dark:border-gray-700">

        {
           TimeLine.map(( cur:any, index:any) => 
           
           
           (
            <li className="mb-10 ms-6" key={index}>
            <span className="absolute flex items-center justify-center w-2 h-2 bg-cyan-500 rounded-full  -start-1 ring-8 ring-cyan-100 dark:ring-gray-900 dark:bg-blue-900">
              {/* Icon (e.g., SVG or other) */}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {cur?.jobTitle}
              
              <span className="bg-yellow-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                {cur?.company_name}
              </span>
            </h3>
            <span className="text-gray-400 flex items-center gap-1 mb-2"><CiLocationOn  className="text-yellow-800 dark:text-yellow-500"/>{cur?.jobLocation}</span>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
               { new Date(cur?.startDate).toLocaleDateString()} -  { new Date(cur?.endDate).toLocaleDateString()}

            </time>
            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
               {cur?.summary}
            </p>
            {/* Additional content here */}
          </li>
          
           ) )
        }
  {/* Add more timeline items as needed */}
</ol>
</div>
 </div>

  );
}
