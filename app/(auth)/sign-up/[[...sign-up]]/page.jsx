import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <main className='h-screen w-screen flex justify-center items-center'>
        <SignUp/>
    </main>
  )
}

export default page