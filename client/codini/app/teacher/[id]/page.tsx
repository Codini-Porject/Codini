"use client";
import React, { useState, useEffect } from "react";
import styles from "../index.module.css";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from "@/app/footer/page";

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

interface Course {
  idcourses: number;
  desc: string;
  image: string;
}

const fetchDetail: React.FC = () => {
  const route = useRouter();
  const [clickedVideo, setClickedVideo] = useState<number | null>(null);
  const [teacher, setTeacher] = useState<OneTeacher | null>(null);
  const [vid, setVid] = useState<Video[]>([]);
  const [Course, setCourse] = useState<Course[]>([]);
  const { id } = useParams();
  const [refresh, setRefresh] = useState<boolean>(false);
  console.log("hhh", id);

  const handleDeleteClick = async (idvideos: number) => {
    try {
      await fetch(`http://localhost:8000/videos/courses/${idvideos}`, {
        method: "DELETE",
      });
      // Update state to trigger a re-fetch of the video list
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchTeacher = await fetch(
          `http://localhost:8000/teacher/getOne/${id}`
        );
        const fetchVideo = await fetch(
          `http://localhost:8000/videos/courses/getAll/${id}`
        );
        const fetchCourse = await fetch(
          `http://localhost:8000/courses/getAll/${id}`
        );
        const teacher = await fetchTeacher.json();
        const videos = await fetchVideo.json();
        const course = await fetchCourse.json();
        console.log("hello", videos);
        console.log("course teacher", course);

        setTeacher(teacher);
        setCourse(course);
        setVid(videos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, !refresh]);

  const opts = {
    height: "250",
    width: "350",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {/* Teacher Profile */}
      <div
        className={styles.literatureCourse}
        style={{ border: "5px solid #ccc", padding: "10px" }}
      >
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
              <button
                onClick={() => route.push(`/modify/${id}`)}
                className={styles.btn}
              >
                {" "}
                Edit Profile
              </button>
              <button
                onClick={() => route.push(`/create`)}
                className={styles.btn}
              >
                Add courses
              </button>
              <button
                onClick={() => route.push(`/createForQuiz`)}
                className={styles.btn}
              >
                Add Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "2cm",
          marginLeft: "1cm",
          border: "2px solid black",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {Course.map((ele, i) => (
          <div key={i} className="course-item">
            <img
              style={{ marginLeft: "15%" }}
              src={ele.image}
              width={200}
              height={100}
              alt={`Course ${i}`}
            />
            <p>{ele.desc}</p>
          </div>
        ))}
      </div>
      {/* YouTube Video Container */}
      <div
        style={{
          marginTop: "2cm",
          marginLeft: "1cm",
          border: "2px solid black",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {vid.map((el, i) => (
          <div
            key={i}
            className={`video-item ${
              clickedVideo === el.idvideos ? "clicked" : ""
            }`}
          >
            <video
              className={`fullscreen-video ${
                clickedVideo === el.idvideos ? "fullscreen" : ""
              }`}
              controls
            >
              <source src={el.videos} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              <Stack direction="row" spacing={1}>
                <Chip
                  onDelete={() => handleDeleteClick(el.idvideos)}
                  deleteIcon={<DeleteIcon />}
                  variant="outlined"
                />
              </Stack>
            </div>
          </div>
        ))}

      </div >
 

    </div>
  );
};

export default fetchDetail;
