"use client"
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function video() {
    const [data,setData]=useState([])
    const { id } = useParams();
    console.log(id);
    
const route = useRouter()
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
    <div style={{ marginLeft:"1.5cm", width:"40cm" , border: '2px solid #ccc', padding: '10px' }}>
      <img src="https://img.freepik.com/premium-photo/previous-button-back-button-3d-illustration_115990-4887.jpg" height={"50px"} width={"50px"} onClick={()=>route.push("/home")}/>
      {/* <button style={{marginLeft:'43%', backgroundColor :"green"}} >Go Back</button> */}
    <div style={{ display: 'grid', gridTemplateColumns: '20% 20% 20% 20%', gap: '20px' }}>
      {data?.map((el, i) => (
      <div>
       <button onClick={()=>route.push(`/Quize`)}>Quiz</button>
        <video key={i} width="320" height="240" controls>
          <source src={el.videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      ))}
    </div>
  </div>
  )
}

export default video