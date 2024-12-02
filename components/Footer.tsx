import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="  border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
         <div>
         <h2 className=' text-2xl flex items-center justify-center gap-0 text-cyan-400 font-semibold'><Image src="/m.png" alt="logo" height={40} width={40}/> ayur.  </h2>
         </div>
          <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0">
            © {new Date().getFullYear()}  Mayur shinde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

