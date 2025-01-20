import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-4 py-4'>
      <Link 
        href={"/"}
        className='flex items-center gap-1'
      >
        <Image 
          src="/vercel.svg"
          width={32}
          height={32}
          alt='Logo'
          className='max-sm:size-10'
        />
        <p className='text-[24px] text-white font-extrabold max-sm:hidden'>Yoom</p>
      </Link>
      <div className='flex-between gap-5'>
      <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar