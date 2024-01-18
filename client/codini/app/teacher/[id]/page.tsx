"use client"
import React, { useState, useEffect } from 'react';
import styles from '../index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';
import YouTube from 'react-youtube';

interface OneTeacher {
  id: number;
  name: string;
  desc: string;
  image: string;
  rate: number;
  reviews: number;
}

interface Video {
  idvideos: number;
  videos: string;
  teachers_idteachers: number;
}

const fetchDetail: React.FC = () => {

  const route = useRouter()
  const [teacher, setTeacher] = useState<OneTeacher | null>(null);
  const [vid, setVid] = useState<Video[]>([]);
  const { id } = useParams();
  console.log('hhh', id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchTeacher = await fetch(`http://localhost:8000/teacher/getOne/${id}`);
        const fetchVideo = await fetch(`http://localhost:8000/videos/courses/getAll/${id}`);
        const teacher = await fetchTeacher.json();
        const videos = await fetchVideo.json();
        console.log('hello', videos);

        setTeacher(teacher);
        setVid(videos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const opts = {
    height: '250',
    width: '350',
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event: any) => {
    event.target.pauseVideo();
  };

  const getVideoUrl = (teachers_idteachers: number) => {
    const videoForCourse = vid?.find((video) => video.idvideos === teachers_idteachers);
    console.log('vff', videoForCourse);

    const youtubeId = videoForCourse?.videos.split('=');
    console.log(youtubeId);
    return youtubeId ? youtubeId[1] : '';
  };
  return (
    <div >
    {/* Teacher Profile */}
    <div className={styles.literatureCourse} style={{ border: "5px solid #ccc", padding: "10px" }}>
      <div className={styles.literatureCourseChild} />
      <div className={styles.literatureCourseItem} />
      <img className={styles.image1} alt="" src={teacher?.image} />
      <div className={styles.parent1} />
      <div className={styles.rectangleParent12}>
        <div className={styles.groupChild16} />
        <div className={styles.groupParent2}>
          <div className={styles.groupParent3}>
            <div className={styles.rectangleParent13}>
              <div className={styles.groupChild17} />
            </div>
            <div className={styles.loremIpsumDolor}>{teacher?.desc}</div>
            <div className={styles.johnAnderson}>{teacher?.name}</div>
            <button onClick={() => route.push(`/modify/${id}`)} className={styles.btn}> Edit Profile</button>
          </div>
        </div>
      </div>
    </div>

    {/* YouTube Video Container */}
    <div style={{ marginTop: "2cm", border: "2px solid #ccc", padding: "10px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "30px" }}>
      {vid.map((el, i) => (
        <div key={i} className="video-item">
          <YouTube videoId={getVideoUrl(el.idvideos)} opts={opts} onReady={_onReady} />
        </div>
      ))}
    </div>
  </div>
);
      }
      export default fetchDetail;