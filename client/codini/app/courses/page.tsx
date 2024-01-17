"use client";

import { useEffect, useState } from "react";
import style from "./course.module.css"
import YouTube from "react-youtube";

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const opts = {
    height: '250',
    width: '350',
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
        <div className={style.videocontainer} key={i}>
          <YouTube videoId={getVideoUrl(video.idvideos)} opts={opts} onReady={_onReady} />;
        </div>
      ))}
      {/* {courses.map((course, i) => (
        <div key={i} className={style.coursecontainer}>
          <p>{course.desc}</p>
          <span>Price: ${course.price}</span>
          <br />
          <span>Rate: {course.rate}</span>
        </div>
      ))} */}
    </div>
  );
};

export default fetchAllCourses;
