"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./course.module.css"
 

interface Course {
  idcourse: number;
  desc: string;
  price: number;
  rate: number;
  image:string
}

interface Video {
  islocked: number;
  idvideos: number;
  videos: string;
  courses_idcourse: number;
}



const fetchAllCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
const route = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetch("http://localhost:8000/courses/");
        const videosResponse = await fetch("http://localhost:8000/videos/courses/getAll");
        const fetchedCourses = await coursesResponse.json();
        const fetchedVideos = await videosResponse.json();

        setCourses(fetchedCourses);
        setVideos(fetchedVideos);
        console.log(fetchedVideos);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const opts = {
    height: '240',
    width: '320',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const  _onReady=(event:any)=> {
    event.target.pauseVideo();
  }

  const getVideoUrl = (courseId: number) => {
    const videoForCourse = videos?.find((video) => video.idvideos === courseId);
    console.log("vff",videoForCourse);


    const youtubeId=videoForCourse?.videos.split('=')
    console.log(youtubeId);
   return youtubeId ? youtubeId[1] : "";

  };


  return (
    <div className={style.gridcontainer}>
 {courses.map((el, i) => (
 <div style={{width: '104%', height: '120%', background: 'white', boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, 0.25)'}}>
    <img src={el.image} alt={`Course ${i + 1}`}  style={{width: '50%', height: '50%' ,marginLeft:"2.5cm"}}/>
    <div className="course-details">
      <p className="course-desc">{el.desc}</p>
      <span className="course-price" style={{marginLeft:"5cm"}}>Price:{el.price}</span>
      {videos[i]?.islocked === 0 && (
        <img
          style={{ marginLeft: "10cm",marginTop:"1.5cm" }}
          src="https://i.pinimg.com/736x/6f/df/35/6fdf3511fd3fbdc1a5977e518207b930.jpg"
          width={"50px"}
          height={"50px"}
          alt="Locked"
          onClick={() => route.push(`/courseDetails/${courses[i].idcourse}`)}
          className="locked-icon"
        />
      )}
    </div>
  </div>
      ))}
    </div>
  );
};

export default fetchAllCourses;


 {/* {videos.map((video, i) => (
      <div className={style.videoCourseContainer} key={i}>
        <div className={style.videocontainer}>
        
        </div>
        <div className={style.videocontainer}>
          <video width="320" height="240" controls>
            <source src={video.videos} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  
        
        </div>
        {courses[i] && (
          <div className={style.coursecontainer}>
            <p>{courses[i].desc}</p>
            <span>Price: ${courses[i].price}</span>
            <br />
            <span>Rate: {courses[i].rate}</span>
            {video?.islocked === 0 && (
             <img style={{marginLeft:"4cm"}} src="https://i.pinimg.com/736x/6f/df/35/6fdf3511fd3fbdc1a5977e518207b930.jpg"  width={"50px"} height={"50px"}  alt="Locked" onClick={()=>route.push(`/courseDetails/${courses[i].idcourse}`)} />
            )}
          </div>
        )}
      </div>
    ))} */}
