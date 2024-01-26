"use client";

// import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useIdentity } from "../(auth)/IdentityContext";
import Footer from "../footer/page";

const HomePage: React.FC = () => {
  interface Teachers {
    idteachers: number;
    name: string;
    image: string;
    desc: string;
    review: number;
  }
  // interface Video {
  //   id: number;
  //  islocked:Number;
  //  videos:string
  // }

  interface Languages {
    idlanguages: number;
    name: string;
    image: string;
    description: string;
  }

  const reduce = useRouter();
  const [langua, setLangua] = useState<Languages[]>([]);
  const [teachers, setteachers] = useState<Teachers[]>([]);
  // const [course,setCourses] = useState<Video[]>([])
  const con = useIdentity();
  console.log("identity", con);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchlanguages = await fetch("http://localhost:8000/languages/");
        const fetchTeachers = await fetch(
          "http://localhost:8000/teacher/getAll"
        );
        // const fetchcourse = await fetch(`http://localhost:8000/videos/courses/1`)
        const langua = await fetchlanguages.json();
        const teachers = await fetchTeachers.json();
        // const course=await fetchcourse.json()
        console.log("here", langua);
        console.log("tea", teachers);
        // console.log("course",course);

        setLangua(langua);
        setteachers(teachers);
        // setCourses(course)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleClick = (ids: number) => {
    reduce.push(`/teacher/${ids}`);
  };

  return (
    <div>
      <div className={styles.introSection}>
        <h1>Online Languages lessons for remote learning.</h1>
        <p>Welcome to Our website</p>
      </div>

      <div
        className="container"
        style={{ marginLeft: "210px", marginTop: "5cm" }}
      >
        <h2>Languages</h2>
        <div>
          <div className={styles.parent}>
            {langua.map((language, i) => (
              <div
                key={i}
                className={styles.rectangleDiv}
                onClick={() => {
                  reduce.push(`/language/${language.idlanguages}`);
                }}
              >
                <img
                  className={styles.rectangleIcon}
                  src={language.image}
                  alt={language.name}
                />
                <h1 className={styles.design1}> {language.name}</h1>
                <p className={styles.description}>{language.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.introSectionCoaching}>
        <h1>Online coaching lessons for remote learning.</h1>
        <p>Learn, connect, and collaborate in the virtual classroom</p>
      </div>
      <div
        className="container-1"
        style={{ marginLeft: "210px", marginTop: "5cm" }}
      >
        <h2>Teachers</h2>
        <div className={styles.parent1}>
          {teachers.map((teacher, i) => (
            <div
              onClick={() => {
                handleClick(teacher.idteachers);
              }}
              key={i}
              className={styles.rectangleDiv1}
            >
              <div className={styles.imageWithBorder}>
                <img
                  className={styles.image10Icon}
                  src={teacher.image}
                  alt={teacher.name}
                />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.design}>{teacher.name}</div>
                <div className={styles.descriptionWithBorderRadius}>
                  {teacher.desc} <br></br>
                  {/* <span style={{fontFamily:"1px"}}>review:{teacher.review}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "10cm" }}>{/* <Footer /> */}</div>
    </div>
  );
};

export default HomePage;
