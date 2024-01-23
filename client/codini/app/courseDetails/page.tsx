"use client";
import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import YouTube from "react-youtube";
import Link from "next/link";
import router from "next/router";
import { Button } from "@nextui-org/react";
interface Course {
  idcourse: number;
  teachers_idteachers: number;
  desc: string;
  price: string;
  rate: string;
  languages_idlanguages: number;
  image: string;
  // Add other fields if present in your API response
}
// interface courses{
//   idcourse: number;
//   teachers_idteachers: number;
//   desc: string;
//   price: string;
//   rate: string;
//   languages_idlanguages: number;
//   // Add other fields if present in your API response
// }
interface Video {
  idvideos: number;
  videos: string;
  courses_idcourse: number; // Assuming this is the URL of the video
}
interface Review {
  id: number;
  body: string;
  // Assuming this is the URL of the video
}

const CourseDetail: NextPage = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [allcourse, setAllcourse] = useState<Course[] | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [allreviews, setAllreviews] = useState<Review[] | null>(null);

  // Use the Course interface here
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const courseResponse = await axios.get<Course[]>(
        "http://127.0.0.7:8000/courses"
      );
      setAllcourse(courseResponse.data);

      // Fetch videos for each course
      const videosResponse = await axios.get<Video[]>(
        `http://127.0.0.7:8000/videos/courses/1`
      );
      setVideos(videosResponse.data);
      console.log("123", videosResponse);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  console.log(allcourse);
  useEffect(() => {
    axios
      .get<Review[]>("http://127.0.0.7:8000/Reviews/getAllR")
      .then((response) => {
        setAllreviews(response.data);
      })
      .catch((error) => {
        console.log("Error fetching course data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get<Course>("http://127.0.0.7:8000/courses/oneCourse/1")
      .then((response) => {
        setCourse(response.data);
        console.log(course);
      })
      .catch((error) => {
        console.log("Error fetching course data:", error);
      });
  }, []);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const getVideoUrl = (courseId: number) => {
    const videoForCourse = videos?.find(
      (video) => video.courses_idcourse === courseId
    );
    console.log("vff", videoForCourse);

    const youtubeId = videoForCourse?.videos.split("=");
    console.log(youtubeId);
    return youtubeId ? youtubeId[1] : "";
  };
  // Initialize the useHistory hook

  // ... (rest of your code)

  // if (!course) {
  //   return <div>Loading...</div>;
  // }
  // if (!allcourse) {
  //   return <div>Loading...</div>;
  // }
  console.log("videos", videos);
  console.log("sa0", allreviews);

  return (
    <div className={styles.courseDetail}>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.marketingArticlesParent}>
            <div className={styles.marketingArticles}>Marketing Articles</div>
            <b className={styles.seeAll}>See all</b>
          </div>

          {allcourse?.map((cour: Course) => (
            <div key={cour.idcourse} className={styles.courseCard}>
              <div className={styles.imageContainer}>
                <YouTube
                  videoId={getVideoUrl(cour.idcourse)}
                  opts={opts}
                  onReady={_onReady}
                />
                ;
              </div>
              <div className={styles.courseInfo}>
                <div className={styles.certification}>{cour.desc}</div>
                <div className={styles.description}>
                  A language, be it spoken or programming, is a dynamic system
                  of communication or instruction. It serves as a medium for
                  expressing thoughts, ideas, and emotions
                </div>
                <div className={styles.priceContainer}>
                  <i className={styles.currency}>$</i>
                  <b className={styles.price}>{cour.price}</b>
                </div>
              </div>
              <div className={styles.additionalInfo}>
                <div className={styles.instructor}>Lina</div>
                <div className={styles.imageContainer}>
                  <img className={styles.icon} alt="" src="/image-12@2x.png" />
                </div>
                {/* <div className={styles.duration}>
        <span className={styles.month}>3 Month</span>
        <span className={styles.clock}></span>
      </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.groupWrapper7}>
          <div className={styles.groupWrapper8}>
            <div className={styles.groupWrapper8}>
              <div className={styles.rectangleParent11}>
                <img
                  className={styles.groupChild25}
                  alt=""
                  src="/rectangle-77@2x.png"
                />
                <div className={styles.groupChild26} />
              </div>
              <div className={styles.groupParent10}>
                <div className={styles.groupParent11}>
                  <div className={styles.groupParent11}>
                    <div className={styles.groupChild27} />
                    <img
                      className={styles.whatsappIcon}
                      alt=""
                      src="/whatsapp.png"
                    />
                    <img
                      className={styles.telegramIcon}
                      alt=""
                      src="/telegram.png"
                    />
                    <div className={styles.rectangleParent13}>
                      <img
                        className={styles.groupChild28}
                        alt=""
                        src="https://i.ytimg.com/vi/o1IaduQICO0/maxresdefault.jpg"
                      />

                      <div className={styles.groupChild29} />
                    </div>
                    <div className={styles.rectangleParent14}>
                      <div />
                    </div>
                    <div className={styles.rectangleParent15}>
                      <div className={styles.groupChild31} />
                      <Link
                        href={{
                          pathname: "/Check",
                          query: {
                            imagestu: course?.image,
                            price: course?.price,
                            desc: course?.desc,
                            rate: course?.rate,
                          },
                        }}
                      >
                        <button className={styles.buyNow}>Buy Now</button>
                      </Link>

                      <b className={styles.overview}>Overview</b>
                    </div>
                    <div className={styles.rectangleParent16}>
                      <div className={styles.groupChild31} />
                      <b className={styles.overview}>Overview</b>
                    </div>
                    <div className={styles.rectangleParent17}>
                      <div className={styles.groupChild31} />
                      <b className={styles.overview}>Overview</b>
                      <div className={styles.rectangleParent18}>
                        <div className={styles.groupChild34} />
                        <b className={styles.overview}>Overview</b>
                      </div>
                    </div>
                    <img
                      className={styles.twitterIcon}
                      alt=""
                      src="/twitter.png"
                    />
                    <img
                      className={styles.youtubeIcon}
                      alt=""
                      src="/youtube.jpg"
                    />
                    <img
                      className={styles.facebookIcon}
                      alt=""
                      src="/facebook.png"
                    />
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="/instagram.png"
                    />
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div4}>{course?.price}$</div>
                    <div className={styles.off}>50% Off</div>
                    <div className={styles.hourLeftAt}>
                      11 hour left at this price
                    </div>
                    <div className={styles.classLaunchedLess}>
                      Class, launched less than a year ago by Blackboard
                      co-founder Michael Chasen, integrates exclusively...
                    </div>
                    <div className={styles.thisCourseIncluded}>
                      This Course included
                    </div>
                    <div className={styles.training5Or}>
                      Training 5 or more people
                    </div>
                    <div className={styles.shareThisCourse}>
                      Share this course
                    </div>
                    <div className={styles.div5}> $99.99</div>
                    <img
                      className={styles.lineIcon}
                      alt=""
                      src="/line-18.png"
                    />
                    <div className={styles.lineDiv} />
                    <div className={styles.groupChild35} />
                  </div>
                </div>
                <div className={styles.groupParent12}>
                  <div className={styles.modulsParent}>
                    <div className={styles.moduls}>32 Moduls</div>
                    <div className={styles.div6}></div>
                  </div>
                  <div className={styles.certificationOfCompletionParent}>
                    <div className={styles.certificationOfCompletion}>
                      Certification of completion
                    </div>
                    <div className={styles.div7}></div>
                  </div>
                  <div className={styles.accessOnAllDevicesParent}>
                    <div className={styles.accessOnAll}>
                      Access on all devices
                    </div>
                    <div className={styles.div6}></div>
                  </div>
                  <div className={styles.moneyBackGuaranteeParent}>
                    <div className={styles.moneyBackGuarantee}>
                      Money Back Guarantee
                    </div>
                    <div className={styles.div6}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupParent13}></div>
      <div className={styles.courseDetailChild} />
      {/* <img className={styles.courseDetailItem} alt="" src="/line-21.png" /> */}
      <div className={styles.groupParent14}>
        <div className={styles.reviewGrid}>
          {allreviews?.map((one: Review) => (
            <div key={one.id} className={styles.reviewItem}>
              <div className={styles.reviewContent}>{one?.body}</div>
              <div className={styles.userName}>Lina</div>
              <div className={styles.imageContainer}>
                <div className={styles.childElement} />
                <img
                  className={styles.iconImage}
                  alt=""
                  src="/image-12@2x.png"
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.groupWrapper9}></div>
      </div>
      <img
        className={styles.courseDetailInner}
        alt=""
        src="/rectangle-99.png"
      />
      <div className={styles.topRaiting}>Top Raiting</div>
      <img className={styles.vectorIcon} alt="" src="/vector.png" />
      <div className={styles.outOf5}>4 out of 5</div>
    </div>
  );
};

export default CourseDetail;
