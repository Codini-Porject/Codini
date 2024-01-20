"use client"
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation';

function video() {
    const [data,setData]=useState([])
    const { id } = useParams();
    console.log(id);
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/videos/courses/getAll/lan/${id}`).then((res)=>{
            const videosOfLangauge= res.data.reduce((acc,el)=>(
                acc=acc.concat(el.videos)
            ),[])
           setData(videosOfLangauge)
            
        })
    },[])
    console.log(data);
    
  return (
    <div>
        {data?.map((el,i)=>(
     <video key={i} width="320" height="240" controls>
             <source src={el.videos} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
            
        ))}
    </div>
  )
}

export default video