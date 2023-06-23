'use client'
import React, { useEffect, useState } from 'react'
import Data from '../Data/Data';
import Image from 'next/image';

const GameList = () => {
  const[games] = useState(Data);
  // useEffect(()=>{
  //   setGames(Data)
  // },[])
  return (
    <div className='grid-cols-3 md:grid-cols-7 grid p-4 text-center items-center sm:grid-cols-4'>
      {games.map((items)=>{
        return(
          <div className='flex items-center flex-col' key={items.id}>
            <Image className='bg-white rounded-full cursor-pointer hover:animate-bounce ' src={items.image} alt={items.name} width={36} height={36}/>
            <p>{items.name}</p>
          </div> 
        )
      })}
    </div>
  )
}

export default GameList
