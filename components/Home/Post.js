import Image from 'next/image';
import React, { useEffect } from 'react'
import PostItems from '../PostItem/PostItems';

const Post = ({post}) => {
    useEffect(()=>{
        console.log("posts", post);
    })
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 gap-4'>
      {post.map((item)=>{
        return <PostItems item={item}/>
      })}
    </div>
  )
}

export default Post
