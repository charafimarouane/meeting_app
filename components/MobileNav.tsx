'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
  
const MobileNav = () => {
    const pathname = usePathname()

    return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image 
                    src="/icons/hamburger.svg"
                    width={36}
                    height={36}
                    alt='hamburger icon'
                    className='cursor-pointer sm:hidden '
                />
            </SheetTrigger>
            <SheetContent side="left" className='border-none bg-dark-1'>
                <SheetHeader className='hidden'>
                    <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
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
                    <p className='text-[24px] text-white font-extrabold'>Yoom</p>
                </Link>

                <div className='h-[calc(100vh-72px)] flex flex-col justify-between overflow-y-auto'>
                    <SheetClose asChild>
                        <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                        {sidebarLinks.map((link) => {
                            const isActive = pathname === link.route                             
                            
                            return(
                                <SheetClose asChild key={link.route}>
                                    <Link
                                        href={link.route}
                                        key={link.route}
                                        className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", {"bg-blue-500": isActive})}
                                    >
                                        <Image
                                            src={link.imgUrl}
                                            alt={link.label}
                                            width={20}
                                            height={20}
                                            />
                                        <p className='font-semibold'>{link.label}</p>
                                    </Link>
                                </SheetClose>
                            )

                        })}
                        </section>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>

    </section>
  )
}

export default MobileNav