'use client'
import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {MdCreateNewFolder,MdOutlineLogin} from 'react-icons/md'

const Header = () => {
    const {data: session} = useSession()
    console.log("Session", session);

    if (session && session.user) {
        return (
            <div className='flex items-center justify-between p-4 border-b-[#ed0c0c] border-2'>
              <div className='flex rounded-full gap-2'>
              <Image src='/images/network.png' alt='logo' width={50} height={50} />
              <div className='sm:text-3xl text-xl'><strong className='font-bold text-slate-200 '>Next</strong>
              <span className='font-semibold text-yellow-600 '>Auth</span></div>
              </div>
              <div className='flex items-center gap-3'>
                <button className='bg-blue-600 p-2 rounded-lg'><span className='sm:block hidden'>Create Post</span><MdCreateNewFolder className='sm:hidden'/></button>
                <button className='bg-green-700 p-2 rounded-lg' onClick={()=>signOut()}><span className='sm:block hidden'>SignOut</span><MdOutlineLogin className='sm:hidden'/></button>
                <Image className='bg-white rounded-full sm:w-[54px] sm:h-[54px] h-[30px] w-[30px]' src={session.user.image} alt='profile' width={36} height={36}  />
            </div>
            </div>
          )
    }
    return (
        <div className='flex items-center justify-between p-4 border-b-[#ed0c0c] border-2'>
          <div className='flex rounded-full gap-2'>
          <Image src='/images/network.png' alt='logo' width={50} height={50} />
          <div><strong className='font-bold text-slate-200 text-3xl'>Next</strong>
          <span className='font-semibold text-yellow-600 text-3xl'>Auth</span></div>
          </div>
          <div className='flex items-center gap-3'>
            <button className='bg-blue-600 p-2 rounded-lg'><span className='sm:block hidden'>Create Post</span><MdCreateNewFolder className='sm:hidden'/></button>
            <button className='bg-green-700 p-2 rounded-lg' onClick={()=>signIn()}><span className='sm:block hidden'>Sign In</span><MdOutlineLogin className='sm:hidden'/></button>
            {/* <Image className='bg-white rounded-full' src='/images/logo.png' alt='profile' width={50} height={50} /> */}
        </div>
        </div>
      )
 
}

export default Header
