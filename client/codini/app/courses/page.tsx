"use client";

import { useEffect, useState } from "react";

interface Course {
  id: number;
  desc: string;
  price: number;
  rate: number;
}

interface Video {
  id: number;
  video: string; 
  isLocked: number;
}

const VideoComponent: React.FC<{ video: string }> = ({ video }) => {
  return <video controls src={video} />;
};

const fetchAllCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetch("http://localhost:8000/courses/");
        const videosResponse = await fetch("http://localhost:8000/videos/courses/1");
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

  return (
    <div className="grid grid-cols-4 gap-4">
      {videos.map((video, i) => (
        <div key={i}>
          <p>{video.isLocked}</p>
          <VideoComponent video={video.video} />
        </div>
      ))}
      {courses.map((course, i) => (
        <div key={i}>
          <p>{course.desc}</p>
          <span>Price: ${course.price}</span>
          <br />
          <span>Rate: {course.rate}</span>
        </div>
      ))}
    </div>
  );
};

export default fetchAllCourses;
