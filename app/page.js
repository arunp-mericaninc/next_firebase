'use client'
import GameList from '@/components/Home/GameList'
import Hero from '@/components/Home/Hero'
import Post from '@/components/Home/Post'
import Search from '@/components/Home/Search'
import { app } from '@/utils/firebase'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const db=getFirestore(app);
  const [post, setPost] = useState([])
  useEffect(()=>{
    getPost();
  }, [])
  const getPost = async()=>{
    const querySnapshot = await getDocs(collection(db, "post"));
querySnapshot.forEach((doc) => {
  setPost(post =>[...post,doc.data()])
  // console.log(`${doc.id} => ${doc.data()}`);
});
  }
  return (
    <div className='flex flex-col gap-5'>
      <Hero/>
      <Search/>
      <GameList/>
      {post?<Post post={post}/>:null}
    </div>
  ) 
}
