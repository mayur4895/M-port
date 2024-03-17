import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "portfolio-image-store.s3.ap-south-1.amazonaws.com",
          "  img.clerk.com"
        ]
    }



};

export default nextConfig;
