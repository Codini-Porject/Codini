"use client";

import { useEffect, useState } from "react";
import style from "./course.module.css"
 

interface Course {
  id: number;
  desc: string;
  price: number;
  rate: number;
}

interface Video {
  idvideos: number;
  videos: string;
  isLocked: number;
  courses_idcourse: number;
}



const fetchAllCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);

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
    {videos.map((video, i) => (
      <div className={style.videoCourseContainer} key={i}>
        <div className={style.videocontainer}>
          {/* Displaying YouTube video */}
          {/* <YouTube videoId={getVideoUrl(video.idvideos)} opts={opts} onReady={_onReady} /> */}
        </div>
        <div className={style.videocontainer}>
          {/* Displaying uploaded video */}
          <video width="320" height="240" controls>
            <source src={video.videos} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  
          {/* Conditionally render the image based on the value of videos.isLocked */}
          {video?.isLocked === 0 && (
            <img src="https://i.pinimg.com/736x/6f/df/35/6fdf3511fd3fbdc1a5977e518207b930.jpg" alt="Locked" />
          )}
        </div>
        {courses[i] && (
          <div className={style.coursecontainer}>
            <p>{courses[i].desc}</p>
            <span>Price: ${courses[i].price}</span>
            <br />
            <span>Rate: {courses[i].rate}</span>
          </div>
        )}
      </div>
    ))}
  </div>
  )
}


export default fetchAllCourses;
