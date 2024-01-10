"use client"
import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";




interface Course {
    idcourse: number;
    teachers_idteachers: number;
    desc: string;
    price: string;
    rate: string;
    languages_idlanguages: number;
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
  
  const CourseDetail: NextPage = () => {
    const [course, setCourse] = useState<Course | null>(null);
    const [allcourse, setAllcourse] = useState<Course[] | null>(null);
     // Use the Course interface here
     useEffect(() => {
        axios
          .get<Course[]>("http://127.0.0.7:8000/courses")
          .then((response) => {
            setAllcourse(response.data);
          })
          .catch((error) => {
            console.log("Error fetching course data:", error);
          });
      }, []);
      console.log(allcourse)
  
    useEffect(() => {
      axios
        .get<Course>("http://127.0.0.7:8000/courses/oneCourse/1")
        .then((response) => {
          setCourse(response.data);
        })
        .catch((error) => {
          console.log("Error fetching course data:", error);
        });
    }, []);
  console.log(course)
  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.courseDetail}>
       
      <div  className={styles.groupParent}>
      
        <div className={styles.groupContainer}>
          <div className={styles.marketingArticlesParent}>
            <div className={styles.marketingArticles}>Marketing Articles</div>
            <b className={styles.seeAll}>See all</b>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupFrame}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupFrame}>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupChild} />
                    <div className={styles.groupParent2}>
                      <div className={styles.rectangleGroup}>
                        <img
                          className={styles.groupItem}
                          alt=""
                          src="/rectangle-32@2x.png"
                        />
                        <div className={styles.groupInner} />
                      </div>
             
                      <div  key={allcourse[0].idcourse} className={styles.awsCertifiedSolutions}>
                        {allcourse[0].desc}
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipising elit,
                        sed do eiusmod tempor
                      </div>
                    </div>
                    <div className={styles.linaParent}>
                      <div className={styles.lina}>Lina</div>
                      <i className={styles.i}>$100</i>
                      <b className={styles.b}>{allcourse[0].price}$</b>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.rectangleDiv} />
                        <img
                          className={styles.image12Icon}
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
  
              <div className={styles.designParent}>
                <div className={styles.design}>Design</div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.groupChild1} />
                  <div className={styles.groupChild2} />
                  <div className={styles.groupChild3} />
                  <div className={styles.groupChild4} />
                </div>
              </div>
              <div className={styles.monthParent}>
                <div className={styles.month}>3 Month</div>
                <div className={styles.div}></div>
              </div>
            </div>
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-33@2x.png"
          />
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
                        src="/rectangle-77@2x.png"
                      />
                      <div className={styles.groupChild29} />
                    </div>
                    <div className={styles.rectangleParent14}>
                      <div className={styles.groupChild30} />
                      <b className={styles.buyNow}>Buy Now</b>
                    </div>
                    <div className={styles.rectangleParent15}>
                      <div className={styles.groupChild31} />
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
                    <div className={styles.div4}>{course.price}$</div>
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
      <div className={styles.groupParent13}>
      </div>
      <div className={styles.courseDetailChild} />
      <img className={styles.courseDetailItem} alt="" src="/line-21.png" />
      <div className={styles.groupParent14}>
        <div className={styles.classLaunchedLessThanAYeParent}>
          <div className={styles.classLaunchedLess1}>
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </div>
          <div className={styles.lina5}>Lina</div>
          <div className={styles.rectangleParent20}>
            <div className={styles.groupChild37} />
            <img
              className={styles.image12Icon5}
              alt=""
              src="/image-12@2x.png"
            />
          </div>
        </div>
        <div className={styles.groupWrapper9}>
          <div className={styles.monthParent2}>
            <div className={styles.month4}>3 Month</div>
            <div className={styles.div11}></div>
          </div>
        </div>
      </div>
      <img
        className={styles.courseDetailInner}
        alt=""
        src="/rectangle-99.png"
      />
      <div className={styles.topRaiting}>Top Raiting</div>
      <img className={styles.vectorIcon} alt="" src="/vector.png" />
      <div className={styles.outOf5}>4 out of 5</div>
      <div className={styles.groupParent15}>
        <div className={styles.classLaunchedLessThanAYeParent}>
          <div className={styles.classLaunchedLess1}>
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </div>
          <div className={styles.lina5}>Lina</div>
          <div className={styles.rectangleParent20}>
            <div className={styles.groupChild37} />
            <img
              className={styles.image12Icon5}
              alt=""
              src="/image-12@2x.png"
            />
          </div>
        </div>
       
        <div className={styles.groupWrapper9}>
          <div className={styles.monthParent2}>
            <div className={styles.month4}>3 Month</div>
            <div className={styles.div11}></div>
          </div>
        </div>
        
      </div>
 
    </div>
  );
};

export default CourseDetail;
