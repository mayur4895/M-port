import { hostname } from 'os';
import {nextui}  from "@nextui-org/react";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        dangerouslyAllowSVG:true,
        remotePatterns:[
            
            {
                protocol: 'https',
                hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
                
                },
            
            
        ]
        
    },
    content: [
        // ...
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      darkMode: "class",
      plugins: [nextui()],



};
 