"use client";
import type { NextPage } from "next";
import styles from "../index.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";




interface Course {
  videos: string | undefined;
  idcourse: number;
  teachers_idteachers: number;
  desc: string;
  price: string;
  rate: string;
  languages_idlanguages: number;
  image:string
}

interface Video {
  desc: ReactNode;
  idvideos: number;
  videos: string;
  courses_idcourse: number;
}
interface Review {
  id: number;
  body: string;

}

const CourseDetail: NextPage = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [allcourse, setAllcourse] = useState<Course[] | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [allreviews, setAllreviews] = useState<Review[] | null>(null);


  const route = useRouter()
  const { id } = useParams();
  console.log(id);
  
  // Use the Course interface here
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const courseResponse = await axios.get<Course[]>(
        `http://127.0.0.7:8000/courses/`
      );
      setAllcourse(courseResponse.data);
      console.log("here1",courseResponse.data);
      // Fetch videos for each course
      const videosResponse = await axios.get<Video[]>(
        `http://127.0.0.7:8000/videos/courses/vid/${id}`
      );
      console.log("123", videosResponse.data)
      setVideos(videosResponse.data);
 ;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

const logo = [["https://cdn.discordapp.com/attachments/1161195165503995984/1199636613576282132/youtube1.png?ex=65c343a8&is=65b0cea8&hm=14b043850f7599fa861466203f6a7b36b70d0a788f32dedec6db7584db75a0fe&"],
["https://cdn.discordapp.com/attachments/1161195165503995984/1199637356848894024/Xtwitter.png?ex=65c3445a&is=65b0cf5a&hm=a6ee14984c8a960042e247f4cdb8f5be3fdb1b685e4c69c81cad4ec80f9a82c5&"],
["https://cdn.discordapp.com/attachments/1161195165503995984/1199637640203468800/Instagram1.png?ex=65c3449d&is=65b0cf9d&hm=8fffc77dddb432d69efd2c595521fb8da0d39367b2b27f1c58cd3e2102470388&"],
["https://cdn.discordapp.com/attachments/1161195165503995984/1199640472545665074/Facebook2.png?ex=65c34740&is=65b0d240&hm=31554570734ee9d45cf7608eebea1b6b5aefde28d247c365435534d22fe6c4f2&"],
["https://cdn.discordapp.com/attachments/1161195165503995984/1199640472944128000/whatsapp1.png?ex=65c34740&is=65b0d240&hm=dfa0d12253a5c073e52ee1a61a98172a64c48b4fdebf147942c03fcc544910c6&"]
  
]

  console.log("here3",allcourse);
  // useEffect(() => {
  //   axios
  //     .get<Review[]>("http://127.0.0.7:8000/Reviews/getAllR")
  //     .then((response) => {
  //       setAllreviews(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching course data:", error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get<Course>(`http://127.0.0.7:8000/courses/oneCourse/${id}`)
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
  // const _onReady = (event: any) => {
   
  //   event.target.pauseVideo();
  // };
  // const getVideoUrl = (courseId: number) => {
  //   const videoForCourse = videos?.find(
  //     (video) => video.courses_idcourse === courseId
  //   );
  //   console.log("vff", videoForCourse);

  //   const youtubeId = videoForCourse?.videos.split("=");
  //   console.log(youtubeId);
  //   return youtubeId ? youtubeId[1] : "";
  // };
 

  if (!course) {
    return <div>Loading...</div>;
  }
  if (!allcourse) {
    return <div>Loading...</div>;
  }
 
  console.log("sa0", allreviews);

  return (
    <div className={styles.courseDetail}>
    <div className={styles.groupParent}>
      <div className={styles.groupContainer}>
        <div className={styles.marketingArticlesParent}>
          <div className={styles.marketingArticles}>Marketing Articles</div>
          <b className={styles.seeAll}>See all</b>
        </div>

        {videos?.map((cour) => (
          <div key={cour.idcourse} className={styles.courseCard}>
            <div className={styles.imageContainer}>
            <div >
          <video controls>
            <source src={cour.videos} type="video/mp4" />
          </video>
        </div>
              ;
            </div>
            <div className={styles.courseInfo}>
              <div className={styles.certification}></div>
              <div className={styles.description}>
                <p>{allcourse[0].desc}</p>
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
                style={{width:"53cm"}}
                alt=""
                src="https://cdn.discordapp.com/attachments/1161195165503995984/1199642144621740042/rectangle-772x.png?ex=65c348cf&is=65b0d3cf&hm=57adc106887a66e05b906c1dcb5da2f2cd0b8f6c0156d968c303f85b0f6d1c35&"
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
                    src={logo[0]}
                  />
                  <img
                    className={styles.telegramIcon}
                    alt=""
                    src={logo[3]}
                  />
                  <div className={styles.rectangleParent13}>
                    <img
                      className={styles.groupChild28}
                      alt=""
                      src={course.image}
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
                            id: course.idcourse,
                            imagestu: course?.image,
                            price: course?.price,
                            desc: course?.desc,
                            rate: course?.rate,
                          },
                        }}
                      >
                        <button className={styles.CartBtn}><span className="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p className="text">Add to Cart</p></button>
                      </Link>
                  </div>
                  <img
                    className={styles.youtubeIcon}
                    alt=""
                    src={logo[2]}
                  />  
                  <img
                    className={styles.instagramIcon}
                    alt=""
                    src={logo[4]}
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
                  <div className={styles.div5}>{course.price*2}</div>
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
                </div>
                <div className={styles.certificationOfCompletionParent}>
                  <div className={styles.certificationOfCompletion}>
                    Certification of completion
                  </div>
                </div>
                <div className={styles.accessOnAllDevicesParent}>
                  <div className={styles.accessOnAll}>
                    Access on all devices
                  </div>
                </div>
                <div className={styles.moneyBackGuaranteeParent}>
                  <div className={styles.moneyBackGuarantee}>
                    Money Back Guarantee
                  </div>
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



{/* <div >
<div >
  <div className={styles.groupContainer}>
    <div className={styles.marketingArticlesParent}>
      <div className={styles.marketingArticles}>Marketing Articles</div>
      <b className={styles.seeAll}>See all</b>
    </div>
  {videos?.map((cour) => (
      <div key={cour.idcourse} className={styles.courseCard}>
        <div >
          <video controls>
            <source src={cour.videos} type="video/mp4" />
          </video>
        </div>
        <div className={styles.courseInfo}>
          <div className={styles.certification}>{cour.desc}</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor
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
        </div>
      </div>
    ))}

  <div className={styles.groupWrapper7}>
    <div >
      <div >
        {/* <div className={styles.rectangleParent11}>
        </div> */}




//         <div className={styles.groupParent10}>
//           <div >
//             <div >
//               <div className={styles.groupChild27} />
//               <div className={styles.rectangleParent13}>
//                 <img
//                   className={styles.groupChild28}
//                   alt=""
//                   src={course.image}
//                 />
//                 <div className={styles.groupChild29} />
//               </div>
//               <div className={styles.rectangleParent14}>
//                 <div />
//                 <Link href="/CheckoutPage">
//                   <button>Buy Now</button>
//                 </Link>
//               </div>
//               <div className={styles.rectangleParent15}>
//                 <div className={styles.groupChild31} />
//                 <b className={styles.overview}>Overview</b>
//               </div>
//               <div className={styles.rectangleParent16}>
//                 <div className={styles.groupChild31} />
//                 <b className={styles.overview}>Overview</b>
//               </div>
//               <div className={styles.rectangleParent17}>
//                 <div className={styles.groupChild31} />
//                 <b className={styles.overview}>Overview</b>
//                 <div className={styles.rectangleParent18}>
//                   <div className={styles.groupChild34} />
//                   <b className={styles.overview}>Overview</b>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.parent}>
//               <div className={styles.div4}>{course?.price}$</div>
//               <div className={styles.off}>50% Off</div>
//               <div className={styles.hourLeftAt}>
//                 11 hour left at this price
//               </div>
//               <div className={styles.classLaunchedLess}>
//                 Class, launched less than a year ago by Blackboard
//                 co-founder Michael Chasen, integrates exclusively...
//               </div>
//               <div className={styles.thisCourseIncluded}>
//                 This Course included
//               </div>
//               <div className={styles.training5Or}>
//                 Training 5 or more people
//               </div>
//               <div className={styles.shareThisCourse}>
//                 Share this course
//               </div>
//               <div className={styles.div5}> {course.price*2}$</div>
//               <img
//                 className={styles.lineIcon}
//                 alt=""
//                 src="/line-18.png"
//               />
//               <div className={styles.lineDiv} />
//               <div className={styles.groupChild35} />
//             </div>
//           </div>
//           <div className={styles.groupParent12}>
//             <div className={styles.modulsParent}>
//               <div className={styles.moduls}>32 Moduls</div>
      
//             </div>
//             <div className={styles.certificationOfCompletionParent}>
//               <div className={styles.certificationOfCompletion}>
//                 Certification of completion
//               </div>
            
//             </div>
//             <div className={styles.accessOnAllDevicesParent}>
//               <div className={styles.accessOnAll}>
//                 Access on all devices
//               </div>
         
//             </div>
//             <div className={styles.moneyBackGuaranteeParent}>
//               <div className={styles.moneyBackGuarantee}>
//                 Money Back Guarantee
//               </div>
//               <div className={styles.div6}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className={styles.groupParent13}></div>
// <div className={styles.courseDetailChild} />
// {/* <img className={styles.courseDetailItem} alt="" src="/line-21.png" /> */}
// <div className={styles.groupParent14}>
//   <div className={styles.reviewGrid}>
//     {allreviews?.map((one: Review) => (
//       <div key={one.id} className={styles.reviewItem}>
//         <div className={styles.reviewContent}>{one?.body}</div>
//         <div className={styles.userName}>Lina</div>
//         <div className={styles.imageContainer}>
//           <div className={styles.childElement} />
//           <img
//             className={styles.iconImage}
//             alt=""
//             src="/image-12@2x.png"
//           />
//         </div>
//       </div>
//     ))}
//   </div>

//   <div className={styles.groupWrapper9}></div>
// </div>
// <img
//   className={styles.courseDetailInner}
//   alt=""
//   src="/rectangle-99.png"
// />
// <div className={styles.topRaiting}>Top Raiting</div>
// <img className={styles.vectorIcon} alt="" src="/vector.png" />
// <div className={styles.outOf5}>4 out of 5</div>
// </div>
// </div>